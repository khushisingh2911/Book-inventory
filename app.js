//This Project is made by Khushi Singh
//Email: Khushisingh11116@gmail.com.


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bookRoutes = require('./routes/books'); 


const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));


app.use('/', bookRoutes); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
