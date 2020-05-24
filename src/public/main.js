
document.getElementById('btn_fill_users').addEventListener('click', function makeGetRequest() { 
    console.log('users buttonpressed')
    axios.get('http://localhost:8080/api/users/').then( 
        (response) => { 

            var result = response.data; 
            console.log(result); 
        }, 
        (error) => { 
            console.log(error); 
        } 
    );
    //logic to disable button after table its filled    
} );

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
} );