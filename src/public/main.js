//users logic

if(document.getElementById('btn_userdb')){

    document.getElementById('btn_userdb').addEventListener('click', function populateUsers() { 
        console.log('populate users buttonpressed')
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
    
    document.getElementById('btn_fill_users').addEventListener('click', function fillUsers() { 
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
        location.replace("http://localhost:8080/api/users/")  
    })

}


if(document.getElementById('btn_fill_dates')) {
    //dates logic
document.getElementById('btn_fill_dates').addEventListener('click', function fillDates() { 
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
    location.replace("http://localhost:8080/api/dates/") 
    //logic to disable button after table its filled
} );

document.getElementById('btn_datesdb').addEventListener('click', function populateDates() { 
    console.log('dates db buttonpressed')
    axios.post('http://localhost:8080/api/dates/save').then( 
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
}

