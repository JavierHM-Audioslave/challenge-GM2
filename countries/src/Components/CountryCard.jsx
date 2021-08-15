import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";


const CountryCard = ({country}) => {
     
    return (
        <>
            {country && 
                <div className="card-wrapper">
                    <Card className="card">
                        <CardImg top width="100%" src={country.flag} alt={country.name} />
                        <CardBody>
                            <CardTitle tag="h6">{country.name}</CardTitle>
                            <CardText>
                                <div><span className="card-description">Population:</span> {country.population}</div>
                                <div><span className="card-description">Region:</span> {country.region}</div>
                                <div><span className="card-description">Capital:</span> {country.capital}</div>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            }
        </>
    );
};

export default CountryCard;