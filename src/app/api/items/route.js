import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { items } from "../../lib/data.js";

// GET /api/items - Get all items
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: items,
      count: items.length,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch items",
      },
      { status: 500 }
    );
  }
}

// POST /api/items - Create new item
export async function POST(request) {
  try {
    const { name, description, price, image, category } = await request.json();

    // Validation
    if (!name || !description || !price) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, description, and price are required",
        },
        { status: 400 }
      );
    }

    const newItem = {
      id: uuidv4(),
      name: name.trim(),
      description: description.trim(),
      price: parseFloat(price),
      image:
        image?.trim() ||
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: category || "General",
      inStock: true,
      createdAt: new Date().toISOString(),
    };

    items.push(newItem);

    return NextResponse.json(
      {
        success: true,
        data: newItem,
        message: "Item created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating item:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create item",
      },
      { status: 500 }
    );
  }
}
