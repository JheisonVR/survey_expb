import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { area, values } = await req.json();

    // Save survey result to the database
    const surveyResult = await prisma.surveyResult.create({
      data: {
        area,
        values,
      },
    });

    return NextResponse.json({ message: 'Survey result saved successfully', surveyResult });
  } catch (error) {
    console.error('Error saving survey result:', error);
    return NextResponse.json({ error: 'Error saving survey result' }, { status: 500 });
  }
}