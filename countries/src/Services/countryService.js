import axios from "axios";

export const getFlag = async url => {

    // let response;

    try {
        const response = await axios.get(url);
        console.log(response);
        if(response.status >= 500) throw new Error("El servicio no está disponible en este momento");
        if(response.status !== 200 && response.status !== 204) throw new Error("Hubo un error al consultar el servicio");

        return response.data;
    } catch(error) {
        console.log("En countryService");
        console.error(error);
    }
}

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