

export const getElementsOfTopLevelDomain = tld => {    // Gets the elements of "topLevelDomain" variable and reduce them into one single variable. //
    const elements = [];
    for(let i=0; i<tld.length; i++) {
        elements.push(tld[i])
    };

    console.log(elements);

    const aux = elements.reduce((initialState, element) => {
        return `${initialState}, ${element}`;
    }, "");

    return aux.substring(2);
};

export const getNamesOfCurrencies = currencies => { // Gets the variable "name" from within the "currencies" or "languages" array. // 
    const elements = currencies.map( element => element.name );

    console.log(elements);

    const aux = elements.reduce((initialState, element) => {
        return `${initialState}, ${element}`;
    }, "");

    return aux.substring(2);
};