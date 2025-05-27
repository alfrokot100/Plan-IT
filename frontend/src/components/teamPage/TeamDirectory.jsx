import { useState, useEffect } from "react";
import axios from "axios";
import "./TeamDirectory.css";

// Avatar circle with the first letter of the name
function FirstLetter({ name }) {
  if (!name) return null;
  const firstLetter = name.charAt(0).toUpperCase();
  return <span>{firstLetter}</span>;
}

// Individual profile card component
function ProfileCard({ member, onView }) {
  return (
    <div className="card">
      <div className="avatar-circle">
        <FirstLetter name={member.username} />
      </div>
      <h2 className="card-title">{member.username}</h2>
      
      <div className="card-body">
      <p className="card-subtitle"><strong>Role:</strong></p>
      <p className="card-subtitle-right">{member.role}</p>

      <p className="card-subtitle"> <strong>Team: </strong></p>
      <p className="card-subtitle-right">{member.team}</p>
      </div>

      <button onClick={() => onView(member)}>View</button>
    </div>
  );
}

// Filters bar
function Filters({ filters, setFilters, allMembers }) {
  const roles = [...new Set(allMembers.map((m) => m.role))];
  const locations = [...new Set(allMembers.map((m) => m.location))];
  const teams = [...new Set(allMembers.map((m) => m.team))];

  const handleChange = (key) => (e) => {
    setFilters({ ...filters, [key]: e.target.value });
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Sök efter namn eller beskrivning..."
        className="search-input"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />

      <select onChange={handleChange("team")} value={filters.team}>
        <option value="">All Teams</option>
        {teams.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <select onChange={handleChange("role")} value={filters.role}>
        <option value="">All Roles</option>
        {roles.map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      <select onChange={handleChange("location")} value={filters.location}>
        <option value="">All Locations</option>
        {locations.map((l) => (
          <option key={l} value={l}>{l}</option>
        ))}
      </select>
    </div>
  );
}

// Helper: paginate array
function paginate(data, page, perPage) {
  const start = (page - 1) * perPage;
  return data.slice(start, start + perPage);
}

// Main component
export default function TeamDirectory() {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    team: "",
    role: "",
    location: "",
    search: "",
  });
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [sort, setSort] = useState("name");
  const [selectedMember, setSelectedMember] = useState(null);

  // Fetch users pulling from the API
  useState(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://localhost:7007/Users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);



  // Filter logic
  const filtered = users.filter((m) => {
    const searchMatch =
      filters.search === "" ||
      m.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      m.description.toLowerCase().includes(filters.search.toLowerCase());

    return (
      (!filters.team || m.team === filters.team) &&
      (!filters.role || m.role === filters.role) &&
      (!filters.location || m.location === filters.location) &&
      searchMatch
    );
  });

  // Sort logic
  const sorted = [...filtered].sort((a, b) => {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sorted.length / perPage);
  const paginated = paginate(sorted, page, perPage);

  return (
    <div className="team-directory">
      <header className="header-directory">
        <div className="header-title">
          <h2>Teamkatalog</h2>
          <p>Här kan du hitta och få kontakt med dina lagkamrater</p>
        </div>

        <div className="header-body">
          <Filters filters={filters} setFilters={setFilters} allMembers={users} />
        </div>
      </header>

      <div className="card-grid">
        {paginated.map((member) => (
          <ProfileCard key={member.id} member={member} onView={setSelectedMember} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
        Tidigare
        </button>
        <span>Sida {page} av {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
          Nästa
        </button>
      </div>

      <div className="per-page">
        <label>Kort per sida </label>
        <select value={perPage} onChange={(e) => {
          setPerPage(Number(e.target.value));
          setPage(1);
        }}>
          {[6, 12, 24].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      {selectedMember && (
        <div className="modal" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMember(null)}>X</button>
            <div className="avatar-circle">
            <FirstLetter name={selectedMember.username} />
            </div>
            <h2>{selectedMember.name}</h2>
            <p><strong>Role:</strong> {selectedMember.role}</p>
            <p><strong>Email:</strong> {selectedMember.email}</p>
            <p><strong>Description:</strong> {selectedMember.description}</p>
            <p><strong>Team:</strong> {selectedMember.team}</p>
          </div>
        </div>
      )}
    </div>
  );
}
