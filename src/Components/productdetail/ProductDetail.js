import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../header/HeaderMain';
import { AppContext } from '../../AppContext'; 
import "./Productdetail.css";

const ProductsDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addCart } = useContext(AppContext); 

    useEffect(() => {
        const url = `https://6624bc9404457d4aaf9cd927.mockapi.io/Products/${id}`;
        axios.get(url)
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>There was an error loading the product details. Please try again later.</p>;
    }

    return (
        <>
            <Header />
            <div className="product-detail-container">
                <h1>Product Details</h1>
                <div className="product-detail">
                    <div className="product-detail-left">
                        <img src={data?.img} alt={data?.tittle} className="product-detail-image" />
                    </div>
                    <div className="product-detail-right">
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                        <p>{data?.text2}</p>
                        <p className="product-detail-price">{data?.Price} VND</p>
                        <button onClick={() => addCart(data.id)} className="add-to-cart-button">
                            Thêm Vào Giỏ Hàng Ngay
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsDetail;
