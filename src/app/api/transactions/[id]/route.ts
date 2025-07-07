import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const transaction = await prisma.transaction.findUnique({ where: { id } });
  if (!transaction)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(transaction);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const data = await req.json();
  try {
    const transaction = await prisma.transaction.update({
      where: { id },
      data,
    });
    return NextResponse.json(transaction);
  } catch {
    return NextResponse.json(
      { error: "Not found or update failed" },
      { status: 404 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  try {
    await prisma.transaction.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Not found or delete failed" },
      { status: 404 }
    );
  }
}
