import React from 'react';
import {useQuery, gql} from "@apollo/client";
import "./CharactersList.css";
import spinner from './spinner.svg';

const GET_CHARACTERS = gql`
 query {
  allPeople (first: 5){
    totalCount
    people {
      name
      homeworld {
        name
      }
    }
  }
}
`

export default function CharactersList(){

    const {error, data, loading} = useQuery(GET_CHARACTERS);
    console.log({error, data, loading})

    if(loading) return <div className="load"><img src={spinner} alt="img" height="35px"/> loading</div>
    if(error) return <div id="error" className="load">Failed to Load Data</div>
    // obj.error;
    // obj.loading;
    // obj.data;
   
   
    return (
        <div className="CharactersList">
        {data.allPeople.people.map((people) =>{
            return (
              <a id="enlace" href="https:youtube.com">
            <div className="data">
                <p id="name">{people.name}</p>
                <p id="planet">from {people.homeworld.name}</p>
              </div>              
              </a> 
                         
            );            
        })
        }

        </div>)
    
}