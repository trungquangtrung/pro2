import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AppContext = createContext({});

export function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [count, setCount] = useState(1);

  const getData = async () => {
    try {
      const response = await axios.get('https://6624bc9404457d4aaf9cd927.mockapi.io/Products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addCart = (id) => {
    const product = products.find(item => item.id === id);
    if (!product) return;

    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === id);
      if (existingItemIndex >= 0) {
        const updatedCart = prevCart.map((item, index) =>
          index === existingItemIndex ? { ...item, qty: item.qty + 1 } : item
        );
        return updatedCart;
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  const removeById = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const update_qty = (id, num) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, qty: item.qty + num } : item
      )
    );
  };

  return (
    <AppContext.Provider value={{ count, setCount, products, cart, addCart, removeById, update_qty }}>
      {children}
    </AppContext.Provider>
  );
}
