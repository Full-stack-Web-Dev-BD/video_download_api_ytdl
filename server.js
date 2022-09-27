const express = require('express')
const cors = require('cors')
const ytdl= require('ytdl-core')
const app =express()
app.use(cors())

app.listen(4000,()=>{
    console.log("Server is started on port 4000 !")
})
app.get("/",(req, res)=>{
    res.json({message:"Welcome to our Youtube video Download API "})
})
app.get('/download',(req, res)=>{
    console.log("startnig to download");
    const URL='https://www.youtube.com/shorts/CeN5pYX77vA'
    res.header('Content-Disposition','attatchment; filename="Video.mp4')
    ytdl(URL,{format:'mp4'}).pipe(res)
})