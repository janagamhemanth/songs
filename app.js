
import express from "express";

const app = express();
const port = 3000;

// Configure EJS as the template engine
app.set("view engine", "ejs");

// Serve CSS and other static files
app.use(express.static("public"));

// Dynamic homepage data
const appName = "SoundWave";
const tagline = "Your music, your mood, your world";

// Home route
app.get("/", (req, res) => {
    res.render("index", {
        appName: 'janagam hemanth',
        tagline: tagline
    });
});


const songs = [
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        genre: "Pop"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        genre: "Pop"
    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        genre: "Romance"
    },
    {
        title: "Believer",
        artist: "Imagine Dragons",
        genre: "Rock"
    },
    {
        title: "Kesariya",
        artist: "Arijit Singh",
        genre: "Bollywood"
    },
    {
        title: "Naatu Naatu",
        artist: "Rahul Sipligunj and Kaala Bhairava",
        genre: "Telugu"
    }
];

// Songs page
app.get("/songs", (req, res) => {
    res.render("songs", {
        appName: appName,
        songs: songs
    });
});


// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
