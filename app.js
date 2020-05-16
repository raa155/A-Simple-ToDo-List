const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let listOfItems = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {


    let today = new Date();
    
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }

    let day = today.toLocaleDateString('en-US', options);

    res.render('list', {
        dayOfWeek: day,
        toDoList: listOfItems
    });

});

app.post('/', (req, res) => {
    let listItem = req.body.newItem;
    listOfItems.push(listItem);
    res.redirect('/');
})


app.listen(3000, () => {
    console.log("The server is currently listening to port 3000");
})