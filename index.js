const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const net = require('net');

app.use(bodyParser.json({limit: '300mb'}));


app.get('/api', function(req, res) {
    console.log(res)
})


let lpr1pp = ""
let lpr1np = ""

let lpr2pp = ""
let lpr2np = ""

let lpr3pp = ""
let lpr3np = ""

let lpr4pp = ""
let lpr4np = ""


//Residents
app.post('/lpr1', (req, res) => {
    var lpr1 = new net.Socket();
    lpr1.connect(1001, '127.0.0.1',() => {
        lpr1np = req.body.plate
        if(lpr1np != lpr1pp){
            //console.log("Residents LPR Connected")
            //lpr1.setMaxListeners(1)
            lpr1.write("Plate: " + req.body.plate + "\n" + "-----------------------" + "\n")
            lpr1.on('data', (data) => {console.log(data.toString())})
            //console.log(`LPR 1:  ${req.body.plate}`)
            lpr1.destroy();
            res.send(`LPR 1:  ${req.body.plate}`)
            lpr1pp = lpr1np
        }
        else{
            res.send("Dupe Plate")
        }
    });
})


//Visitors
app.post('/lpr2', (req, res) => {
    var lpr2 = new net.Socket();
    lpr2.connect(1002, '127.0.0.1',() => {
        lpr2np = req.body.plate
        if(lpr2np != lpr2pp){
            //console.log("Residents LPR Connected")
            //lpr2.setMaxListeners(1)
            lpr2.write("Plate: " + req.body.plate + "\n" + "-----------------------" + "\n")
            lpr2.on('data', (data) => {console.log(data.toString())})
            //console.log(`LPR 2:  ${req.body.plate}`)
            lpr2.destroy();
            res.send(`LPR 2:  ${req.body.plate}`)
            lpr2pp = lpr2np
        }
        else{
            res.send("Dupe Plate")
        }
    });
})


//Exit
app.post('/lpr3', (req, res) => {
    var lpr3 = new net.Socket();
    lpr3.connect(1003, '127.0.0.1',() => {
        lpr3np = req.body.plate
        if(lpr3np != lpr3pp){
            //console.log("Residents LPR Connected")
            //lpr3.setMaxListeners(1)
            lpr3.write("Plate: " + req.body.plate + "\n" + "-----------------------" + "\n")
            lpr3.on('data', (data) => {console.log(data.toString())})
            //console.log(`LPR 3:  ${req.body.plate}`)
            lpr3.destroy();
            res.send(`LPR 3:  ${req.body.plate}`)
            lpr3pp = lpr3np
        }
        else{
            res.send("Dupe Plate")
        }
    });
})

//Exit
app.post('/lpr4', (req, res) => {
    var lpr4 = new net.Socket();
    lpr4.connect(1005, '127.0.0.1',() => {
        lpr4np = req.body.plate
        if(lpr4np != lpr4pp){
            //console.log("Residents LPR Connected")
            //lpr4.setMaxListeners(1)
            lpr4.write("Plate: " + req.body.plate + "\n" + "-----------------------" + "\n")
            lpr4.on('data', (data) => {console.log(data.toString())})
            //console.log(`LPR 4:  ${req.body}`)
            lpr4.destroy();
            res.send(`LPR 4:  ${req.body.plate}`)
            lpr4pp = lpr4np
        }
        else{
            res.send("Dupe Plate")
        }
    });
})



const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log("DO NOT CLOSE THIS WINDOW")
})



/*
var lpr1 = new net.Socket();
lpr1.connect(1337, '127.0.0.1', function() {
	console.log('LPR 1 Connected');
    lpr1.write("LPR 1 Connected")
});
*/