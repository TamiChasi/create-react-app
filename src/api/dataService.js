export const getPackageStatus = async (trackingNumber) => {
  try {
  

    if (!response.data || Object.keys(response.data).length === 0) {
      throw new Error('No data available for the given tracking number');
    }

    return response.data;
    
  } catch (err) {
    
  }
};
