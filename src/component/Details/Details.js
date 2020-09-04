import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Details = () => {

    const{lala}  =useParams();
    const[here, setHere] = useState({});
    const {area, name, currencies[0]:{code}} = here;
    console.log(here);

    useEffect(()=> {
        const url = `https://restcountries.eu/rest/v2/alpha/${lala}`;
        fetch(url)
        .then(response=>response.json())
        .then(info=>setHere(info))
    },[])

    return (
        <div>
            <h2>Details here.</h2>
            <h4>Capital: {here.capital}</h4>
            <h4>Name: {name}</h4>
            <h4>Name: {area}</h4>
            <h3>lala : {code}</h3>
        </div>
    );
};

export default Details;