import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12} className="footer-col" data-aos="fade-up">
                        <h5>Về Chúng Tôi</h5>
                        <p>Đại Lý Chính Thức Của Các Hãng Đồng Hồ</p>
                        <p>Phòng Bảo Hành Đạt Chuẩn Quốc Tế</p>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="footer-col" data-aos="fade-up">
                        <h5>Thông tin liên hệ</h5>
                        <p>Địa chỉ: 47/30/10 Đường số 19, Phường 9, Quận Gò Vấp</p>
                        <p>Email: trungquang00000@gmail.com</p>
                        <p>Hotline: 0969...2071</p>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="footer-col" data-aos="fade-up">
                        <h5>Theo Dõi Chúng Tôi</h5>
                        <div className="social-icons">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center" data-aos="fade-up">
                        <p>&copy; 2023 Watch Shop.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
