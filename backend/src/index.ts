import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Risks endpoints
app.get('/api/risks', (req, res) => {
  res.json({ 
    message: 'Risks endpoint',
    data: []
  });
});

app.post('/api/risks', (req, res) => {
  res.status(201).json({ 
    message: 'Risk created',
    data: { id: '1', ...req.body }
  });
});

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`✓ Kondwani API server running on port ${PORT}`);
});
