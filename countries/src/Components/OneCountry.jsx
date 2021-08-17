import React from "react";
import { useParams } from "react-router";
import { Button } from "reactstrap";


const OneCountry = () => {

    const {countryName} = useParams(); // Here I'm taking the optional last part of the current URL for it to tell me the country that must be displayed. //
    console.log(countryName);

    return (
        <main>
            <Button className="btn-back">
                <i className="fas fa-arrow-left"></i>  
                Back
            </Button>
            <div>
                {countryName}
            </div>
        </main>
    );
};

export default OneCountry;