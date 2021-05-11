import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = () =>{

    const [allPokemon, setAllPokemon] = useState([]);

    //FETCH 
    // const getPokemon = (e)=>{
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
    //     .then(response=>{
    //         return response.json()
    //     })
    //     .then(response=>{
    //         console.log("********")
    //         console.log(response)
    //         setAllPokemon(response.results);
    //     })
    //     .catch(err=> console.log("ERROR", err))
    // }

    //AXIOS
    const getPokemon = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118")
        .then(response=>{
            console.log("******")
            console.log(response)
            setAllPokemon(response.data.results);
        })
        .catch(err=> console.log("ERROR", err));
    }

    return(
        <div>
            <button onClick={getPokemon}>Click here to get all the articles</button>
            <h1>List of Pokemon</h1>
            {
                allPokemon.map((pokemon, idx)=>{
                    return <div key = {idx} class="">
                        <ul>
                            <li>{pokemon.name}</li>
                        </ul>
                    </div>
                })
            }
        </div>
    );
};
export default Pokemon;