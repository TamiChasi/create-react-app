import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, TextField, Button, Box, Link, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import './packageSearch.css';
import WarningAmberIcon from '@mui/icons-material/WarningAmber'; // ייבוא האייקון
import { getPackageStatus } from '../../api/dataService'



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

  const search = async () => {
    try {

      const result = await getPackageStatus(packageNumber);
      if (result) {
        setSearchResult(result);
        setContext(result);
        setError(null);
      } else {
        setSearchResult(null);
        setContext(null);
        setError(t("trackingNumberNotFound"));
      }
    }
    catch {
      throw new error;
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

      <div id="subheadingShipmentTrackingB">
        {t("highlightedSubheadingShipmentTracking")}
      </div>

      {/* <div id="SubheadingWithIsraelPostlink">
       {t("SubheadingWithShipmentTrackingLink")}
      </div> */}
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
            {t("search")}
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


      {error && (
        <div className="container">
          <Alert
            className="custom-alert"
            severity="error"
            icon={<WarningAmberIcon />}
            // icon={<WarningIcon />}
            sx={{ width: '100%', mt: 2 }}
          >
            <Typography>
              {t("trackingNumberNotFound")}
              <br />
              {t("checkDetailsOrGoToTracking")}
              <Link href="https://israelpost.co.il/%D7%9E%D7%A2%D7%A7%D7%91-%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D/" target="_blank" rel="noopener" sx={{ ml: 1 }}>
                {t("goToTracking")}
              </Link>
            </Typography>
          </Alert>
        </div>
      )}



      {/* תצוגת קומפוננטת התוצאות עם גלילה אוטומטית */}
      {searchResult && (
        <div ref={resultRef} className="searchResultContainer">
          <packageInfo result={searchResult} />
        </div>
      )}
    </div>
  );
}
