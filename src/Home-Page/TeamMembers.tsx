import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const teamMembers = [
  {
    name: "Jaren Adams",
    photo: require("./Tris.jpg"),
  },
  {
    name: "Caleb Lee",
    photo: require("./Kale.jpg"),
  },
  {
    name: "Tunwa (Win) Tongtawee",
    photo: require("./Win.jpg"),
  },
  {
    name: "Tristen Li",
    photo: require("./Tris.jpg"),
  },
  {
    name: "Lucy",
    photo: require("./Tris.jpg"),
  },
  {
    name: "Cole Harvey",
    photo: require("./Cole.jpg"),
  },
];

function TeamMembers() {
  return (
    <div className="container">
      <div className="row">
        {teamMembers.map((member) => (
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5">
            <img
              src={member.photo}
              alt={`Team Member ${member.name}`}
              className="img-fluid rounded-circle"
              style={{
                height: "150px",
                width: "150px",
                objectFit: "cover",
              }}
            />
            <h5 className="mt-3">{member.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
