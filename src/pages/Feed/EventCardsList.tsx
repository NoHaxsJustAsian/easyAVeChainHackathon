import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../constants";
import EventProps from "../Props/EventProps";
import EventCard from "./EventCard";
import './cards.css'
import LogoCard from "../../Home-Page/LogoCard";
import { ButtonToCreatePost } from "../../PostModal";

export default function EventCardsList() {
    const [events, setEvents] = useState<EventProps[]>([])

    let imageArray = [
        `https://th.bing.com/th/id/OIP.X_65uIJkSF8bJl_zyU4twgHaEo?w=290&h=181&c=7&r=0&o=5&pid=1.7`,
        `data:image/jpeg;base64,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`,
        `https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=`,
        `https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg`,
        `https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960`,
        `https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=`,
        `https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/b33c73279163c84b65241cdfcc1c8844/Fresh_Stock_Content.jpg`,
    ]

    useEffect(() => {
        axios.get(url + "events")
            .then(res => setEvents(res.data))
            .catch(err => `Error: ${err}`);
    },[]);
    
    const eventCardsList = () => {
        return events.map(e => {
            return (
            <div className="cards">
                <EventCard 
                    _id={e._id}
                    name={e.name}
                    location={e.location}
                    dateTime={e.dateTime}
                    image={imageArray[Math.floor(Math.random() * imageArray.length)]}
                    tags={e.tags}
                    description={e.description}
                    popularity={e.popularity} />
            </div>
        )})
    }

    return (
        <div>
            <LogoCard/>
            <div className="headers">
                <h2 className="h2">Events Feed</h2>
                <ButtonToCreatePost/>
            </div>
            <div className="d-flex flex-wrap justify-content-between p-2 container">
                {eventCardsList()}
            </div>
        </div>
    );
}