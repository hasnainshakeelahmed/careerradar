import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Newsletter subscription endpoint
  app.post('/api/subscribe', (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email' });
      }

      // Store email in a simple file (in production, use database)
      const subscribersFile = path.join(__dirname, '..', 'subscribers.json');
      let subscribers: string[] = [];
      
      if (fs.existsSync(subscribersFile)) {
        const data = fs.readFileSync(subscribersFile, 'utf-8');
        subscribers = JSON.parse(data);
      }

      // Check if already subscribed
      if (subscribers.includes(email)) {
        return res.status(200).json({ message: 'Already subscribed' });
      }

      subscribers.push(email);
      fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2));

      res.json({ message: 'Successfully subscribed!' });
    } catch (error) {
      console.error('Subscription error:', error);
      res.status(500).json({ error: 'Subscription failed' });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
