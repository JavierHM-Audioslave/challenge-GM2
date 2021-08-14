import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, Cardtitle, CardSubtitle, CardText } from "reactstrap";
import { getFlag } from "../Services/countryService";
import SVG from 'axios-react-inlinesvg';


const CountryCard = ({country}) => {

    const [svgFlag, setSvgFlag] = useState();

    useEffect(() => {

        const caller = async () => {
            try {
                const svgFlag = await getFlag(country.flag);
                console.log(svgFlag);
                setSvgFlag(svgFlag);
            } catch(error) {
                console.error(error);
            }
        };

        caller();
    }, []);
     
    return (
        <>
            {svgFlag && 
                <div className="country-card">
                    <SVG src={svgFlag} cacheRequests={true} />;
                </div>
            }
        </>
    );
};

export default CountryCard;