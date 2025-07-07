import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class ItemController {
    async findAllItems(req, res) {
        const itens = await prisma.item.findMany();
        return res.status(200).json(itens);
    }

    async findItemById(req, res) {
        const item = await prisma.item.findUnique({ where: { id: req.params.id } });
        if (!item) return res.status(404).json({ error: "Item não encontrado" });
        return res.json(item);
    }

    async createItem(req, res) {
        try {
            const item = await prisma.item.create({ data: req.body });
            return res.status(201).json(item);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async updateItem(req, res) {
        try {
            const item = await prisma.item.update({ where: { id: req.params.id }, data: req.body });
            return res.json(item);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async deleteItem(req, res) {
        try {
            await prisma.item.delete({ where: { id: req.params.id } });
            return res.status(204).send();
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}
