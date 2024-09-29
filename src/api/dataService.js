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

    if (!response.data || Object.keys(response.data).length === 0) {
      throw new Error('No data available for the given tracking number');
    }

    return response.data;
    
  } catch (err) {
    if (err.response) {      
      console.log(`API error: ${err.response.status} - ${err.response.statusText}`)
      throw new Error(`API error: ${err.response.status} - ${err.response.statusText}`);
    } else if (err.request) {
      throw new Error('No response received from the server');
    } else {
      throw new Error('Failed to fetch data');
    }
  }
};
