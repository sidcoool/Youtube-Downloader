const express = require('express');
const ytdl = require('ytdl-core');

const app = express();

const PORT = process.env.PORT || 3333

app.get('/', (req, res)=>{
	res.sendFile(__dirname + "/index.html")
})

app.get('/download/:url', (req,res) => {
	//http://localhost:3333/download/url?a=https://www.youtube.com/watch?v=Kpn2ajSa92c
	let URL = req.query.a;
	console.log(URL)

	let videoID = URL.split("=")[1]
	console.log(videoID)
	ytdl.getInfo(videoID, (err, info) => {
		if (err) throw err;
		console.log(info.player_response.videoDetails.title.replace(/ /g, "_"))

		res.header('Content-Disposition', `attachment; filename=${info.player_response.videoDetails.title.replace(/ /g, "_").slice(0,20)}.mp4`);

		ytdl(URL, {
			format: 'mp4'
		}).pipe(res);
	  });


});


app.listen(PORT, () => {
	console.log('Server Works !!! At port 3333');
});

