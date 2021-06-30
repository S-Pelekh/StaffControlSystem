import React from "react";
import { Link } from "react-router-dom";

export default function UserCard(users) {
  return (
    <div className="userInfo">
      <div className="imgBlock">
        <img src={users.photo} alt="Phot" />
      </div>
      <div className="usernameBlock">
        <div>
          <Link to={`/user/${users.id}`}>{users.name}</Link>
        </div>
      </div>
      <div className="positionBlock">{users.position}</div>
      <div className="salaryBlock">{users.salary}$</div>
      <div className="statusBlock">
        <div className={`${users.status}Block`}>{users.status}</div>
      </div>
      <div className="dateBlock">{users.entryDate}</div>
    </div>
  );
}
