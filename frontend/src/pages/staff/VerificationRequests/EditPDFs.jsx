import React, { useEffect, useState } from "react";
import useRequest from "../../../hooks/useRequest";
import PdfRow from "./PdfRow";
import SecondaryButton from "../../../components/ui/SecondaryButton";

const EditPDFs = ({ allPdfs, currentPdf, changePDF }) => {
  const [selectedPdfs, setSelectedPdfs] = useState([{}]);

  const combinePdfs = () => {};
  const requestRows = allPdfs.map((pdf) => (
    <PdfRow
      pdf={pdf}
      key={pdf.id}
      currentPdf={currentPdf}
      changePDF={changePDF}
    ></PdfRow>
  ));

  return (
    <div className="mt-3">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="col-sm-1"></th>
            <th scope="col" className="col-sm-4">
              Date submitted
            </th>
            <th scope="col" className="col-sm-3"></th>
            <th scope="col" className="col-sm-2 text-center"></th>
            <th scope="col" className="col-sm-2 text-center"></th>
          </tr>
        </thead>
        <tbody>{requestRows}</tbody>
      </table>
      <div className="me-auto">
        <SecondaryButton text={"Combine"} onClick={combinePdfs} />
      </div>
    </div>
  );
};

export default EditPDFs;
