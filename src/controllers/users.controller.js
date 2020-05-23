const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users', (err, users) => {
            if(err) {
                res.json(error);                
            }
            res.send(users);
        });
    })
};


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO users set ?',[data], (err, user) =>{
            console.log(user);
            res.send('works!');
        })
    })
};

module.exports = controller;