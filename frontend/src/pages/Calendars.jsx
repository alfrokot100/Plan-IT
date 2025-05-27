import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import { myEventsList } from "../components/calendarPage/EventsList";
import CalendarHeader from "../components/calendarPage/CalendarHeader";
import CustomSidebar from "../components/navbar/CustomSidebar";
import "./Calendars.css";
import Navbar from "../components/navbar/Navbar";

const localizer = momentLocalizer(moment);




export default function Calendars() {
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleNavigate = (newDate) => {
    setDate(newDate);
  };

  const [eventList, setEventlist] = useState([
    {
      title: "",
      description: "",
      dueDate: "",
      teamMembers: [],
      project: "",
      status: ""
    },
  ]);

   useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("https://localhost:7007/tasks");
        setEventlist(response.data.map(({ dueDate, title }) => ({
  title,
  start: new Date(dueDate),
  end: new Date(dueDate)
})));
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (

    <>
    <Navbar />
    <CustomSidebar />
    <CalendarHeader />


    <main  className="calendar-main" style={{ height: 800, marginLeft: "16rem"}}>
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        views={{ month: true, week: true, agenda: true }}
        view={view}
        onView={handleViewChange}
        date={date}
        onNavigate={handleNavigate}
        popup
        className="calendar"
      />
    </main>

    </>
  );
}