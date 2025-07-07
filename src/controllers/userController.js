import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export class UserController {
  async findAllUsers(request, response) {
    try {
      const users = await prisma.user.findMany({
        select: { id: true, name: true, email: true, phone: true, isAdmin: true },
      });
      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  async findUserById(req, res) {
    const usuario = await prisma.user.findUnique({ where: { id: req.params.id } });
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });
    return res.json(usuario);
  }

  async createUser(request, response) {
    const { name, email, password, isAdmin = false, phone } = request.body;

    try {
      const emailExists = await prisma.user.findUnique({ where: { email } });
      
      if (emailExists) {
        return response.status(409).json({ error: "Email already in use" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          phone,
          password: hashedPassword,
          isAdmin,
        },
        select: { id: true, name: true, email: true, phone: true, isAdmin: true },
      });

      return response.status(201).json(newUser);

    } catch (error) {
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { id } });

      if (!user) {
        return response.status(404).json({ error: "User not found" });
      }

      const updatedUser = await prisma.user.update({
        where: { id },
        data: { name, email, phone },
        select: { id: true, name: true, email: true, phone: true, isAdmin: true },
      });

      return response.status(200).json(updatedUser);

    } catch (error) {
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params;

    try {
      const user = await prisma.user.findUnique({ where: { id } });

      if (!user) {
        return response.status(404).json({ error: "User not found" });
      }

      await prisma.user.delete({ where: { id } });

      return response.status(204).send();

    } catch (error) {
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}