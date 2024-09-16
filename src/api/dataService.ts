import axios from 'axios';
// import { CargoResult } from '../data/cargoData';

const API_URL = 'https://shaarolami-query.customs.mof.gov.il/CustomspilotWeb/he/CargoSearch/api/get';

export const getPackageStatus = async (trackingNumber: string) => {
  try {
    const response = await axios.get('/CustomspilotWeb/he/CargoSearch/api/get', {
        params: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1vdGlfY2giLCJuYmYiOjE2MjIxMjQ4MDMsImV4cCI6MzE3NzMyNDgwMywiaWF0IjoxNjIyMTI0ODAzfQ.GypV96W3Gqv2vlDU_Demk7xCjBJ70JXUDgia0ox95rs',
          CargoSearchKey: trackingNumber,
        },
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('response', response.data)
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch data'); // Throw a new error with a custom message
  }
};
