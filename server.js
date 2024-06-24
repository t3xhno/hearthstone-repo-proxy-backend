const CORS = require("cors");
const express = require("express");
const { default: axios } = require("axios");

const app = express();
const PORT = 1337;

const api = axios.create({
    baseURL: "https://bgknowhow.com/bgjson/output/",
});

app.use(CORS());

app.get("/minions_active", async (req, res) => {
    const data = (await api.get("/bg_minions_active.json")).data;
    res.json(data);
});

app.get("/minions_all", async (req, res) => {
    const data = (await api.get("/bg_minions_all.json")).data;
    res.json(data);
});

app.listen(PORT, () => console.log(`RUNNING!!! @${PORT}`));

