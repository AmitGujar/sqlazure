const {createPool} = require("mysql");

const pool = createPool ({
    server:"10.0.0.4",
    user:"amit",
    password:"1234",
    database:"appdb",
});

pool.query(`select * from Course`, (err, res) => {
    return console.log(res);
});

console.log("It is working")