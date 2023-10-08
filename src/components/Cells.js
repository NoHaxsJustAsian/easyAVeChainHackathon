import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/map.png";
import safety from "./safety-icon.png";
import snowboard from "./robots.png";
import world from "./world.png";

export const Cells = () => {
    return (
        <Container>
            <div className="flex flex-wrap justify-between">
                {[{
                    imgSrc: logo, width: "26", title: "Location Based", description: "TAP uses geolocation to find plans and potential friends near you."
                }, {
                    imgSrc: safety, width: "37", title: "Freedom of Selection", description: "Not only can you create plans with locations and time, you can choose who joins."
                }, {
                    imgSrc: snowboard, width: "41", title: "Tailored To Your Interests", description: "Select your interests to generate a curated feed that suits your taste."
                }, {
                    imgSrc: world, width: "41", title: "Build Community", description: "Discover meaningful relationships and build a network of your new friends!"
                }].map(({imgSrc, width, title, description}) => (
                    <div key={title} style={{ maxWidth: "20%" }} className="block rounded-xl border border-gray-800 bg-gray-800 p-8 shadow-xl no-underline hover:-translate-y-1 hover:scale-110 duration-150">
                        <div className={`icon-${title.toLowerCase().replace(/\s/g, '-')}`}>
                            <img src={imgSrc} width={width} />
                        </div>
                        <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
                        <p className="mt-4 text-sm text-gray-300">{description}</p>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default Cells;
