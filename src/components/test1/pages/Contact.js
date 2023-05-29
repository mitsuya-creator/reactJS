import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";


function ContactMe() {
    const [input, setInput] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput((values) => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
    }
    return (
        <div className="contact-me ms-5">
            <h1 className="mt-3">Contact Me</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Name@example.com" name="email" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Greetings" name="subject" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} name="textarea" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div >
    );
}

export default ContactMe;