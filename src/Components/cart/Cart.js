import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { Button, Table } from 'reactstrap';
import Header from '../header/HeaderMain';
import './Cart.css';

const Cart = () => {
    const { cart, removeById, update_qty } = useContext(AppContext);

    return (
        <>
            <Header />
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Chi Tiết Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Thay Đổi Số Lượng</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td>
                                <img src={item.img} alt={item.title} className="cart-item-image" />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.text}</td>
                            <td>{item.Price.toLocaleString()} $</td>
                            <td>{item.qty}</td>
                            <td>
                                <Button
                                    onClick={() => update_qty(item.id, -1)}
                                    disabled={item.qty <= 1}
                                    className="qty-button"
                                >-
                                </Button>
                                <Button
                                    onClick={() => update_qty(item.id, 1)}
                                    className="qty-button"
                                >+
                                </Button>
                            </td>
                            <td>
                                <Button
                                    onClick={() => removeById(item.id)}
                                    className="remove-button"
                                >X
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h2>Tổng Cộng: {cart.reduce((total, item) => total + (item.Price * item.qty), 0).toLocaleString()} $</h2>
        </>
    );
}

export default Cart;
