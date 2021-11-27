import React from 'react';
import {useQuery, gql} from "@apollo/client";
import "./CharactersList.css"

const GET_CHARACTERS = gql`
 query{
        allPeople(first: 5){
          people {
            id
            name
            gender  
          }
        }
    }
`

export default function CharactersList(){

    const {error, data, loading} = useQuery(GET_CHARACTERS);
    console.log({error, data, loading})

    if(loading) return <div id='carga'><div class="loadingio-spinner-spinner-85pfbjg48ls"><div class="ldio-5vs1ol7hre">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div></div>loading </div>
    
    if(error) return <div>something wen wrong</div>
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