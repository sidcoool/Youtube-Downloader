const express = require('express');
const ytdl = require('ytdl-core');

const app = express();

const PORT = process.env.PORT || 3333

app.get('/', (req, res)=>{
	res.send("working !")
})

app.get('/download/:url', (req,res) => {
	//http://localhost:4000/download/url?a=https://www.youtube.com/watch?v=42QuXLucH3Q
	let URL = req.query.a;
	res.header('Content-Disposition', 'attachment; filename="video.mp4"');
	ytdl(URL, {
		format: 'mp4'
	}).pipe(res);
});


app.listen(PORT, () => {
	console.log('Server Works !!! At port 3333');
});

