import React from 'react';
import {useQuery, gql} from "@apollo/client";
import "./CharactersList.css";
import spinner from './spinner.svg';

const GET_CHARACTERS = gql`
 query{
        allPeople(first: 5){
          people {
            id
            nam
            gender  
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
            <div>
                <h2>{people.name}</h2>
                <h2>{people.gender}</h2>
            </div>
            );
        })}

        </div>)
    
}