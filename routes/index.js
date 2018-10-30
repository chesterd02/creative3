var express = require('express');
var router = express.Router();

var index_to_remove = 0;
var pokemon = [
  {
    name: '*Looks both ways* Want any memes?',
  },
  {
    name: 'COUNTRY ROOOOOAAAAADDDDSSS',
  },
  {
    name: 'halo_slayer_84604 wuz here',
  },
  {
    name: 'Yeet',
  },
  {
    name: 'Ya like jazz?',
  },
  {
    name: 'WEST VIRGINIIIIIAAAAAAA',
  }
];
/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});
router.get('/pokemon', function(req, res) {
  res.send(pokemon);
});
router.post('/pokemon', function(req, res) {
    console.log("In Pokemon Post");
    console.log(req.body);
    pokemon[index_to_remove] = req.body;
    index_to_remove = (index_to_remove + 1) % 6;
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 
module.exports = router;