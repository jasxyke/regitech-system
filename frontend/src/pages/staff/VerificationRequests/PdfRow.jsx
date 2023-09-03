import React, { useState } from "react";
import { convertStampToDate } from "../../../utils/datesHandler";
import Checkbox from "../../../components/forms/Checkbox";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import EditPdfModal from "./EditPdfModal";
import jsPDF from "jspdf";

const PdfRow = ({ pdf, currentPdf, changePDF }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => {
    setShowModal(true);
  };

  const viewPdf = () => {
    changePDF(pdf.url);
  };

  const editPdf = (pageNumber) => {
    const pdfDoc = new jsPDF();
    pdfDoc.loadFile(pdf.url, false, () => {
      pdfDoc.deletePage(pageNumber);
      const url = pdfDoc.output("bloburl");
      changePDF(url);
    });
  };
  return (
    <tr key={pdf.id}>
      <td className="text-center">
        <input type="checkbox" name="" id="" />
      </td>
      <td className=" ">{convertStampToDate(pdf.created_at)}</td>
      <td>
        {pdf.id == currentPdf.id ? (
          <p className="text-orange">Current request</p>
        ) : (
          ""
        )}
      </td>
      <td className="text-center">
        <PrimaryButton text={"View"} onClick={viewPdf} />
      </td>
      <td className="text-center">
        <EditPdfModal
          show={showModal}
          handleClose={handleClose}
          handleShow={handleShow}
          handleEdit={editPdf}
        />
      </td>
    </tr>
  );
};

export default PdfRow;
