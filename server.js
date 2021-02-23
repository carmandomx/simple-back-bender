import express from "express";
const data = [
  {
    id: 1,
    title: "Laugh",
    content: "Hahahahaha. Oh wait you’re serious. Let me laugh even harder.",
    author: "Bender",
    publishedAt: "2021-05-22",
  },
  {
    id: 2,
    title: "Discrimination",
    content:
      "This is the worst kind of discrimination there is: the kind against me",
    author: "Bender",
    publishedAt: "2021-05-21",
  },
  {
    id: 3,
    title: "Hello World",
    content: "I’m Bender, baby! Oh god, please insert liquor!",
    author: "Bender",
    publishedAt: "2021-05-20",
  },
];

const app = express();

app.listen(process.env.PORT || 5000, () => {
  console.log("Mi server funciona");
});

app.get("/posts", (req, res) => {
  res.json(data);
});
