//using the express library to create a web server
//have to use route handlers

const express = require('express');
const app = express();

//route handler where if a request is made to the root directory then response sent back is Hi, second argument is a callback function
app.get('/',(req,res)=>{
	res.send("HI");
});

//web server listen on port 3000
app.listen(3000,() => {
	console.log('Listening');
});


