import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { getOneCountry } from "../Services/countryService";
import { getElementsOfTopLevelDomain, getNamesOfCurrencies } from "../Helpers/oneCountryHelper";


const OneCountry = () => {

    const {countryName} = useParams(); // Here I'm taking the optional last part of the current URL for it to tell me the country that must be displayed. //
    console.log(countryName);
    const [countryInfo, setCountryInfo] = useState();
    const history = useHistory();


    useEffect(() => {
        const getCountryInfo = async () => {
            try {
                const response = await getOneCountry(countryName);
                console.log(response);
                setCountryInfo(response[0]);
            } catch(error) {
                console.log(error);
                console.error(error);
            }
        };
        getCountryInfo();
    }, []);

    console.log(countryInfo);



    return (
        <main id="main-one-country">
            <Button className="btn-back" onClick={() => history.goBack()}>
                <div className="first-child"><i className="fas fa-arrow-left"></i></div>  
                <div className="second-child">Back</div>
            </Button>
            {countryInfo && 
                <div className="country-info-wrapper">
                    <div className="child-flag">
                        <img src={countryInfo.flag} alt={countryInfo.name} />
                    </div>
                    <div className="child-info">
                        <div className="vertical-wrapper">
                            <div className="left-column">
                                <div className="info"><h2>{countryInfo.name}</h2></div>
                                <div className="info"><span>Native name: </span>{countryInfo.nativeName}</div>
                                <div className="info"><span>Population: </span>{countryInfo.population}</div>
                                <div className="info"><span>Region: </span>{countryInfo.region}</div>
                                <div className="info"><span>Sub Region: </span>{countryInfo.subregion}</div>
                                <div className="info"><span>Capital: </span>{countryInfo.capital}</div>
                            </div>
                            <div className="right-column">
                                <div className="info"><span>Top Level Domain: </span>{getElementsOfTopLevelDomain(countryInfo.topLevelDomain)}</div>
                                <div className="info"><span>Currencies: </span>{getNamesOfCurrencies(countryInfo.currencies)}</div>
                                <div className="info"><span>Languages: </span>{getNamesOfCurrencies(countryInfo.languages)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </main>
    );
};

export default OneCountry;