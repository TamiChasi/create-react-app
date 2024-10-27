import { useCallback, useEffect, useState } from "react"
import axios from "axios"


const useGet = (url, { token, params = {}, headers = {} } = {}) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = useCallback(async () => {
        try {
                setLoading(true)
                let response = null;
                if (params && params.CargoSearchKey)
                    // const response = await axios.get(url, {
                    //     params: {
                    //         ...params,
                    //     },
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //         ...headers,
                    //     },
                    //     ...(token && { headers: { ...headers, Authorization: `Bearer ${token}` } }),
                    // });
                    response = {
                        "CargoRequest": {
                            "CargoSearchKey": "ECSL0245160",
                            "CargoQuestions": null,
                            "IsTooMuchData": false
                        },
                        "CargoResult": [
                            {
                                "ComputedCargoIdentifierKey": "17|ECSL0245160|515761237|030924",
                                "CargoIdentifierKey1": "ECSL0245160",
                                "CargoIdentifierKey2": "אי-קרגו לוגיסטיקה בע\"מ",
                                "CargoIdentifierKey3": "030924",
                                "CargoIdentifierTypeID": 17,
                                "CargoIdentifierTypeName": "שטר מטען בלדר יבוא",
                                "UserFriendlyComputedCargoIdentifier": "חבילה: ECSL0245160",
                                "LeadDocumentNumber": "24043500807007",
                                "OrganizationUnitName": "נתב\"ג",
                                "ArrivalDate": "2024-09-08 13:53:20",
                                "ContactDetails": "אי-קרגו לוגיסטיקה בע\"מ",
                                "ContactSite": "",
                                "ContactPhoneNumber": "",
                                "CargoSearchStatus": 4,
                                "CargoDescription": null,
                                "RecipientName": null,
                                "RecipientAddress": null,
                                "RequiredLicenseForCargo": [],
                                "UserFriendlyCargoStatus": "ההצהרה הותרה בתאריך 10/09/2024 המשמעות היא שמתאריך זה אין עיכובים של המכס על המטען ואי-קרגו לוגיסטיקה בע\"מ רשאית להעביר את המטען ליעד הסופי שלו ,<br>לברור לגבי צפי הגעת המטען ליעד הסופי ניתן לפנות ל אי-קרגו לוגיסטיקה בע\"מ. ",
                                "IsAllowedToSubmit": false
                            }
                        ],
                        "ErrorText": null,
                        "ErrorLevel": 3
                    };
                    if (response) {
                    setData(response)
                }
                console.log(data)
            } catch (err) {
                setError(err)
                if (err.response) {
                    console.log(`API error: ${err.response.status} - ${err.response.statusText}`)
                    throw new Error(`API error: ${err.response.status} - ${err.response.statusText}`);
                } else if (err.request) {
                    throw new Error('No response received from the server');
                } else {
                    throw new Error('Failed to fetch data');
                }
            } finally {
                setLoading(false)
            }
        });
        
    useEffect(() => {
        fetchData();
      }, [fetchData]);
      return { data, error, loading, refetch: fetchData };
};

export default useGet;