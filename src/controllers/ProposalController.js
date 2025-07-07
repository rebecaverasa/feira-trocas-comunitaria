import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class ProposalController {
    async findAllProposals(req, res) {
        const propostas = await prisma.proposal.findMany();
        return res.status(200).json(propostas);
    }

    async findProposalById(req, res) {
        const proposta = await prisma.proposal.findUnique({ where: { id: Number(req.params.id) } });
        if (!proposta) return res.status(404).json({ error: "Proposta não encontrada" });
        return res.json(proposta);
    }

    async createProposal(req, res) {
        try {
            const proposta = await prisma.proposal.create({ data: req.body });
            return res.status(201).json(proposta);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async updateProposal(req, res) {
        try {
            const proposta = await prisma.proposal.update({ where: { id: Number(req.params.id) }, data: req.body });
            return res.json(proposta);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async deleteProposal(req, res) {
        try {
            await prisma.proposal.delete({ where: { id: Number(req.params.id) } });
            return res.status(204).send();
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}