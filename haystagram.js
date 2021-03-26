
express = require('express')
const app = express()
var router = express.Router()
app.use('/', router)
app.get('/', function (req, res) {
         res.send('Hello World')
})
app.get('/users', function (req, res) {
         res.send('Hello users');
})
app.get('/follow', function (req, res) {
         res.send('Hello geri');
})
app.get('/photo', function (req, res) {
         res.send('photo');
})
app.get('/story', function (req, res) {
         res.send('story')
});
router.get('/like', function (req, res) {
         res.send('mersi like i hamar')
})
router.get('/settings', function (req, res) {
         res.send('mdar nastroika :D')
})
app.listen(3000)
