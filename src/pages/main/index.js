import React from "react";

import Api from "../../helpers/api";

export const MainPage = () => {
  const getPeople = async () => {
    const allStaff = await fetch(`http://localhost:3001/people`).then((res) =>
      res.json()
    );
    console.log(allStaff);
  };
  getPeople();
  return <section>Main page</section>;
};
