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

  const handleKeyPress = (event) => {
    setPackageNumber(event.target.value);
    if (event.key === "Enter") {
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
  }, [searchInitiated]); // Adjust dependencies to avoid loops

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
                  placeholder={t("HereYouWriteTrackingTax")}
                  onKeyDown={handleKeyPress}
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
      ) : (
        error && (
          <div className="errorContainer">
            <Alert severity="error">
              <Typography>
                {error}
                <br />
                {t("checkDetailsOrGoToTracking")}
                <Link
                  href="https://israelpost.co.il/%D7%9E%D7%A2%D7%A7%D7%91-%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D/"
                  target="_blank"
                  rel="noopener"
                >
                  {t("goToTracking")}
                </Link>
              </Typography>
            </Alert>
          </div>
        )
      )}
    </div>
  );
}
