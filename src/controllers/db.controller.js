const axios = require('axios');
const fetch = require('node-fetch');
const flatten = require('array-flatten');
const webscrapp = require('./webscrapper.controller');


function getUsersListMultiplePages(url,pages){
    let promisesArray = [];        
    for(let i=1; i < (pages+1); i++){
        promisesArray.push(getUsersList(url,i))
    }
    return Promise.all(promisesArray);
}


function getUsersList(url, page){         
        return fetch(`${url}?page=${page}`)
                .then(res => res.json())
                .then(json => json.data)                
}

async function saveUsers(){
   try {
    const users = await getUsersListMultiplePages('https://reqres.in/api/users',2);
    const body = flatten.flatten(users);
    await axios.post('http://localhost:8080/api/users', body);
   }
   catch(error) {
       console.log(error)
   }
}

async function saveData(){
    const data = await webscrapp.main();
    console.log(data);
    /* await axios.post('http://localhost:8080/api/data/save', data); */
}

exports.saveUsers = saveUsers;
exports.saveData = saveData;