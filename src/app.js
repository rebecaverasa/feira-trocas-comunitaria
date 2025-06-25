import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.get("/usuarios", async (request, response) => {
    const usuarios = await prisma.user.findMany();
    return response.json(usuarios).status(200);
});

app.listen(8080, () => {
    console.log("Runing on port 8080");
});
