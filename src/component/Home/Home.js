import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {

    const [nation, setNation] =  useState([]);

    const history =useHistory();
    const applyClick = (lala) =>{
        const url = `/Details/${lala}`;
        history.push(url)
    }

    useEffect(()=> {
        const api = 'https://restcountries.eu/rest/v2/all';
        fetch(api)
        .then(response => response.json())
        .then(data=> setNation(data))
    },[])
    return (
        <div>
            <h2 style={{textAlign: 'center'}}><u> All Countries list is given here. </u></h2>           
            <h3>Total nations: {nation.length}</h3>
            { 
            nation.map(n=>
                <div  style={
                    {
                    height:'70px',
                    width:'200px', 
                    border: '1px solid black',
                    padding:'5px',
                    textAlign: 'center', 
                    margin:'5px',
                    float: 'left',
                    backgroundColor:'lightGreen'
                    }}>
                
                Name: {n.name}
            
                <br/>
                 <button onClick={()=>applyClick(n.alpha3Code)}>Details: {n.alpha3Code}</button>
                 </div>
                )
            }
            
        </div>
    );
};

export default Home;