import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const surveyResults = await prisma.surveyResult.findMany({
            orderBy: {
                createdAt: 'desc', // Assuming you have a createdAt field
            },
            take: 1,
        });
        return NextResponse.json(surveyResults[0]);
    } catch (error) {
        console.error('Error fetching survey results:', error);
        return new NextResponse(JSON.stringify({ error: 'Error fetching survey results' }), { status: 500 });
    }
}