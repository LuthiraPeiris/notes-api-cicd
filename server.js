const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

let notes = [
  { id: 1, title: "First note", content: "GitHub Actions deployment test" }
];

app.get("/", (req, res) => {
  res.send("Notes API is running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is healthy" });
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const { title, content } = req.body;

  const note = {
    id: notes.length + 1,
    title,
    content
  };

  notes.push(note);
  res.status(201).json(note);
});

app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter(note => note.id !== id);

  res.json({ message: "Note deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});