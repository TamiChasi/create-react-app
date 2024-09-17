import axios from 'axios';
// import { CargoResult } from '../data/cargoData';


export const getPackageStatus = async (trackingNumber) => {
  try {
    const response = await axios.get('/CustomspilotWeb/he/CargoSearch/api/get', {
      params: {
        token: process.env.REACT_APP_PACKAGE_STATUS_API_TOKEN,
        CargoSearchKey: trackingNumber,
      },
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch data'); // Throw a new error with a custom message
  }
};
