const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())



const port = 3333
app.listen(port, err=>{
    if (err) console.warn(err)
    else console.log('Backend runs on port', port)
})