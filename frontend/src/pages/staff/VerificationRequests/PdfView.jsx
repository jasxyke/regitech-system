import React from "react";
import { Document, Page } from "react-pdf";

const PdfView = ({ pdf }) => {
  return (
    <div>
      {/* <Document file={pdfSrc}>
        <Page pageNumber={1} />
      </Document> */}
      <iframe src={pdf.url} width={"100%"} height={"600px"}></iframe>
    </div>
  );
};

export default PdfView;
