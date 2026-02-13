import prisma from '../models/db.js'; 

export const deleteDepartment = async (req, res) => {
  try {
    await prisma.department.delete({ where: { id: parseInt(req.params.id) } });
    res.status(204).send();
  } catch (error) {
  
    if (error.code === 'P2003') {
      return res.status(400).json({ error: "Delete blocked: Department has employees." });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
};