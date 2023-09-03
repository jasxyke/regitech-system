const PdfView = ({ pdfUrl }) => {
  console.log("your pdf:");
  console.log(pdfUrl);
  return (
    <div>
      {/* <Document file={pdfSrc}>
        <Page pageNumber={1} />
      </Document> */}
      <object
        type="application/pdf"
        data={pdfUrl}
        width={"100%"}
        height={"600px"}
      >
        <embed
          type="application/pdf"
          src={pdfUrl}
          width={"100%"}
          height={"600px"}
        ></embed>
      </object>
    </div>
  );
};

export default PdfView;
