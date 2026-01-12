import { NextResponse } from "next/server";
import { items } from "../../../lib/data.js";

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
