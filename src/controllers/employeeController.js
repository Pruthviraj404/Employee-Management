
import prisma from '../models/db.js'; 


export const getEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany({
      include: {
        department: { select: { name: true } },
        manager: { select: { first_name: true, last_name: true } }
      }
    });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Error fetching employees" });
  }
};




export const createEmployee = async (req, res) => {
  try {
    const employee = await prisma.employee.create({ data: req.body });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const deleteEmployee = async (req, res) => {
  try {
    await prisma.employee.delete({ where: { id: parseInt(req.params.id) } });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Employee not found" });
  }
};