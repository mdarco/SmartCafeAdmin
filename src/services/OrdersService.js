import { useContext } from 'react';
import ConfigContext from '../config/ConfigContext';
import axios from 'axios';

const config = useContext(ConfigContext);
const API_BASE_URL = config.API_BASE_URL;

const getOrders = async () => {
    const url = `${API_BASE_URL}/orders`;
    console.log('OrdersService::getOrders::url', url);
    return axios.get(url);
};

const OrdersService = {
    getOrders
};

export default OrdersService;
