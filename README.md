## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Iniciamos la creación un proyecto react en este caso react-reto 

npx create-react-app- react-reto

## Configuración de Apollo
## Primero ingresamos a su pagina oficial:
https://www.apollographql.com/
## Iniciamos sesión caso contrario se debe crear una cuenta
## Luego hay un sección de New Granphql
## colocamos un titulo elegimos development y en Endpoint colocamos la uri para obtener los datos de star war
https://swapi-graphql.netlify.app/.netlify/functions/index
## Finalmente create Graphql

## Para poder trabajar con la consulta de estar war se intala del cliente apollo:

npm install @apollo/client graphql

## se definio la uri que permitira la conexión con apollo client 

https://swapi-graphql.netlify.app/.netlify/functions/index

## realizamos la query para la obtencion de los datos

gql`query {allPeople (first: 5){totalCount people { name homeworld { name }  }  } } `

##Descripcioón del Proyecto

## Este proyecto sonsitio en la obteción de datos por medio de graphql trabajando con Apollo cliente 
## solo se llegó a realizar la carga de los 5 primeros datos de allPeople los datos on el nombre y el mundo natal de people
## además se logró que app sea responsive y que mostrara la carga, el error y los datos de acuerdo a la situación que se presente. 
## el diseño se baso en la estructura de figma junto con los codigos de colores presentados ahí
## en la carpeta evidencia se adjuntan las capturas de pantallas.


 

##
