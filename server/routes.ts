import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { ZodError } from "zod";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      return res.status(201).json({ message: "Message received successfully", data: message });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.format() });
      }
      console.error("Error saving contact message:", error);
      return res.status(500).json({ message: "Failed to save your message. Please try again." });
    }
  });

  // Resume download
  app.get("/api/resume/download", (req: Request, res: Response) => {
    const resumePath = path.resolve(__dirname, "../public/RAGHURAM-GUDEMARANAHALLI.pdf");
    
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, "RAGHURAM-GUDEMARANAHALLI.pdf");
    } else {
      res.status(404).json({ message: "Resume file not found" });
    }
  });

  // Resume view
  app.get("/api/resume/view", (req: Request, res: Response) => {
    const resumePath = path.resolve(__dirname, "../public/RAGHURAM-GUDEMARANAHALLI.pdf");
    
    if (fs.existsSync(resumePath)) {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "inline; filename=RAGHURAM-GUDEMARANAHALLI.pdf");
      fs.createReadStream(resumePath).pipe(res);
    } else {
      res.status(404).json({ message: "Resume file not found" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
