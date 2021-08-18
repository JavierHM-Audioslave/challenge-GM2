import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "reactstrap";
import { getOneCountry } from "../Services/countryService";


const OneCountry = () => {

    const {countryName} = useParams(); // Here I'm taking the optional last part of the current URL for it to tell me the country that must be displayed. //
    console.log(countryName);
    const [countryInfo, setCountryInfo] = useState();

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
        <main>
            <Button className="btn-back">
                <div className="first-child"><i className="fas fa-arrow-left"></i></div>  
                <div className="second-child">Back</div>
            </Button>
            {console.log(countryInfo)}
            {countryInfo && 
                <div className="country-info-wrapper">
                    <div className="child-flag">
                        <img src={countryInfo.flag} alt={countryInfo.name} />
                        {/* Voy por acá... Tengo que continuar presentando bien la imágen de la bandera junto a la info del país */}
                    </div>
                </div>
            }
        </main>
    );
};

export default OneCountry;