import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';
import './Header.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppContext } from '../../AppContext'; 
import Logo from '../../Image/Logo.png'
const HeaderMain = () => {
  const url = 'https://6624bc9404457d4aaf9cd927.mockapi.io/Products';
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const { addCart } = useContext(AppContext);

  useEffect(() => {
    getData();
    AOS.init({ duration: 1200 });
  }, []);

  const getData = () => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  };

  const handleSearch = (e) => {
    const text = e.target.value;
    setQuery(text);
    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredResults(filteredData);
  };

  return (
    <>
      <div className='header-container'>
        <div className='logo'>
          <Link to='/'><img src={Logo} alt="Logo" /></Link>
        </div>
        <div className='market-search'>
          <div className='search'>
            <input 
              type='text' 
              placeholder='Tìm kiếm...' 
              value={query}
              onChange={handleSearch}
            />
          </div>
          <div className='market'>
            <Link to='/giỏ-hàng' className='cart'>
              <i className='fas fa-cart-shopping'></i>
            </Link>
          </div>
        </div>
      </div>
      <div className='nav'>
        <ul>
          <li>
            <Link to='/thương-hiệu'>Thương Hiệu</Link>
            <ul className='dropdown'>
              <li><Link to='/thương-hiệu/Casio'>Casio</Link></li>
              <li><Link to='/thương-hiệu/Citizen'>Citizen</Link></li>
              <li><Link to='/thương-hiệu/KOI'>KOI</Link></li>
              <li><Link to='/thương-hiệu/Saga'>Saga</Link></li>
              <li><Link to='/thương-hiệu/Seiko'>Seiko</Link></li>
            </ul>
          </li>
          <li><Link to='/đồng-hồ-nam'>Nam</Link></li>
          <li><Link to='/đồng-hồ-nữ'>Nữ</Link></li>
          <li><Link to='/đồng-hồ-cặp-đôi'>Cặp Đôi</Link></li>
          <li><Link to='/tin-tức'>Tin Tức</Link></li>
          <li><Link to='/liên-hệ'>Liên Hệ</Link></li>
        </ul>
      </div>
      <div className='search-results'>
        <Row>
          {filteredResults.map((item) => (
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
                    {item.price} VND
                  </CardText>
                  <Button color="primary" onClick={() => addCart(item.id)}>
                    Thêm Ngay
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HeaderMain;
