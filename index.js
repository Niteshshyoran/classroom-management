const express = require("express")
const fs = require("fs")

const PORT = 8080

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message:"working"})
  });

// app.post('/', (req, res) => {
//     res.send('POST request to the homepage')
// })

// app.put(

// )

// app.delete(

// )



app.listen(PORT,()=>{
    console.log(`Server is running on https://localhost:${PORT}`)
})