import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import history from "../Helpers/history";
import { useHistory } from "react-router-dom";


const CountryCard = ({country}) => {

    const history = useHistory();

    const displayCountry = async () => {
        history.push(`/country/${country.name}`);
    };

     
    return (
        <>
            {country && 
                <div className="card-wrapper" onClick={ displayCountry } >
                    <Card className="card">
                        <CardImg top width="100%" src={country.flag} alt={country.name} />
                        <CardBody>
                            <CardTitle tag="h6" className="mb-4">{country.name}</CardTitle>
                            <CardText>
                                <span className="card-description">Population:</span> {country.population}
                            </CardText>
                            <CardText>
                                <span className="card-description">Region:</span> {country.region}
                            </CardText>
                            <CardText>
                                <span className="card-description">Capital:</span> {country.capital}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            }
        </>
    );
};

export default CountryCard;