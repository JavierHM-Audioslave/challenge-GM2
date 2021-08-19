import axios from "axios";



export const getAllCountries = async () => {
    try {
        const response = await axios.get("https://restcountries.eu/rest/v2/all");

        return response.data;
    }catch(error) {
        console.error(error);
        throw new Error(error);
    }
};


export const getFilteredCountries = async (e) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${e.target.value}`);

        return(response.data);
    } catch(error) {
        console.error(error);
        throw new Error(error);
    }
};

export const getOneCountry = async countryName => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`);

        return response.data;
    } catch(error) {
        console.error(error);
        throw new Error(error);
    }
};

export const getCountriesByRegion = async region => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);

        return response.data;
    } catch(error) {
        console.error(error);
        throw new Error(error);
    }
};