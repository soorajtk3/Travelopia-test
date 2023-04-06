const { PrismaClient } = require("@prisma/client");

var express = require("express");
var router = express.Router();
const prisma = new PrismaClient();

/* GET users listing. */

router.get("/", async function (req, res) {
  let getUser = await prisma.user.findMany();
  if (!getUser) {
    return res.status(404).json({});
  }
  return res.status(200).json({ getUser });
});
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     responses:
 *       200:
 *         description: A list of users
 */

router.post("/", async function (req, res) {
  let { name, email, destination, travellers, budget } = req.body;
  if (!name || !email || !destination || !travellers || !budget) {
    return res.status(400).json({ error: "Missing request body fields" });
  }
  let userDetails = await prisma.user.create({
    data: {
      name: name,
      email: email,
      destination: destination,
      travellers: parseInt(travellers),
      budget: parseInt(budget),
    },
  });
  return res.status(200).json({
    userDetails,
  });
});

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         destination:
 *           type: string
 *         travellers:
 *           type: integer
 *         budget:
 *           type: integer
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create travel booking by a user
 *     description: Create a booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Create booking success
 */

module.exports = router;
