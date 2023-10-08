import {Container, Row, Col} from 'react-bootstrap';
import EventCard from './Feed/EventCard';
import EventCardsList from './Feed/EventCardsList';
import Navbar from './Navbar';
import {useParams} from 'react-router-dom';



function Feed() {
  const params  = useParams();
  const id = params.id;


    return (<div className="bg-indigo-300">
    
    <Navbar id={id}/>
    <EventCardsList/>

    </div>

    )
}

export default Feed ;
