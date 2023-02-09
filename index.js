const http = require('http')
const moment = require('moment/moment')
const data = require('./member')
const user = require('./user')

const server = http.createServer( (req, res) => {
    res.statusCode = 200
    
    const url = req.url
    if(url === "/") {
        res.setHeader('Content-Type', 'text/plain')
        res.write('This is homepage!')
    } else if (url === '/about') {
        res.setHeader('Content-Type', 'text/json')
        res.write(JSON.stringify({
            'status': 'success',
            'message': 'response success',
            'description': 'Exercise #03',
            'date': moment().format(),
            'data': data
        }))
    } else if (url === '/user') {
        res.setHeader('Content-Type', 'text/json')
        res.write(JSON.stringify(user))
    }   
}
)

const hostname = 'localhost';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});