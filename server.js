const express = require('express');

//express server
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});