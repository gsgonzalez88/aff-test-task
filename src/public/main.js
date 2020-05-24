document.getElementById('btn_userdb').addEventListener('click', function makeGetRequest() { 
    console.log('populate buttonpressed')
    axios.post('http://localhost:8080/api/users/save').then( 
        (response) => { 

            var result = response.data; 
            console.log(result); 
        }, 
        (error) => { 
            console.log(error); 
        } 
    );
    location.replace("http://localhost:8080/api/users/")   
})

document.getElementById('btn_fill_users').addEventListener('click', function makeGetRequest() { 
    console.log('users buttonpressed')
    /* axios.get('http://localhost:8080/api/users/').then( 
        (response) => { 

            var result = response.data; 
            console.log(result); 
        }, 
        (error) => { 
            console.log(error); 
        } 
    );  */
    location.replace("http://localhost:8080/api/users/")  
})

/* 
document.getElementById('btn_fill_users').addEventListener('click',  );
document.getElementById('btn_fill_dates').addEventListener('click', function makeGetRequest() { 
    console.log('dates buttonpressed')
    axios.get('http://localhost:8080/api/dates').then( 
        (response) => { 

            var result = response.data; 
            console.log(result); 
        }, 
        (error) => { 
            console.log(error); 
        } 
    ); 
    //logic to disable button after table its filled
} ); */