const express = require("express");
const app = express();

const MensRanking = require("../src/models/mens");

require("./database/conn");

const port = process.env.PORT || 8000;

app.use(express.json());

app.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find().sort({"ranking":1});
    res.status(201).send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.get("/", async (req, res) => {
  res.send("hello akash");
});

app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id
    const getMen = await MensRanking.findById(_id);
    res.status(201).send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.get("/", async (req, res) => {
  res.send("hello akash");
});

app.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id
    const updateMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
      new:true
    })
    res.status(201).send(updateMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.delete("/mens/:id",async(req,res)=>{
  try {
    const _id = req.params.id;
    const delMen = await MensRanking.findByIdAndDelete(_id,req.body)
    res.send(delMen)
  } catch (e) {
    res.status(500).send(e)
  }
})

app.get("/", async (req, res) => {
  res.send("hello akash");
});

app.listen(port, () => {
  console.log(`connection established at ${port}`);
});
