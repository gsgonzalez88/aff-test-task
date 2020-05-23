
document.getElementById('btn_fill').addEventListener('click', function makeGetRequest() { 
    console.log('buttonpressed')
    axios.post('http://localhost:8080/api/users/save').then( 
        (response) => { 

            var result = response.data; 
            console.log(result); 
        }, 
        (error) => { 
            console.log(error); 
        } 
    ); 
} );