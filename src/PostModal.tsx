import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MultiSelect } from "./Common/MultiSelect";
import { TagOption, TagType } from "./Common/Types";
import { url } from "./constants";

function CreatePostModal(props: {show : boolean, onHide: () => void}) {
    const [title, setTitle] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<Date>(new Date());
    const [selectedOptions, setSelectedOptions] = useState<TagOption[]>([]);
    
    const params = useParams();
    const id = params.id

    const handlePostCreation = (title: string, address: string, description: string, date: Date, tags: TagType[]) => {
        axios.post(url + "events/add", {
            title: title,
            address: address,
            date: date,
            tags: tags,
            description: description
        }).then(res => {
            axios.get(url + "events/findByTitleAddress", {params: {name: title, location: address}})
                .then(response => {
                    let eventId = response.data._id.toString();
                    axios.post(url + "users/updateEvents/" + id, {events: [eventId]})
                        .then(response2 => {
                            return;
                        })
                        .catch(err => console.log(err));
                })
        })
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let selectTagType: TagType[] = []
        selectedOptions.forEach((opt: TagOption) => selectTagType.push({_id: opt.id, name: opt.label}))
        handlePostCreation(title, address, description, date, selectTagType);
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Post about an event!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
            <Row>
                <Col>
            <Form.Group className="mb-3">
                    <Form.Control 
                        placeholder="Event Title" 
                        onChange={e => {
                            setTitle(e.target.value);
                        }}/>
            </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="eventDate">
                        <Form.Control 
                            type="date" 
                            name="eventDate" 
                            placeholder="Date"
                            onChange={e => {
                                setDate(new Date(e.target.value.replace(/-/g, '/')));
                            }}/>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3">
                <Form.Control 
                    placeholder="Event Address"
                    onChange={e => {
                        setAddress(e.target.value);
                    }}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Description"
                    onChange={e => {
                        setDescription(e.target.value);
                    }}/>
            </Form.Group>
            <MultiSelect header="Add Tags" selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
            <Modal.Footer>
                <Button type="submit" onClick={props.onHide}>Post</Button>
            </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}


export function ButtonToCreatePost() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Post an event
            </Button>

            <CreatePostModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}