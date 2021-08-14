import React, { useState, useEffect } from "react";
import { 
    Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, 
    Card, CardImg, CardBody, Cardtitle, CardSubtitle, CardText, Button 
} from "reactstrap";
import axios from "axios";
import CountryCard from "./CountryCard";


const Countries = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [listOfCountries, setListOfCountries] = useState();

    const toggle = () => setDropdownOpen( prevValue => !prevValue);

    useEffect(() => {
        const consumeCountries = async () => {
            try {
                const response = await axios.get("https://restcountries.eu/rest/v2/all");
                console.log(response);

                if(response.status >= 500) throw new Error("No se pueden obtener los países en este momento");
                if(response.status !== 200 && response.status !== 204) throw new Error("Se produjo un error al intentar obtener todos los países desde la URL https://restcountries.eu/rest/v2/all");

                setListOfCountries(response.data);
            } catch(error) {
                console.error(error);
            }
        };
        consumeCountries();
    }, []);

    console.log(listOfCountries);

    return (
        <>
            <main>
                <div className="bar-options">
                    <div className="child1">
                        <div className="img-search"><i className="fa fa-info-circle" /></div>
                        <Input className="ipt-country" type="text" placeholder="Search for a country..."/>
                    </div>
                    <div className="child2">
                        <Dropdown className="dropdown" isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle className="dropdown-toggle" color="inherit">
                                Filter by Region
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu">
                                <DropdownItem className="dropdown-item">Africa</DropdownItem>
                                <DropdownItem className="dropdown-item">America</DropdownItem>
                                <DropdownItem className="dropdown-item">Asia</DropdownItem>
                                <DropdownItem className="dropdown-item">Europe</DropdownItem>
                                <DropdownItem className="dropdown-item">Oceania</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </main>
            {listOfCountries && <CountryCard listOfCountries={listOfCountries}/>}
        </>
    );
};

export default Countries;