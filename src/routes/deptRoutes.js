import express from 'express';
import { deleteDepartment } from '../controllers/deptController.js';

const router = express.Router();


router.delete('/:id', deleteDepartment);

export default router;