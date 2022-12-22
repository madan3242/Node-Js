const app = require('./app')

app.listen(process.env.PORT, (err) => {
    if(err) throw err;
    console.log(`Server running `);
})