import React, { useState, useEffect } from "react";
import { 
    Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem 
} from "reactstrap";
import CountryCard from "./CountryCard";
import { getAllCountries, getFilteredCountries, getCountriesByRegion } from "../Services/countryService";
// import { getCountries } from "../Helpers/listCountriesByRegionHelper";
import { useHistory } from "react-router-dom";


const Countries = ({countries = null}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [listOfCountries, setListOfCountries] = useState(null);
    const history = useHistory();

    console.log(countries);

    const toggle = () => setDropdownOpen( prevValue => !prevValue);


    const refreshCountries = async e => {
        try {
            const filteredCountries = await getFilteredCountries(e);
            setListOfCountries(filteredCountries);
        } catch(error) {
            console.error(error);
        }
    };

    
    const getCountries = async e => {
        
        const region = e.target.textContent;
    
        try {
            const filteredCountriesByRegion = await getCountriesByRegion(region);
            console.log(filteredCountriesByRegion);
            setListOfCountries(filteredCountriesByRegion);
        } catch(error) {
            console.log(error);
            console.error(error);
        }
    
    };


    useEffect(() => {
        const consumeCountries = async () => {
            try {
                let arrayOfCountries;
                // const arrayOfCountries = await getAllCountries();
                !countries ? arrayOfCountries=await getAllCountries() : arrayOfCountries=await getCountries(countries);

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