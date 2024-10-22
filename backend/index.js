import express from 'express';
import colors from 'colors';
import dbConnection from './database/dbcon.js';
import Usermodel from './database/User.js'; 
import cors from 'cors';

const app = express();

// Database connection
dbConnection();

app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.post("/register", async (req, res) => {
    const { name, email, address, contact } = req.body;
    if (!name || !email || !address || !contact) {
        return res.send({ Message: "Please fill all the fields" });
    }
    const checkemail = await Usermodel.findOne({ email });
    if (checkemail) {
        return res.send({ Message: "This email already exists" });
    }
    const data = new Usermodel({ name, email, address, contact });
    const newdata = await data.save();
    if (newdata) {
        return res.send({ Message: "User  created successfully" });
    } else {
        return res.send({ Message: "User  creation failed" });
    }
});

app.get("/list", async (req, res) => {
    let data = await Usermodel.find();
    res.send(data);
});

app.get("/getonid/:id", async (req, res) => {
    const {id} = req.params 
    const user =  await Usermodel.findById(id);
    return res.send (user);
});

app.delete("/delete-user/:id", async (req, res) => {
    const {id} = req.params;
    const result = await Usermodel.findByIdAndDelete(id);
    if(result){
        return res.send({Message: "User deleted successfully"});
    }
    else{
        return res.send({Message: "User deletion failed"});
    }
});

const port = 7000;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`.bgMagenta);
});