const express = require('express');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;

const app = express();

app.set("view engine", "ejs");

cloudinary.config({
    cloud_name: '',
    api_key: '',
    api_secret: ''
})
// middleware
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/myget', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.post('/mypost', async (req, res) => {
    console.log(req.body);
    console.log(req.files);

    let result;
    let imageArray = []

    // case - multipe images

    if(req.files){
        for (let i = 0; i < req.files.samplefile.length; i++) {
            let result = await cloudinary.uploader.upload(req.files.samplefile[i].tempFilePath, {
                folder: "users"
            });
            imageArray.push({
                public_id: result.public_id,
                secure_url: result.secure_url
            })
        }
    }

    // let file = req.files.samplefile;
    // result = await cloudinary.uploader.upload(file.tempFilePath, {
    //     folder: 'users',
    // });

    console.log(result);

    details = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        result,
        imageArray
    }
    console.log(details);
    res.send(details);
})

// just to render form
app.get("/mygetform", (req,res) => {
    res.render("getform");
})
app.get("/mypostform", (req,res) => {
    res.render("postform");
})

app.listen(4000, () => {
    console.log("Server running at 4000");
})
