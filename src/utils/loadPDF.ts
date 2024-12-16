import * as pdfjs from 'pdfjs-dist'

export const loadPDFData = async (filePath: string): Promise<string> => {
  const pdf = await pdfjs.getDocument(filePath).promise
  let fullText = ''

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const content = await page.getTextContent()
    const pageText = content.items.map((item: any) => item.str).join(' ')
    fullText += pageText + '\n'
  }

  return fullText
}

