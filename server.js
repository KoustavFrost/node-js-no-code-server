const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.set({
        'X-Content-Type-Options': 'nosniff',
        'Content-type': 'text/css',
        'link': '<style.css>; rel=stylesheet;',
        'Refresh': '5; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    })
    res.send();
})

app.listen(PORT, () => {
    console.log(`SERVER RUNNING IN -> ${PORT}`);
});