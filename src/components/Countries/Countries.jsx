import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({name}) => {
    // besh kichu  information  chai  tai array ,  ar  array er  khetre  shurur  man  hobe   empty array  tai  useState  er  initial value [], 
    // jemon jekono gononar  khetre  0 ,  jekono  obosthar  khetre true hobar purbe  false 
    // ar  niche  shudhu  country  na  visited  country  rakhtesi ,
    const[visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    // state  jekhane   set  korbo  event  handler  okhanei  set  korte  hobe 
    // // kon country te click kora holo eta  dekhar jonno country parameter
    const handleVisitedCountries = (country)=>{
        // ekhon  button kothay? button ache country.jsx er  moddhe  jeta holo
        // vinno  arekta  file ,  ekhon  oi page  e  ekta arrow  function  er  moddhe ache button  ,
        // sekhane  handler  ke  patha te hole  parameter  akare  pathate  hobe
        console.log('handleVisitedCountries clicked', country);
        // ekhane array push  hocchena check  kore  dekhlam, karon eta  same  reference  er  array chilo , tai  change  holeo multao change 
        // hoye  jay  tai kono  change  stay  kore na  ba  alada  kore  dhora  porena
        
        // visitedCountries.push(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlag = (flag)=>{
    console.log('flag need to be added' ,flag)
    const newVisitedFlags = [...visitedFlags,flag];
    setVisitedFlags(newVisitedFlags)

    }
    




    const countriesData = use(name);
    const countries = countriesData.countries ;
    // console.log(countries)
    return (
        
            <div>
                <h1>in the countries: {countries.length}</h1>
                <h3>total visited countries: {visitedCountries.length}</h3>
                <h3>total flags visited: {visitedFlags.length}</h3>
                <ol>
                    {
                        visitedCountries.map(country=> <li>{country.name.common}</li>)              
                    }
                </ol>
                <div className='visited-flags-container'>
                    {
                        visitedFlags.map((flag,index) =><img src={flag}></img>)
                    }
                </div>
                <div className='countries'>
                    {
                    countries.map(country => <Country 
                        key = {country.cca3.cca3}
                        // event handler  ke  parameter  hishebe  pathacchi

                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                        country={country} ></Country>)
                }
                </div>
            </div>
            
        
    );
};

export default Countries;


/* ekhon  amader  somossa  hocche, total visited countries: {visitedCountries.length}, button e  click 
korle  visited  lekha  console  e ashleo  ekhane  count hocchena , karon hocche amra 
const[visitedCountries, setVisitedCountries] = useState([]); ekhane  ekta  faka  array  rekhechi  , kintu array o object reference 
rakhe jehetu eta non primitive data, tai ekhane  kono  change  hole  o bujhena ,push korle update hoyna.  tokhon spread operator  use  korte  hoy , tokhon push korle 
update hobe




*

*
*

*/ 


// import React, { use, useState } from 'react';
// import Country from '../Country/Country';
// import './Countries.css'

// const Countries = ({countriesPromise}) => {
//     const[visitedCountries, setVisitedCountries] = useState([]);
//     const [visitedFlags, setVisitedFlags] = useState([]);

//     const handleVisitedCountries = (country)=>{
//         const newVisitedCountries = [...visitedCountries, country]
//         setVisitedCountries(newVisitedCountries)
//     }

//     const handleVisitedFlag = (flag)=>{
//         const newVisitedFlags = [...visitedFlags, flag];
//         setVisitedFlags(newVisitedFlags)
//     }

//     // ❌ return ta function er baire chole jachilo
//     // ✅ ekhane function er vitorei return koro
//     const countriesData = use(countriesPromise);
//     const countries = countriesData.countries ;

//     return (
//         <div>
//             <h1>in the countries: {countries.length}</h1>
//             <h3>total visited countries: {visitedCountries.length}</h3>
//             <h3>total flags visited: {visitedFlags.length}</h3>
//             <ol>
//                 {visitedCountries.map(country => 
//                     <li key={country.cca3}>{country.name.common}</li>
//                 )}              
//             </ol>
//             <div className='countries'>
//                 {countries.map(country => 
//                     <Country 
//                         key={country.cca3}  // এখানে আগেরটা ভুল ছিল (country.cca3.cca3)
//                         handleVisitedCountries={handleVisitedCountries}
//                         handleVisitedFlag={handleVisitedFlag}
//                         country={country} 
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Countries;
