const controller = {};

const data = [];


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users', (err, users) => {           
            if(err) {
                res.json(error);                
            }            
            res.render('users', {
                data: users
            })
        });
    })
};


controller.save = (req, res) => {
    req.body.forEach((value,index)=> {
        req.getConnection((err, conn) => {              
            conn.query('INSERT INTO users set ?',[value], (err, user) =>{                
                console.log('user',user);
            })
        })
    });
    
};

module.exports = controller;
exports.data = data;