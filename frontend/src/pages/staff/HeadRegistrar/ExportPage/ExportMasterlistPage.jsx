import { useState } from "react";
import SectionHeader from "../../../../components/SectionHeader";
import Checkbox from "../../../../components/forms/Checkbox";
import BackButton from "../../../../components/ui/BackButton";
import PrimaryButton from "../../../../components/ui/PrimaryButton";
import SectionContainer from "../../../../components/ui/SectionContainer";
import { courses, documentTypes, years } from "../../../../data/constants";
import useCheckboxInput from "../../../../hooks/useCheckboxInput";
import useExportReports from "../../../../hooks/useExportReports";
import css from "./ExpportMasterlist.module.css";
import ResponseModal from "../../../../components/ResponseModal";
import SecondaryButton from "../../../../components/ui/SecondaryButton";
import { Spinner } from "react-bootstrap";

const studentInfos = [
  { display: "Last name", value: "lastname" },
  { display: "First name", value: "firstname" },
  { display: "Middle name", value: "midname" },
];

const courseIds = courses.map((course) => course["id"]);
const studentColumns = studentInfos.map((column) => column.value);
const documentTypesList = documentTypes.map((document) => document.name);

const ExportMasterlistPage = () => {
  const yearsList = useCheckboxInput([]);
  const coursesList = useCheckboxInput([]);
  const studentInfoList = useCheckboxInput([]);
  const documentsList = useCheckboxInput([]);

  const [allYears, setAllYears] = useState(false);
  const [allDocuments, setAllDocuments] = useState(false);
  const [allCourses, setAllCourses] = useState(false);

  const [response, setResponse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setResponse("");
  };
  const handleSucces = (message) => {
    setResponse(message);
    openModal();
  };

  const handleError = (message) => {
    setResponse(message);
    openModal();
  };

  const exportHook = useExportReports(handleSucces, handleError);
  const exportMasterlist = () => {
    if (
      yearsList.values.length === 0 ||
      coursesList.values.length === 0 ||
      studentInfoList.values.length === 0 ||
      documentsList.values.length === 0
    ) {
      setResponse("Please select at least one for each category.");
      openModal();
      return;
    }
    exportHook.downloadMasterlist(
      yearsList.values,
      coursesList.values,
      studentInfoList.values,
      documentsList.values
    );

    setResponse(
      <div className="d-flex justify-content-center align-content-center">
        <Spinner animation="border" />
      </div>
    );
    openModal();
  };

  const clearForm = () => {
    yearsList.updateValues([]);
    coursesList.updateValues([]);
    studentInfoList.updateValues([]);
    documentsList.updateValues([]);
    setAllCourses(false);
    setAllDocuments(false);
    setAllYears(false);
  };

  const yearCheckboxes = years.map((year) => (
    <Checkbox
      checked={yearsList.includes(year)}
      label={year}
      id={year}
      handleChange={() => {
        if (yearsList.includes(year)) {
          yearsList.remove(year);
        } else {
          yearsList.add(year);
        }
        console.log("years: ");
        console.log(yearsList.values);
      }}
    />
  ));

  const courseCheckboxes = courses.map((course) => (
    <Checkbox
      checked={coursesList.includes(course.id)}
      label={course.name}
      id={course.id}
      handleChange={() => {
        if (coursesList.includes(course.id)) {
          coursesList.remove(course.id);
        } else {
          coursesList.add(course.id);
        }
        console.log("courses: ");
        console.log(coursesList.values);
      }}
    />
  ));

  const studentInfoCheckboxes = studentInfos.map((info) => (
    <Checkbox
      checked={studentInfoList.includes(info.value)}
      label={info.display}
      id={info.value}
      handleChange={() => {
        if (studentInfoList.includes(info.value)) {
          studentInfoList.remove(info.value);
        } else {
          studentInfoList.add(info.value);
        }
        console.log("infos: ");
        console.log(coursesList.values);
      }}
    />
  ));

  const documentsCheckboxes = documentTypes.map((document) => (
    <Checkbox
      checked={documentsList.includes(document.name)}
      label={document.name}
      id={document.name}
      handleChange={() => {
        if (documentsList.includes(document.name)) {
          documentsList.remove(document.name);
        } else {
          documentsList.add(document.name);
        }
        console.log("documents: ");
        console.log(documentsList.values);
      }}
    />
  ));

  return (
    <>
      <ResponseModal
        response={response}
        show={showModal}
        handleClose={closeModal}
        headerText={"Exporting documents report"}
      />
      <BackButton text={"Back to Head Registrar page"} />
      <div className="mt-5"></div>
      <SectionHeader text={"Export Documents Report"} block={false} />
      <SectionContainer>
        <SectionHeader text={"Year admitted"} block={true} />
        <div className={"p-3 " + css.yearsContainer}>
          <Checkbox
            checked={allYears}
            label={"All"}
            id={"allYears"}
            handleChange={() => {
              let isSelected = !allYears;
              setAllYears(isSelected);
              if (isSelected) {
                yearsList.updateValues(years);
              } else {
                yearsList.updateValues([]);
              }
            }}
          />
          {yearCheckboxes}
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader text={"Course/Program"} block={true} />
        <div className={"p-3 " + css.coursesContainer}>
          <Checkbox
            checked={allCourses}
            label={"Select all"}
            id={"allCourses"}
            handleChange={() => {
              let isSelected = !allCourses;
              setAllCourses(isSelected);
              if (isSelected) {
                coursesList.updateValues(courseIds);
              } else {
                coursesList.updateValues([]);
              }
            }}
          />
          {courseCheckboxes}
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader text={"Student info"} block={true} />
        <div className={"p-3 " + css.yearsContainer}>
          {studentInfoCheckboxes}
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader text={"Documents"} block={true} />
        <div className={"p-3 " + css.coursesContainer}>
          <Checkbox
            checked={allDocuments}
            label={"Select all"}
            id={"allDocuments"}
            handleChange={() => {
              let isSelected = !allDocuments;
              setAllDocuments(isSelected);
              if (isSelected) {
                documentsList.updateValues(documentTypesList);
              } else {
                documentsList.updateValues([]);
              }
            }}
          />
          {documentsCheckboxes}
        </div>
      </SectionContainer>
      <div className={"mt-5 mb-5 " + css.btnsContainer}>
        <PrimaryButton text={"Export masterlist"} onClick={exportMasterlist} />
        <SecondaryButton text={"Clear"} onClick={clearForm} />
      </div>
    </>
  );
};

export default ExportMasterlistPage;
