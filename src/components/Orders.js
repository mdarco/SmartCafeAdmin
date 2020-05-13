import React, { useEffect } from 'react';
import OrdersService from '../services/OrdersService';

const Orders = () => {
	useEffect(() => {
		const getOrders = async () => {
			let orders = await OrdersService.getOrders();
			console.log('Orders page::getOrders::response', orders);
		};
		getOrders();
	}, []);

	return (
		<div>ORDERS PAGE!</div>
	);
};

export default Orders;
