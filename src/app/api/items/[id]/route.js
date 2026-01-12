import { NextResponse } from "next/server";

// Mock data - same as in the main items route
const items = [
  {
    id: "6292860d-3235-4eb0-9f67-11bace383009",
    name: "Premium Wireless Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    inStock: true,
    createdAt: "2026-01-12T17:38:55.116Z",
  },
  {
    id: "564c454f-1bc5-4531-922c-36c37732d632",
    name: "Ergonomic Office Chair",
    description:
      "Comfortable ergonomic office chair with lumbar support and adjustable height. Ideal for long working hours.",
    price: 449.99,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Furniture",
    inStock: true,
    createdAt: "2026-01-12T17:38:55.117Z",
  },
  {
    id: "62f575e7-da30-474b-8f6f-483e0cb4d1be",
    name: "Smart Fitness Watch",
    description:
      "Advanced fitness tracking watch with heart rate monitor, GPS, and smartphone connectivity.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    inStock: true,
    createdAt: "2026-01-12T17:38:55.117Z",
  },
  {
    id: "5eca690e-f345-4e72-83dd-f0a47dfb39f9",
    name: "Professional Camera Lens",
    description:
      "High-performance camera lens for professional photography with superior image quality and versatility.",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Photography",
    inStock: true,
    createdAt: "2026-01-12T17:38:55.117Z",
  },
  {
    id: "c2e9a912-1883-48b8-9bea-96567e1e2679",
    name: "Organic Coffee Beans",
    description:
      "Premium organic coffee beans sourced from sustainable farms. Rich flavor and aromatic experience.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Food & Beverage",
    inStock: true,
    createdAt: "2026-01-12T17:38:55.117Z",
  },
  {
    id: "18f5d58b-154f-48b4-ba09-7effffa2ba06",
    name: "Minimalist Desk Lamp",
    description:
      "Modern minimalist desk lamp with adjustable brightness and sleek design. Perfect for any workspace.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Home & Office",
    inStock: true,
    createdAt: "2026-01-12T17:38:55.117Z",
  },
];

// GET /api/items/[id] - Get single item
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const item = items.find((item) => item.id === id);

    if (!item) {
      return NextResponse.json(
        {
          success: false,
          error: "Item not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: item,
    });
  } catch (error) {
    console.error("Error fetching item:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch item",
      },
      { status: 500 }
    );
  }
}

// PUT /api/items/[id] - Update item
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { name, description, price, image, category, inStock } =
      await request.json();

    const itemIndex = items.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: "Item not found",
        },
        { status: 404 }
      );
    }

    // Update item
    const updatedItem = {
      ...items[itemIndex],
      ...(name && { name: name.trim() }),
      ...(description && { description: description.trim() }),
      ...(price && { price: parseFloat(price) }),
      ...(image && { image: image.trim() }),
      ...(category && { category }),
      ...(typeof inStock === "boolean" && { inStock }),
      updatedAt: new Date().toISOString(),
    };

    items[itemIndex] = updatedItem;

    return NextResponse.json({
      success: true,
      data: updatedItem,
      message: "Item updated successfully",
    });
  } catch (error) {
    console.error("Error updating item:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update item",
      },
      { status: 500 }
    );
  }
}

// DELETE /api/items/[id] - Delete item
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const itemIndex = items.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: "Item not found",
        },
        { status: 404 }
      );
    }

    const deletedItem = items.splice(itemIndex, 1)[0];

    return NextResponse.json({
      success: true,
      data: deletedItem,
      message: "Item deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting item:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete item",
      },
      { status: 500 }
    );
  }
}
