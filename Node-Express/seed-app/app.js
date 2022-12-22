import express from 'express'
import chalk from 'chalk'
const app = express();

app.get("/", (req, res) => {
    res.send("Hello WOrld")
})

app.listen(4000, (error) => {
    if(error) throw error
    console.log(chalk.red("Server running"));
})

export default app