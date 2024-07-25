import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, TextField, Button, Box } from '@mui/material';
import './packageSearch.css';
import ContactDetails from '../contactDetails/contactDetails';
import CloudIcon from '../../icons/cloudIcon';
import PersonGlobeIcon from '../../icons/personGlobeIcon';

export default function PackageSearch({ setContext }) {
  const { t } = useTranslation();
  const [packageNumber, setPackageNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);
  const resultRef = useRef(null); // Ref לקומפוננטת התוצאות

  const handleChange = (event) => {
    setPackageNumber(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  const search = () => {
    var mockData = require('../../data/mockData.json');

    const result = mockData.find((item) => item.declerationNumber === packageNumber);
    if (result) {
      setSearchResult(result);
      setContext(result);


      

      setError(null);
    } else {
      setSearchResult(null);
      setContext(null);
      setError(t("trackingNumberNotFound"));
    }
  };

  
  useEffect(() => {
    // גלול לקומפוננטת התוצאות כאשר searchResult מתעדכן
    if (searchResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [searchResult]);


  return (
    <div >
      <div className="iconContainer">
       
      </div>

      <div id="deliveryTrackingHeader">
        {t("shippingTrackingTitle")}
      </div>

      <br />

      <div id="subheadingShipmentTracking">
        {t("subheadingShipmentTracking")}
      </div>

      <br />

      <div id="SubheadingWithIsraelPostlink">
       {t("Subheading with shipment tracking link")}
      </div>

      <br />
      
      <div id="subheadingShipmentTrackingB">
        {t("highlightedSubheadingShipmentTracking")}
      </div>

      <br />

      <Box id="BoxContainer" display="flex" justifyContent="center">
        <Stack
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="50%"
        >
          <Button id="onclickSearch" variant="contained" onClick={search}>
            {t("Search")}
          </Button>

          <TextField
            id="outlined-basic"
            className='TexstPadding'
            label={t("TitleInput")}
            variant="outlined"
            placeholder={t("HereYouWriteTrackingTax")}
            value={packageNumber}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            maxRows={4}
            InputProps={{
              className: 'placeholderPadding',
            }}
          />
        </Stack>
      </Box>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {/* תצוגת קומפוננטת התוצאות עם גלילה אוטומטית */}
      {searchResult && (
        <div ref={resultRef} className="searchResultContainer">
          <packageInfo result={searchResult} />
        </div>
      )}
    </div>
  );
}
