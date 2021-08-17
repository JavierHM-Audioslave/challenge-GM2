import React from "react";
import { useParams } from "react-router";
import Header from "./Header";
import OneCountry from "./OneCountry";

const OneCountryDashboard = () => {
    
    return (
        <>
            <Header/>
            <OneCountry/>
        </>
    );  
};

export default OneCountryDashboard;