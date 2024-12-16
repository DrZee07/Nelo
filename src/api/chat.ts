import { loadPDFData } from '../utils/loadPDF';

let pdfContent = '';

(async () => {
  try {
    pdfContent = await loadPDFData('./public/nelson_book_of_pediatrics.pdf');
    console.log('PDF content loaded successfully.');
  } catch (error) {
    console.error('Error loading PDF content:', error);
  }
})();

export async function chatHandler(req: Request): Promise<Response> {
  if (req.method === 'GET') {
    return new Response(JSON.stringify({ content: 'PDF content loaded successfully.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else if (req.method === 'POST') {
    const { query } = await req.json();
    
    // Simple search in the PDF content (you may want to implement more sophisticated querying)
    const results = pdfContent.toLowerCase().includes(query.toLowerCase());
    
    return new Response(JSON.stringify({ found: results }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { 'Allow': 'GET, POST' },
    });
  }
}

