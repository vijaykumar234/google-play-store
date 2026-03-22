const Express = require('express');
const app = Express();
const port = process.env.PORT || 3002;
const http = require("http");
const https = require("https");

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;
process.setMaxListeners(Infinity);



var gplay = require('apt-google-play-scraper');

// gplay.app({appId: 'in.dreamgamestudios.games.sports.dreamcricket3d'})
//   .then(console.log, console.log);




  
  app.get("/package", async(req, res) => {
    const id = req.query.id
    gplay.app({appId: id}).then((data)=> {
    // console.log(data);
    res.status(200).json({data})
  });

  })
  

  app.get("/", (req, res) => {
    res.setHeader("Cache-Control", "public,max-age=0");
    res.status(200).json({
        Author: 'Godxthemes',
        Developer: 'Vijay'
    })
})


  

  app.listen(port, function(){
    console.log("Your App Running on", port);
/* This File Created By vijay */
});
