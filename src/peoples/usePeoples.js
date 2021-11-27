
import {useQuery, gql} from "@apollo/client";
const GET_PEOPLES = gql`
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
export const usePeoples = () =>{

    const {error, data, loading} = useQuery(GET_PEOPLES);
    return{
        error,
        data,
        loading

    }

}