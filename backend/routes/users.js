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
router.post("/", async function (req, res) {
  let { name, email, destination, travellers, budget } = req.body;
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

module.exports = router;
