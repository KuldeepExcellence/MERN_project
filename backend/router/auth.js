const express = require('express')
const router = express.Router();
const app = express();
router.get('/', (req, res) => {
        res.send("HELLO FROM ROUTER JS ")
})
app.use(express.json());
router.post('/register', (req, res) => {
        console.log(req.body);
        res.json({ message: req.body });
})
module.exports = router;