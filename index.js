const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const users = [{
    id: 1,
    username: "RahulSharma123",
    name: "Rahul Sharma",
    repoCount: 98,
    location: "Delhi",
},
{
    id: 2,
    username: "AnkitaSingh789",
    name: "Ankita Singh",
    repoCount: 149,
    location: "Mumbai",
},
{
    id: 3,
    username: "PritiJha456",
    name: "Priti Jha",
    repoCount: 172,
    location: "Kolkata",
},
{
    id: 4,
    username: "RoyalMandela234",
    name: "Royal Mandela",
    repoCount: 250,
    location: "Delhi",
},
{
    id: 5,
    username: "HPNaik987",
    name: "HP Naik",
    repoCount: 178,
    location: "Indore",
}];

app.get('/users', (req, res) => {
    res.json({ users });
});

app.get('/users/id/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let user = users.find(userObj => userObj.id === id);
    if (user) {
        res.status(200).json({ user })
    }
    else {
        res.status(404).json({ message: "No Data Found with id:" + id });
    }
});

app.get('/users/username/:username', (req, res) => {
    let username = req.params.username;
    let user = users.find(userObj => userObj.username === username);
    if (user) {
        res.status(200).json({ user })
    }
    else {
        res.status(404).json({ message: "No Data Found with username: " + username });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});