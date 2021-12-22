import axios from 'axios';

export function getStrapi (path=""){
    return (`${"http://localhosthttps://qimmunityback.herokuapp.com"}${path}`)
}

export async function fetchStrapi (path){
    const petitionURL = getStrapi(path);
    const authPetitionURL =  getStrapi("/auth/local")   
       
    const response = await fetch(petitionURL);
    const data = await response.json();
    return data
}

