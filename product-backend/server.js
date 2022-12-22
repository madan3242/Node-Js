const app = require('./app');

app.listen(process.env.PORT, process.env.HOSTNAME, (error) => {
    if(error) throw error;
    console.log(`SERVER IS RUNNING ON http://${process.env.HOSTNAME}:${process.env.PORT}`);
})