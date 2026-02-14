// hooks in most of the cases return js, so file name is useCurrencyInfo.js instead of useCurrencyInfo.jsx

// function hello() {
//     return [];
// }

import { useState, useEffect } from 'react';

// HOW TO DESIGN CUSTOM HOOKS?

function useCurrencyInfo(currency) {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    const [data, setData] = useState({});       // empty object in case of no fetch call

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((res) => {setData(res[currency])});
        }, [currency, url, data]);
        
    console.log(data);
    return data;
}

export default useCurrencyInfo;     

/* returned the whole method and we derive desired values in the component where we want to use this hook. We can also return only desired values from this hook as well. It depends on our use case. */