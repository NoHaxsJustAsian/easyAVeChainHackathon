import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const teamMembers2 = [
  {
    name: "Tunwa (Win) Tongtawee",
    photo: require("./Win.jpg"),
    desc: "3nd year CS student at Northeastern Univerity",
    link: "https://www.linkedin.com/in/tunwa-tongtawee/",
  },
  {
    name: "Charles Tang",
    photo: require("./Charles.jpeg"),
    desc: "Senior at Ma Academy",
    link: "https://www.linkedin.com/in/charlestang06/",
  },
  {
    name: "Aryan Malik",
    photo: require("./Aryan.jpeg"),
    desc: "3nd year Math and Finance at Rutgers University",
    link: "https://www.linkedin.com/in/aryan-malik-xd/",
  },
  {
    name: "Adam Belfi",
    photo: require("./Adam.jpeg"),
    desc: "5nd year CS student at NEU",
    link: "https://www.linkedin.com/in/adam-belfki/",
  }
];

function TeamMembers2() {
  return (
    <div className="container" id="section1">
      <center>
        <h1 style={{ fontFamily: '"Futura", sans-serif', color: "white" }}>
          The Team
        </h1>{" "}
      </center>
      <hr style={{ color: "white" }} />
      <div className="row">
        {teamMembers2.map((member, index) => {
          return (
            <div
              key={index}
              className="col-lg-3 col-sm-6 mb-4"
            >
              <a
                href="#"
                className="group relative block bg-black no-underline"
              >
                <img
                  alt="Developer"
                  src={member.photo}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-30"
                />

                <div className="relative p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Developer
                  </p>

                  <p className="text-2xl font-bold text-white">{member.name}</p>

                  <div className="mt-64">
                    <div className="translate-y-2 transform opacity-5 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">{member.desc}</p>
                      <a className="btn btn-primary" href={member.link}>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamMembers2;
