import React from "react";
import { Document, Page } from "react-pdf";

const PdfView = ({ pdfSrc }) => {
  return (
    <div>
      {/* <Document file={pdfSrc}>
        <Page pageNumber={1} />
      </Document> */}
      <iframe src={pdfSrc} width={"100%"} height={"750px"}></iframe>
    </div>
  );
};

export default PdfView;
