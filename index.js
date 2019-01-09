var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/firstpage', function(req, res){
  res.sendFile(__dirname + '/firstpage.html');
});

app.get('/secondpage', function(req, res){
  res.sendFile(__dirname + '/secondpage.html');
});

app.get('/DecideGamePlan', function(req, res){
  res.sendFile(__dirname + '/DecideGamePlan.html');
});

app.get('/Genre', function(req, res){
  res.sendFile(__dirname + '/Genre.html');
});

app.get('/GenrePlay', function(req, res){
  res.sendFile(__dirname + '/GenrePlay.html');
});

app.get('/GenreResult', function(req, res){
  res.sendFile(__dirname + '/GenreResult.html');
});

app.get('/SubGenre', function(req, res){
  res.sendFile(__dirname + '/SubGenre.html');
});

app.get('/SubGenrePlay', function(req, res){
  res.sendFile(__dirname + '/SubGenrePlay.html');
});

app.get('/SubGenreResult', function(req, res){
  res.sendFile(__dirname + '/SubGenreResult.html');
});

app.get('/Immersion', function(req, res){
  res.sendFile(__dirname + '/Immersion.html');
});

app.get('/ImmersionPlay', function(req, res){
  res.sendFile(__dirname + '/ImmersionPlay.html');
});

app.get('/ImmersionResult', function(req, res){
  res.sendFile(__dirname + '/ImmersionResult.html');
});

app.get('/Critics', function(req, res){
  res.sendFile(__dirname + '/Critics.html');
});

app.get('/CriticsPlay', function(req, res){
  res.sendFile(__dirname + '/CriticsPlay.html');
});

app.get('/CriticsResult', function(req, res){
  res.sendFile(__dirname + '/CriticsResult.html');
});

app.get('/FinalMovie', function(req, res){
  res.sendFile(__dirname + '/FinalMovie.html');
});

app.get('/FinalMoviePlay', function(req, res){
  res.sendFile(__dirname + '/FinalMoviePlay.html');
});

app.get('/FinalMovieResult', function(req, res){
  res.sendFile(__dirname + '/FinalMovieResult.html');
});

app.get('/PhoneConnect', function(req, res){
  res.sendFile(__dirname + '/PhoneConnect.html');
});

app.get('/PhoneDecGamePlan', function(req, res){
  res.sendFile(__dirname + '/PhoneDecGamePlan.html');
});

app.get('/LookScreen1', function(req, res){
  res.sendFile(__dirname + '/LookScreen1.html');
});

app.get('/PhoneGenreResult', function(req, res){
  res.sendFile(__dirname + '/PhoneGenreResult.html');
});

app.get('/LookScreen2', function(req, res){
  res.sendFile(__dirname + '/LookScreen2.html');
});

app.get('/PhoneSubGenreResult', function(req, res){
  res.sendFile(__dirname + '/PhoneSubGenreResult.html');
});

app.get('/LookScreen3', function(req, res){
  res.sendFile(__dirname + '/LookScreen3.html');
});

app.get('/PhoneImmersionResult', function(req, res){
  res.sendFile(__dirname + '/PhoneImmersionResult.html');
});

app.get('/LookScreen4', function(req, res){
  res.sendFile(__dirname + '/LookScreen4.html');
})

app.get('/PhoneCriticsResult', function(req, res){
  res.sendFile(__dirname + '/PhoneCriticsResult.html');
});

app.get('/LookScreen5', function(req, res){
  res.sendFile(__dirname + '/LookScreen5.html');
})

app.get('/PhoneFinalMovieResult', function(req, res){
  res.sendFile(__dirname + '/PhoneFinalMovieResult.html');
});

app.get('/FinalResult', function(req, res){
  res.sendFile(__dirname + '/FinalResult.html');
});

app.use(express.static(__dirname + '/style'));

io.on('connection', function(socket){
  	socket.on('connectgame', function(msg){
  		io.emit('connectgame', msg);
 	});
 	socket.on('decide', function(msg){
  		io.emit('decide', msg);
 	});
 	socket.on('genreplay', function(msg){
  		io.emit('genreplay', msg);
 	});
 	socket.on('genreresult', function(msg){
  		io.emit('genreresult', msg);
 	});
 	socket.on('subgenre', function(msg){
  		io.emit('subgenre', msg);
 	});
 	socket.on('subgenreplay', function(msg){
  		io.emit('subgenreplay', msg);
 	});
 	socket.on('subgenreresult', function(msg){
  		io.emit('subgenreresult', msg);
 	});
 	socket.on('immersion', function(msg){
  		io.emit('immersion', msg);
 	});
 	socket.on('immersionplay', function(msg){
  		io.emit('immersionplay', msg);
 	});
 	socket.on('immersionresult', function(msg){
  		io.emit('immersionresult', msg);
 	});
 	socket.on('critics', function(msg){
  		io.emit('critics', msg);
 	});
 	socket.on('criticsplay', function(msg){
  		io.emit('criticsplay', msg);
 	});
 	socket.on('criticsresult', function(msg){
  		io.emit('criticsresult', msg);
 	});
 	socket.on('finalmovie', function(msg){
  		io.emit('finalmovie', msg);
 	});
 	socket.on('finalmovieplay', function(msg){
  		io.emit('finalmovieplay', msg);
 	});
 	socket.on('finalmovieresult', function(msg){
  		io.emit('finalmovieresult', msg);
 	});
 	socket.on('finalmovieresult', function(msg){
  		io.emit('finalmovieresult', msg);
 	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});