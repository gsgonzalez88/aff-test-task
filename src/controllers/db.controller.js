const axios = require('axios');
const fetch = require('node-fetch');
const flatten = require('array-flatten');


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

    console.log(body)

    await axios.post('http://localhost:8080/api/users', body);
   }
   catch(error) {
       console.log(error)
   }
}

exports.saveUsers = saveUsers;