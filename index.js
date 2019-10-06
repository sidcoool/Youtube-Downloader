const express = require('express');
const ytdl = require('ytdl-core');

const app = express();

const PORT = process.env.PORT || 3333

app.get('/download/:url', (req,res) => {
	let URL = req.query.a;
	res.header('Content-Disposition', 'attachment; filename="video.mp4"');
	ytdl(URL, {
		format: 'mp4'
	}).pipe(res);
});


app.listen(PORT, () => {
	console.log('Server Works !!! At port 3333');
});

