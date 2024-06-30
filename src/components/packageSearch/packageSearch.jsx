import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './packageSearch.css';
import mockData from '../../data/mockData.json'; // ודא שהנתיב נכון

export default function PackageSearch() {
  const { t } = useTranslation();
  const [packageNumber, setPackageNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);


  const search = () => {



    
  }

  const handleInputChange = (e) => {
    setPackageNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('חיפוש');

    try {
      const result = mockData.find(item => item.packageNumber === packageNumber);

      if (result) {
        setSearchResult(result);
        console.log(result);
        setError(null);
      } else {
        setSearchResult(null);
        setError('מספר מעקב לא נמצא');
      }
    } catch (error) {
      console.error('שגיאה בחיפוש:', error);
      setSearchResult(null);
      setError('שגיאה בחיפוש');
    }
  };

  return (
    <>
      <div id="deliveryTrackingHeader">
        {t("shippingTrackingTitle")}
      </div>

      <div id="SubheadingShipmentTracking">
        {t("SubheadingShipmentTracking")}
      </div>

      <div id="SubheadingShipmentTracking">
        {t("highlightedSubheadingShipmentTracking")}
      </div>


      

      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <input
            type="text"
            value={packageNumber}
            onChange={handleInputChange}
            placeholder="כאן כותבים מס מעקב"
            className={`input-field ${packageNumber ? 'not-empty' : ''}`}
          />
          <label className={`label ${packageNumber ? 'not-empty' : ''}`}>מספר מעקב</label>
        </div>
        
      </form>
      <button type="submit">חיפוש</button>

      <button onClick= {search}>טסט</button>

      {searchResult && (
        <div className="search-result">
          <h3>תוצאת החיפוש:</h3>
          <p>{searchResult.packageNumber}</p>
          <p>{searchResult.status}</p>
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </>
  );
}
