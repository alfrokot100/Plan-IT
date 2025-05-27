import "/src/components/teamPage/QuickConnect.css";
import { Link } from "react-router-dom";

export default function QuickConnect( ) {
  return (
    <>
      <div className="card">
        <p className="title">Quick Connect</p>
        <div className="user__container">
          <div className="user">
            <div className="image"></div>
            <div className="user__content">
              <div className="text">
                <span className="name">Member Name</span>
              </div>
              <button className="connect">Connect</button>
            </div>
          </div>
          <div className="user">
            <div className="image"></div>
            <div className="user__content">
              <div className="text">
                <span className="name">Name</span>
              </div>
              <button className="connect">Connect</button>
            </div>
          </div>
          <div className="user">
            <div className="image"></div>
            <div className="user__content">
              <div className="text">
                <span className="name">Name</span>
              </div>
              <button className="connect">Connect</button>
            </div>
          </div>
        </div>

        <Link to ="/team" className="more">
          See more
        </Link>
      </div>


    </>
  );
}
