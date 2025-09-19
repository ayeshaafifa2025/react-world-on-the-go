import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
    // false  because   initial  value  always 0  or  false , because  everything  is  unvisited always  till it is  visited later
    const [visited , setVisited]= useState(false);
    // this  is  nested  object  system
    // console.log(country.name.common);
    // console.log(country.flags.flags.png);
    // console.log(country.population);

    // console.log(handleVisitedCountries);
    // console.log(country.area.area);

    const handleVisited= ()=>{
        // console.log('button clicked')
        // if i want after  a click it show  visited  but  never  can be  changed
        // setVisited(true)

        // but  it is  toggling
        // if (visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // another system
        // setVisited(visited? false: true);

        // more system
        setVisited(!visited)

        // one system to call handleVisitedCountries  from  here ,
        // jodio ekhane  kono  button  nei  tao button e click korle , countries.jsx er  15  number
        // line  theke  console  hocche , karon  ei je  ekta arrow  function handleVisited , er  vitor 
        // theke arekta  arrow  function ke  obossoi  call kora jay , tai oi function er  moddhe 
        // jehetu  ei  function lekha  hoise  , ar  oi  function button click connected
        // tai  eta  o  call hoye jay
        // kon country te click kora holo eta  dekhar jonno country parameter
        handleVisitedCountries(country); 
    
    }
    return (
        // conditional css rules below
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>name : {country.name.common}</h3>
            {/* <h3>name : {country.name?.common}</h3>  we can use optonal chain , if missing no problem to others */}
            <p>population: {country.population.population}</p>
            {/* now  we  want  to  conditional  rendering to see the  area  */}
            <p>area: {country.area.area}{country.area.area > 300000 ? "big" : "small"}</p>  
                      {/* ei hocche  arekta  upay  handleVisitedCountries function call korar , eta o prothom tar  shathe  add holo ,
                      */}
            {/* <button onClick={handleVisited ,handleVisitedCountries }> */}
            <button onClick={handleVisited}>
                {visited ? 'visited': 'not visited'}</button>
                <button onClick={()=>handleVisitedFlag(country.flags.flags.png)}>add visited flag</button>
                
        </div>
    );
};

export default Country;

/*1.inline css

*
*/ 
