import { NextRequest, NextResponse } from 'next/server';
import { jsPDF } from 'jspdf';

export async function POST(req: NextRequest) {
    try {
        const { chartImgData, tableImgData, title } = await req.json();

        const pdf = new jsPDF();
        pdf.text(title, 10, 10);
        // pdf.addImage(navbarImgData, 'PNG', 10, 20, 180, 20);
        pdf.addImage(chartImgData, 'PNG', 10, 50, 180, 80);
        pdf.addImage(tableImgData, 'PNG', 10, 140, 180, 80);
        //pdf.addImage(footerImgData, 'PNG', 10, 230, 180, 20);

        const pdfData = pdf.output('arraybuffer');
        return new NextResponse(pdfData, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=survey_results.pdf',
            },
        });
    } catch (error) {
        console.error('Error generating PDF:', error);
        return new NextResponse(JSON.stringify({ error: 'Error generating PDF' }), { status: 500 });
    }
}