import React, { useState, useEffect } from "react";
import { 
    Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem 
} from "reactstrap";
import CountryCard from "./CountryCard";
import { getAllCountries, getFilteredCountries, getCountriesByRegion } from "../Services/countryService";


const Countries = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [listOfCountries, setListOfCountries] = useState(null);


    const toggle = () => setDropdownOpen( prevValue => !prevValue);


    const refreshCountries = async e => {   // Sets a state with all the countries whose name accomply to the pattern written by the user. //
        try {
            const filteredCountries = await getFilteredCountries(e);
            setListOfCountries(filteredCountries);
        } catch(error) {
            console.error(error);
        }
    };

    
    const getCountries = async e => {   // Sets a state with all the countries belonging to a certain region. //
        
        let region = e.target.textContent;
        if(region === "America") region = "Americas";   // This fix must be made in order to complete the path with the expected value for american continent. //
    
        try {
            const filteredCountriesByRegion = await getCountriesByRegion(region);
            setListOfCountries(filteredCountriesByRegion);
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
                                <DropdownItem className="dropdown-item" onClick={getCountries}>Africa</DropdownItem>
                                <DropdownItem className="dropdown-item" onClick={getCountries}>America</DropdownItem>
                                <DropdownItem className="dropdown-item" onClick={getCountries}>Asia</DropdownItem>
                                <DropdownItem className="dropdown-item" onClick={getCountries}>Europe</DropdownItem>
                                <DropdownItem className="dropdown-item" onClick={getCountries}>Oceania</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </main>
            <div id="cards-content">
                {listOfCountries && listOfCountries.map( country => (<CountryCard country={country} key={country.alpha3Code} />))}
            </div>
        </>
    );
};

export default Countries;