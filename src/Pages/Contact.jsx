import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css'
function Contact() {

  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');


  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
 const info = {
  name,
  phone,
  email,
 }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    setName('')
    setPhone('')
    setEmail('')
  }
  return (
    <div>
      <h2 className='text-center py-4'>Contact Us</h2>
      <div className='p-2 pb-5 contact'>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name : </Form.Label>
        <Form.Control type="text" name = 'name' placeholder="Enter name" value={name} onChange = {handleName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number : </Form.Label>
        <Form.Control type="number" name = 'phone' placeholder="Enter phone number" value={phone} onChange = {handlePhone}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email : </Form.Label>
        <Form.Control type="email" name = 'email' placeholder="Enter email" value={email} onChange = {handleEmail}/>
      </Form.Group>


      <Button  type="submit">
        Submit
      </Button>
    </Form>
      </div>
    </div>
  )
}

export default Contact