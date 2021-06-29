import React from "react";
import { Link } from "react-router-dom";

export default function UserCard(users) {
  return (
    <div>
      <div>
        <img src={users.photo} alt="Phot" />
      </div>
      <h3>
        <Link to={`/user/${users.id}`}>{users.name}</Link>
      </h3>

      <p>{users.salary}$</p>
      <p>{users.status}</p>
      <p>{users.entryDate}</p>
    </div>
  );
}
