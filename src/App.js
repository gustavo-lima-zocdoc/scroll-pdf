import { data } from "./pdffile";

function App() {
  // If you are using Acrobat Reader to display the file in the browser, then you could use Acrobat Reader URL parameters.
  // URL PARAMETERS - https://opensource.adobe.com/dc-acrobat-sdk-docs/
  // https://pdfobject.com/pdf/pdf_open_parameters_acro8.pdf
  // https://kb2.adobe.com/jp/cps/511/511759/attachments/511759_pdf_open_parameters.pdf
  // https://pdfobject.com/
  // 
  // EMBED PDF USING ACROBAT READER - https://stackoverflow.com/questions/2474811/how-to-embed-pdf-in-a-web-page-using-acrobat-reader-instead-of-acrobat
  //
  // https://stackoverflow.com/questions/5343114/pdf-open-parameters-comment-commentid-doesnt-work
  //
  // ref: https://stackoverflow.com/questions/15556210/display-pdf-in-web-page-and-scroll-it-programmatically


  /**
   * PDFIUM
   * https://www.infoq.com/news/2014/06/google-chrome-pdf-engine-free/
   * https://pdfium.googlesource.com/
   * https://pdfium.googlesource.com/pdfium/
   * 
   * https://github.com/pvginkel/PdfiumViewer
   * 
   * 
   * 
   * 
   * https://pdfium.googlesource.com/pdfium/#embedding-pdfium-in-your-own-projects
   */

  // https://news.ycombinator.com/item?id=24119589

  
  const goToPage = `#page=3`;
  const goToNamedDestination = `#nameddest=baby`;
  return (
    <div className="App">
      <iframe
        src={`${data}${goToNamedDestination}`}
        width="100%"
        height="500px"
        title="PDF File"
      />
    </div>
  );
}

export default App;
