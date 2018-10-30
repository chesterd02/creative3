var express = require('express');
var router = express.Router();
var pokemon = [
  {
    name: 'Message1',
  },
  {
    name: 'Message2',
  },
  {
    name: 'Message3',
  },
  {
    name: 'Message4',
  },
  {
    name: 'Message5',
  },
  {
    name: 'Message6',
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
    pokemon.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 
module.exports = router;