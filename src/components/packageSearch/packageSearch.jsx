import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, TextField, Button, Box } from '@mui/material';
import './packageSearch.css';
import mockData from '../../data/mockData.json';
import ContactDetails from '../contactDetails/contactDetails';
import CloudIcon from '../../icons/cloudIcon';
import PersonGlobeIcon from '../../icons/personGlobeIcon';


export default function PackageSearch() {
  const { t } = useTranslation();
  const [packageNumber, setPackageNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);




  const handleChange = (event) => {
    setPackageNumber(event.target.value);
  };





  const search = () => {
    const result = mockData.find(item => item.declarationNumber === packageNumber);
    if (result) {
      setSearchResult(result);
      setError(null);
    } else {
      setSearchResult(null);
      setError(t("trackingNumberNotFound"));
    }
  };



  return (

    <div className='searchDiv'>

      <div className="iconContainer">
        <CloudIcon className="icon"/>
        <PersonGlobeIcon className="icon" />
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

      <Box  id="BoxContainer" display="flex" justifyContent="center">
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
    

    { error && <div style={{ color: 'red' }}>{error}</div> }


  {
    searchResult && (
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h3>{t("trackingDetails")}</h3>
        <p>{searchResult.contactDetails}</p>
        <p>{searchResult.contactPhone}</p>
        <p>{t("orBySite")}</p>
        <p>{searchResult.contactSite}</p>
      </div>
    )
  }

  { searchResult && <ContactDetails details={searchResult} /> }

  </div>


 
  );
}




{/* 
      <Box display="flex" justifyContent="center">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="50%"  // ניתן לשנות את הרוחב בהתאם לצורך
      >
        <Button id="OnclickSearch" variant="contained">
          {t("Search")}
        </Button>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
  */}

