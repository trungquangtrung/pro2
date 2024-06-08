import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardText, Button, CardSubtitle } from 'reactstrap';
import './Products.css';
import ProductsMaleWatch from '../../pages/malewatchpage/ProductsMaleWatch';
import ProductsFemaleWatch from '../../pages/femalewatchpage/ProductsFemaleWatch';
import ProductsCoupleWatch from '../../pages/couplewatchpage/ProductsCoupleWatch';
import { AppContext } from '../../AppContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LogoBrand from '../../pages/brandpage/LogoBrand';

const Products = () => {
    const url = 'https://6624bc9404457d4aaf9cd927.mockapi.io/Products';
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
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <>
            <Container>
                <h1 className="text-center my-4">Danh sách các sản phẩm</h1>
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
                                        <CardText className="text-primary font-weight-bold">
                                            {item.Price} $
                                        </CardText>
                                        <Button color="primary" onClick={() => addCart(item.id)}>
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
                <h1 className="text-center my-4" data-aos="fade-right">Đồng Hồ Nam Bán Chạy</h1>
                <ProductsMaleWatch />
                <h1 className="text-center my-4" data-aos="fade-right">Đồng Hồ Nữ Bán Chạy</h1>
                <ProductsFemaleWatch />
                <h1 className="text-center my-4" data-aos="fade-right">Đồng Hồ Cặp Đôi</h1>
                <ProductsCoupleWatch />
                <h1 className="text-center my-4" data-aos="fade-right">THƯƠNG HIỆU ĐỒNG HỒ NỔI TIẾNG</h1>
                <LogoBrand/>
            </Container>
        </>
    );
};

export default Products;
