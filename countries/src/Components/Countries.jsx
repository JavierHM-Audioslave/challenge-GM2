import React, { useState, useEffect } from "react";
import { 
    Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem 
} from "reactstrap";
import CountryCard from "./CountryCard";
import { getAllCountries, getFilteredCountries } from "../Services/countryService";


const Countries = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [listOfCountries, setListOfCountries] = useState(null);

    const toggle = () => setDropdownOpen( prevValue => !prevValue);


    const refreshCountries = async e => {
        try {
            const filteredCountries = await getFilteredCountries(e);
            setListOfCountries(filteredCountries);
        } catch(error) {
            console.error(error);
        }
    };


    useEffect(() => {
        const consumeCountries = async () => {
            try {
                const arrayOfCountries = await getAllCountries();

                setListOfCountries(arrayOfCountries);
            } catch(error) {
                console.log("En Countries");
                console.error(error);
            }
        };
        consumeCountries();
    }, []);


    return (
        <>
            <main>
                <div className="bar-options">
                    <div className="child1">
                        <div className="img-search"><i className="fa fa-info-circle" /></div>
                        <Input className="ipt-country" type="text" placeholder="Search for a country..." onInput={refreshCountries} />
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
            <div id="cards-content">
                {listOfCountries && listOfCountries.map( country => (<CountryCard country={country} key={country.alpha3Code} />))}
                {/* {listOfCountries && <CountryCard country={listOfCountries[0]} />}
                {listOfCountries && <CountryCard country={listOfCountries[1]} />}
                {listOfCountries && <CountryCard country={listOfCountries[2]} />}
                {listOfCountries && <CountryCard country={listOfCountries[3]} />} */}
            </div>
        </>
    );
};

export default Countries;