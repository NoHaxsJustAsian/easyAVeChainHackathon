import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { url } from '../../constants';
import { useParams, useNavigate } from 'react-router-dom';
import { TagOption, TagType } from '../../Common/Types';
import { MultiSelect } from '../../Common/MultiSelect';
import Navbar from '../Navbar'

export default function Profile() {
    const params = useParams();
    const id = params.id
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [selectedOptions, setSelectedOptions] = useState<TagOption[]>([]);
    const nav = useNavigate();

    useEffect(() => {
        axios.get(url + "users/" + id)
        .then(res => {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setUsername(res.data.username);
        }) 
        .catch(err => console.log(err));
    }, [params.id])

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let selectTagType: TagType[] = []
        selectedOptions.forEach((opt: TagOption) => selectTagType.push({_id: opt.id, name: opt.label}))
        
        axios.post(url + "users/updateTags/" + id, {tags: selectTagType})
        .then(res => {
            nav("/feed/"+ id)
        }) 
        .catch(err => console.log(err));
    }

    return (
        <>
        <Navbar id={id}/>
        <div className="Container border">
            <header className='ProfileHeader'>Profile</header>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3 FormGroup">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="Disabled input" disabled defaultValue={firstName}/>
                </Form.Group>
                <Form.Group className="mb-3 FormGroup">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Disabled input" disabled defaultValue={lastName}/>
                </Form.Group>
                <Form.Group className="mb-3 FormGroup">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Disabled input" disabled defaultValue={username}/>
                </Form.Group>
                <MultiSelect header="Select a few of your interests" selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
                <Button variant="danger" type="submit" className="ProfileSubmit">
                    Save
                </Button>
            </Form>
        </div>
        </>
    )
}