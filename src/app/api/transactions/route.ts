import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const month = searchParams.get('month'); 
  let where = {};
  if (month) {
    const [year, m] = month.split('-');
    where = {
      spentAt: {
        gte: new Date(`${year}-${m}-01T00:00:00.000Z`),
        lt: new Date(`${year}-${String(Number(m) + 1).padStart(2, '0')}-01T00:00:00.000Z`)
      }
    };
  }
  const transactions = await prisma.transaction.findMany({
    where,
    orderBy: { spentAt: 'desc' }
  });
  return NextResponse.json(transactions);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const transaction = await prisma.transaction.create({ data });
  return NextResponse.json(transaction, { status: 201 });
}
