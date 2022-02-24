const express = require('express'),
    app = express();

app.use(express.json())

app.get('/', (req, res) => {
    return res.json({ tested: true })
})

app.get('/sum', (req, res) => {
    const { num1, num2 } = req.body
    return res.json({ sum: num1 + num2 });
})

app.get('/clone', (req, res) => {
    const { array } = req.body
    return res.json({ cloned: [...array] });
})

module.exports = app