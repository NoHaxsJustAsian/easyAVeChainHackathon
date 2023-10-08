import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsBookmarkPlus, BsBookmarkFill } from "react-icons/bs";
import { useState } from "react";
import { Container } from "react-bootstrap";
import EventProps from "../Props/EventProps";
import {useParams} from 'react-router-dom';

function BookMark() {
  const [mark, setBookmark] = useState(false);

  function updateBookmark() {
    setBookmark(!mark);
  }

  return mark ? (
    <BsBookmarkPlus
      size={25}
      onClick={updateBookmark}
      className="hover:scale-110 transition duration-300 ease-in-out mt-auto mb-auto"
    />
  ) : (
    <BsBookmarkFill
      size={25}
      onClick={updateBookmark}
      className="hover:scale-110 transition duration-300 ease-in-out mt-auto mb-auto"
    />
  );
}

function TakeToEventButton(props: {eid:string}) {
  const params  = useParams();
  const id = params.id;

  return (
    <a
      className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
      href={"/plan/" + id + "/" + props.eid}
    >
      <span className="sr-only"> Download </span>

      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </a>
  );
}

const EventCard = (props: EventProps) => (
  <Card className="hover:border-blue-600 pt-1" style={{ width: "18rem", height: "100%" }}>
    <Card.Img
      className="mt-2.5"
      variant="top"
      src={props.image}
    />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
      <Container className="d-flex justify-content-evenly">
        <BookMark />
        <TakeToEventButton eid={props._id} />
      </Container>
      <div></div>
    </Card.Body>
  </Card>
);

export default EventCard;
