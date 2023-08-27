import React from "react";
import { convertStampToDate } from "../../../utils/datesHandler";
import Checkbox from "../../../components/forms/Checkbox";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import SecondaryButton from "../../../components/ui/SecondaryButton";

const PdfRow = ({ pdf, currentPdf, changePDF }) => {
  const viewPdf = () => {
    changePDF(pdf.url);
  };

  const editPdf = () => {};
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
        <SecondaryButton text={"Edit"} onClick={editPdf} />
      </td>
    </tr>
  );
};

export default PdfRow;
