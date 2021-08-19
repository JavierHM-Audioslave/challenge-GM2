import { COUNTRY } from "../Constants/actions";

export const getOneCountry = country => {
    return {
        type: COUNTRY.GET_ONE_COUNTRY,
        country
    };
};