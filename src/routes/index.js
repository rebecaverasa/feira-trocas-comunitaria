import { Router } from "express";
import { UserController } from "../controllers/userController.js";
import { ItemController } from "../controllers/ItemController.js";
import { ProposalController } from "../controllers/ProposalController.js";
import authenticate from "../middlewares/authenticate.js";
import authorization from "../middlewares/authorization.js";

const router = Router();
const userController = new UserController();
const itemController = new ItemController();
const proposalController = new ProposalController();

// Usuários
router.get("/usuarios", authorization, userController.findAllUsers);
router.get("/usuarios/:id", authorization, userController.findUserById);
router.post("/usuarios", userController.createUser);
router.put("/usuarios/:id", authorization, userController.updateUser);
router.delete("/usuarios/:id", authorization, userController.deleteUser);

// Itens
router.get("/itens", itemController.findAllItems);
router.get("/itens/:id", itemController.findItemById);
router.post("/itens", itemController.createItem);
router.put("/itens/:id", itemController.updateItem);
router.delete("/itens/:id", itemController.deleteItem);

// Propostas
router.get("/propostas", proposalController.findAllProposals);
router.get("/propostas/:id", proposalController.findProposalById);
router.post("/propostas", proposalController.createProposal);
router.put("/propostas/:id", proposalController.updateProposal);
router.delete("/propostas/:id", proposalController.deleteProposal);

export default router;