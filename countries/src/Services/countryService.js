import axios from "axios";



export const getAllCountries = async () => {
    try {
        const response = await axios.get("https://restcountries.eu/rest/v2/all");
        console.log(response);

        return response.data;
    }catch(error) {
        console.error(error);
        throw new Error(error);
    }
};


export const getFilteredCountries = async (e) => {
    try {
        console.log(e);
        console.log(e.target.value);
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${e.target.value}`);
        // const response = await axios.get(`https://restcountries.eu/rest/v2/name/${e.target.value}?fullText=true`);

        console.log(response);
        return(response.data);
    } catch(error) {
        console.error(error);
        throw new Error(error);
    }
};

export const getOneCountry = async countryName => {
    try {
        console.log(countryName);
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`);

        console.log(response);
        return response.data;
    } catch(error) {
        console.error(error);
        console.log(error);
    }
};