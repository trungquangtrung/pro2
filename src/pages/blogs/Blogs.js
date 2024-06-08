import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Blog.css';
import HeaderMain from '../../Components/header/HeaderMain';
import Footer from '../../Components/footer/Footer';

const Blogs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <>
            <HeaderMain />
            <section className="contact-section">
                <Container>
                    <Row>
                        <Col lg={6} md={8} sm={12} className="mx-auto">
                            <h2 className="text-center">Liên Hệ Chúng Tôi</h2>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="name">Tên của bạn</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Nhập tên của bạn"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email của bạn</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Nhập email của bạn"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="message">Tin nhắn</Label>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Nhập tin nhắn của bạn"
                                        required
                                    />
                                </FormGroup>
                                <Button type="submit" color="primary" block>Gửi Tin Nhắn</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
}

export default Blogs;
