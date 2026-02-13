import express from 'express';
import { requestLogger } from './middleware/logger.js';
import employeeRoutes from './routes/employeeRoutes.js';
import deptRoutes from './routes/deptRoutes.js';

const app = express();
app.use(express.json());

// 1. Requirement: Middleware for logging
app.use(requestLogger);

// 2. Requirement: API Endpoints
app.use('/api/employees', employeeRoutes);
app.use('/api/departments', deptRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});