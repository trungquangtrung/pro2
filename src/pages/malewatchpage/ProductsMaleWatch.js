import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardText, Button, CardSubtitle } from 'reactstrap';
import './MaleWatch.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { AppContext } from '../../AppContext';

const ProductsMaleWatch = () => {
    const url = 'https://6624bc9404457d4aaf9cd927.mockapi.io/ProductsMaleWatch';
    const [data, setData] = useState([]);
    const { addCart } = useContext(AppContext);

    const getData = () => {
        axios.get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    };

    useEffect(() => {
        getData();
        AOS.init(); 
    }, []);

    return (
        <>
            <Container>
                <Row>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <Col lg={3} md={4} sm={6} xs={12} key={item.id} className="mb-4" data-aos="fade-up">
                                <Card className="product-card">
                                    <Link to={`/products/${item.id}`}>
                                        <img src={item.img} alt={item.title} className="product-image" />
                                    </Link>
                                    <CardBody>
                                        <CardSubtitle tag="h5" className="mb-2">
                                            {item.title}
                                        </CardSubtitle>
                                        <CardText className="text-muted mb-2">
                                            {item.text}
                                        </CardText>
                                        <CardText className="text-primary">
                                            {item.price} $
                                        </CardText>
                                        <Button onClick={() => addCart(item.id)}>
                                            Thêm Ngay
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p>Loading products...</p>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default ProductsMaleWatch;
