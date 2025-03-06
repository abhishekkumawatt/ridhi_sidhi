import React from 'react'
import Header from '../header/Header'
import "../contact/Contact.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../footer/Footer'

const Contact = () => {
    return (
        <div>
            <Header />
            <br /><br /><br /><br /><br /><br /><br />
            <div className='contactmain1'>
                <b>Contact</b>
                <h6 style={{ margin: '23px 0 0 57pc', fontWeight: '400' }}>Home </h6>
                <h6 style={{ margin: '23px 155px 0 0px', fontWeight: '400' }}>/ Contact</h6>
            </div>
            <div className='contactmain2'>
                <div className='getintouch' style={{width:'580px', borderRadius:'5px 0 0 5px',height:'445px'}}>
                    <h2>Get in touch</h2>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br /> luctus nec ullamcorper mattis</h6>
                    <br />
                    +91 9521906731,9694490409 <br />
                    ridhisidhi17@gmail.com<br />
                    Shop no. 23, Near by HDFC Bank, Niwaru Road, Jhotwara, Jaipur<br /><br />
                    ______________________________<br /><br />
                    <b>Open Hours </b><br />
                    Monday-Sunday <br />
                    08 AM - 08 PM <br /><br />
                    Saturday-Sunday<br />
                    24 Hours
                </div>
                <div className='googlemap' style={{width:'200px', borderRadius:'5px'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9391.411123995413!2d75.72262719888815!3d26.963586813230542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sridhi%20sidhi%20hardware%20%26%20paints%20!5e0!3m2!1sen!2sin!4v1725023886539!5m2!1sen!2sin" style={{ width: "600px", height: "445px", style: "border:0;", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
                </div>
            </div>
            <div className='contactmain3'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="message" placeholder="Enter the message..." />
                    </Form.Group>

                    <Button variant="warning" type="submit">
                        SEND
                    </Button>
                </Form>
            </div>
            <Footer />
        </div>
    )
}

export default Contact