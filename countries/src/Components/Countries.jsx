import React, { useState, useEffect } from "react";
import { 
    Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem 
} from "reactstrap";
import axios from "axios";
import CountryCard from "./CountryCard";


const Countries = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [listOfCountries, setListOfCountries] = useState(null);

    const toggle = () => setDropdownOpen( prevValue => !prevValue);

    useEffect(() => {
        const consumeCountries = async () => {
            try {
                const response = await axios.get("https://restcountries.eu/rest/v2/all");
                console.log(response);

                setListOfCountries(response.data);
            } catch(error) {
                console.log("En Countries");
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
            <div id="card-wrapper">
                {listOfCountries && listOfCountries.map( country => (<CountryCard country={country}/>))}
                {/* {listOfCountries && <CountryCard country={listOfCountries[0]} />} */}
            </div>
        </>
    );
};

export default Countries;