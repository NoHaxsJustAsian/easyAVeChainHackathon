import { Container } from "react-bootstrap";
import React from "react";
import logo from "./map.png";
import safety from "./safety-icon.png";
import snowboard from "./robots.png";
import world from "./world.png";

function WhyTAPCard() {
    return (
        <Container>
            <div className="flex flex-wrap justify-between">
            <div style={{ maxWidth: "20%" }} className="block rounded-xl border border-gray-800 bg-gray-800 p-8 shadow-xl no-underline hover:-translate-y-1 hover:scale-110 duration-150">
                <div className="logo">
                  <img src={logo} width="26" />
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">Location Based</h3>

                <p className="mt-4 text-sm text-gray-300">
                    TAP uses geolocation to find plans and potential friends near you.
                </p>
            </div>
            <div style={{ maxWidth: "20%" }} className="block rounded-xl border border-gray-800 bg-gray-800 p-8 shadow-xl no-underline hover:-translate-y-1 hover:scale-110 duration-150">
                <div className="safety">
                  <img src={safety} width="37" />
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">Freedom of Selection</h3>

                <p className="mt-4 text-sm text-gray-300">
                    Not only can you create plans with locations and time, you can choose who joins.
                </p>
            </div>
            <div style={{ maxWidth: "20%" }} className="block rounded-xl border border-gray-800 bg-gray-800 p-8 shadow-xl no-underline hover:-translate-y-1 hover:scale-110 duration-150">
                <div className="snowboard">
                  <img src={snowboard} width="41" />
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">Tailored To Your Interests</h3>

                <p className="mt-4 text-sm text-gray-300">
                    Select your interests to generate a curated feed that suits your taste.
                </p>
            </div>
            <div style={{ maxWidth: "20%" }} className="block rounded-xl border border-gray-800 bg-gray-800 p-8 shadow-xl no-underline hover:-translate-y-1 hover:scale-110 duration-150">
                <div className="world">
                  <img src={world} width="41" />
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">Build Community</h3>

                <p className="mt-4 text-sm text-gray-300">
                    Discover meaningful relationships and build a network of your new friends!
                </p>
            </div>
            </div>

        </Container>
    );
}

export default WhyTAPCard;
