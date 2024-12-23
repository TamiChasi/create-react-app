import React, { useState, useRef, useEffect, useMemo } from "react";
import "../../assets/styles.css";
import { useTranslation } from "react-i18next";
import { Stack, TextField, Button, Box, Link, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";

import InputAdornment from "@mui/material/InputAdornment";
import "./packageSearch.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PackageDetails from "../packageDetails/packageDetails";
import Loading from "../loading/loading";
import "../../assets/styles.css";
import useGet from "../../store/useGet";

import WarningSign from '../../icons/warningSign';
import { getPackageStatus } from '../../api/dataService';
import ArrowIcon from '../../icons/arrowIcon';

export default function PackageSearch({ setContext }) {
  const { t } = useTranslation();
  const [packageNumber, setPackageNumber] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);
  const resultRef = useRef(null);
  const [searchInitiated, setSearchInitiated] = useState(false);

  const url = "/CustomspilotWeb/he/CargoSearch/api/get";
  const token = process.env.REACT_APP_PACKAGE_STATUS_API_TOKEN;

  const params = useMemo(() => {
    return packageNumber ? { CargoSearchKey: packageNumber } : null;
  }, [packageNumber]);

  const { data, loading, refetch } = useGet(url, {
    token,
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const handleInputChange = (event) => {
    setPackageNumber(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (packageNumber.trim()) {
      setSearchInitiated(true);
      setError(null);
    }
  };

  useEffect(() => {
    if (searchInitiated)
      refetch(url, {
        token,
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (searchInitiated && data) {
      if (data.CargoResult) {
        setSearchResult(data);
        setContext(data);
        setError(null);
      } else {
        setSearchResult(null);
        setContext(null);
        setError(t("trackingNumberNotFound"));
      }
    }
    if (searchResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchInitiated]);


  useEffect(() => {
    // גלול לקומפוננטת התוצאות כאשר searchResult מתעדכן
    if (searchResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchInitiated]);

  return (
    <div className="packageSearchContainer">
      {!searchResult && (
        <>
          <div id="deliveryTrackingHeader">{t("shippingTrackingTitle")}</div>
          <div id="subheadingShipmentTracking">
            {t("subheadingShipmentTracking")}
          </div>

          <div id="subheadingShipmentTrackingB">
            {t("highlightedSubheadingShipmentTracking")}
          </div>

          {!loading && (
            <Box id="boxContainer" display="flex" justifyContent="center">
              <Stack
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
                width="100% !important"
              >
                <Button
                  id="onclickSearch"
                  variant="contained"
                  onClick={handleSearch}
                >
                  {t("search")}
                </Button>

                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={packageNumber}
                  placeholder={t("HereYouWriteTrackingTax")}
                  onKeyDown={handleKeyDown}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlinedIcon />
                      </InputAdornment>
                    ),
                    style: { textAlign: "right", backgroundColor: "white" },
                  }}
                  sx={{ direction: "rtl" }}
                />
              </Stack>
            </Box>
          )}
        </>
      )}
      {searchResult && <PackageDetails ref={resultRef} />}
      {loading ? (
        <Loading />
      ) : (error && (
        <div className="container">
          <Alert
            className="custom-alert"
            severity="error"
            icon={<WarningSign className='iconSpacing' />}
            sx={{ width: '100%', mt: 2 }}
          >
            <Typography>
              {error}&#160;
              
              <Link href="https://israelpost.co.il/%D7%9E%D7%A2%D7%A7%D7%91-%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D/"  target="_blank" rel="noopener" sx={{  display: 'inline-flex', alignItems: 'center', ml: 1 }}>
                {t("goToTracking")}
                <ArrowIcon sx={{ mr: 0.5 }} /> 
              </Link>
             
            </Typography>
          </Alert>
          </div>
        
      ))}
    </div>
  );
}
