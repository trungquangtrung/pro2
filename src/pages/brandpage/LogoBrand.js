import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Container, Row, Col } from 'reactstrap'; // Import Reactstrap components
import logoSeiko from '../../Image/Seiko.png';
import logoSaga from '../../Image/Saga.png';
import logoKOI from '../../Image/KOI.png';
import logoCasio from '../../Image/Casio.png';
import logoCitizen from '../../Image/Citizen.png';
import './LogoBrand.css';

const LogoBrand = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="BrandLogo">
                        <ul className="logo-list">
                            <li>
                                <Link to='/thương-hiệu/Seiko'>
                                    <img src={logoSeiko} alt="Seiko" />
                                </Link>
                            </li>
                            <li>
                                <Link to='/thương-hiệu/Saga'>
                                    <img src={logoSaga} alt="Saga" />
                                </Link>
                            </li>
                            <li>
                                <Link to='/thương-hiệu/KOI'>
                                    <img src={logoKOI} alt="KOI" />
                                </Link>
                            </li>
                            <li>
                                <Link to='/thương-hiệu/Casio'>
                                    <img src={logoCasio} alt="Casio" />
                                </Link>
                            </li>
                            <li>
                                <Link to='/thương-hiệu/Citizen'>
                                    <img src={logoCitizen} alt="Citizen" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default LogoBrand;
