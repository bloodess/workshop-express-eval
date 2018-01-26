let chalk = require('chalk');

const app = require('./src/app');

// port
const port = process.env.PORT || 3000;

// start server
app.listen(port, function() {

    // start server here
    console.log(chalk.green('Hello web server : ' + port));

});

