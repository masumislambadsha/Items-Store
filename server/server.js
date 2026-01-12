const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Data storage file
const dataFile = path.join(__dirname, "data", "items.json");

// Ensure data directory exists
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize items data if file doesn't exist
if (!fs.existsSync(dataFile)) {
  const initialItems = [
    {
      id: uuidv4(),
      name: "Premium Wireless Headphones",
      description:
        "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Electronics",
      inStock: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      name: "Ergonomic Office Chair",
      description:
        "Comfortable ergonomic office chair with lumbar support and adjustable height. Ideal for long working hours.",
      price: 449.99,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Furniture",
      inStock: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      name: "Smart Fitness Watch",
      description:
        "Advanced fitness tracking watch with heart rate monitor, GPS, and smartphone connectivity.",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Electronics",
      inStock: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      name: "Professional Camera Lens",
      description:
        "High-performance camera lens for professional photography with superior image quality and versatility.",
      price: 899.99,
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Photography",
      inStock: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      name: "Organic Coffee Beans",
      description:
        "Premium organic coffee beans sourced from sustainable farms. Rich flavor and aromatic experience.",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Food & Beverage",
      inStock: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      name: "Minimalist Desk Lamp",
      description:
        "Modern minimalist desk lamp with adjustable brightness and sleek design. Perfect for any workspace.",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Home & Office",
      inStock: true,
      createdAt: new Date().toISOString(),
    },
  ];

  fs.writeFileSync(dataFile, JSON.stringify(initialItems, null, 2));
}

// Helper functions
const readItems = () => {
  try {
    const data = fs.readFileSync(dataFile, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading items:", error);
    return [];
  }
};

const writeItems = (items) => {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(items, null, 2));
    return true;
  } catch (error) {
    console.error("Error writing items:", error);
    return false;
  }
};

// Validation middleware
const validateItem = (req, res, next) => {
  const { name, description, price } = req.body;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({
      error: "Name is required and must be a non-empty string",
    });
  }

  if (
    !description ||
    typeof description !== "string" ||
    description.trim().length === 0
  ) {
    return res.status(400).json({
      error: "Description is required and must be a non-empty string",
    });
  }

  if (!price || typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      error: "Price is required and must be a positive number",
    });
  }

  next();
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    error: "Internal server error",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Something went wrong",
  });
};

// Routes

// GET /api/items - Get all items
app.get("/api/items", (req, res) => {
  try {
    const items = readItems();
    res.json({
      success: true,
      data: items,
      count: items.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch items",
    });
  }
});

// GET /api/items/:id - Get single item
app.get("/api/items/:id", (req, res) => {
  try {
    const { id } = req.params;
    const items = readItems();
    const item = items.find((item) => item.id === id);

    if (!item) {
      return res.status(404).json({
        success: false,
        error: "Item not found",
      });
    }

    res.json({
      success: true,
      data: item,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch item",
    });
  }
});

// POST /api/items - Create new item
app.post("/api/items", validateItem, (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    const items = readItems();

    const newItem = {
      id: uuidv4(),
      name: name.trim(),
      description: description.trim(),
      price: parseFloat(price),
      image:
        image ||
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: category || "General",
      inStock: true,
      createdAt: new Date().toISOString(),
    };

    items.push(newItem);

    if (writeItems(items)) {
      res.status(201).json({
        success: true,
        data: newItem,
        message: "Item created successfully",
      });
    } else {
      res.status(500).json({
        success: false,
        error: "Failed to save item",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to create item",
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "ItemStore API is running",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
  });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 ItemStore API server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📦 Items endpoint: http://localhost:${PORT}/api/items`);
});

module.exports = app;
