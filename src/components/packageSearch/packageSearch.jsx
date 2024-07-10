import React, { useState } from 'react';
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


  const handleChange = (event) => {
    setPackageNumber(event.target.value);
  };

  const search = () => {
    var mockData = require('../../data/mockData.json');

    const result = mockData.find((item) => {
      return item.declerationNumber == packageNumber ? item : null
    }
    )
    if (result) {
      setSearchResult(result);
      setContext(searchResult)
      setError(null);
    } else {
      setSearchResult(null);
      setContext(null)

      setError(t("trackingNumberNotFound"));
    }
  };



  return (

    <div className='searchDiv'>
      <div className="iconContainer">
        <CloudIcon className="icon"/>
        <PersonGlobeIcon className="icon"  />
      </div>

      <div id="deliveryTrackingHeader">
        {t("shippingTrackingTitle")}
      </div>

      <br />

      <div id="subheadingShipmentTracking">
        {t("subheadingShipmentTracking")}
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
          width="50%">


          <Button id="onclickSearch" variant="contained"
            onClick={search}>
            {t("Search")}
          </Button>


          <TextField id="outlined-basic"
            label={t("TitleInput")}
            variant="outlined"
            placeholder={t("HereYouWriteTrackingTax")}
            value={packageNumber}
            onChange={handleChange}
            maxRows={4}
          >
          </TextField>
        </Stack>
      </Box>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}