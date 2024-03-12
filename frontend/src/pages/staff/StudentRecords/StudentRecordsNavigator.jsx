import { useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import BackButton from "../../../components/ui/BackButton";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import { courses, years } from "../../../data/constants";
import useStudents from "../../../hooks/useStudents";
import StaffStyles from "../StaffDashboard/StaffDashboard.module.css";
import NavigationItem from "./NavigationItem";
import NavigationTable from "./NavigationTable";
import StudentsRecordTable from "./StudentRecordsTable";

const StudentRecordsNavigator = () => {
  const studentsHook = useStudents();
  const students = studentsHook.students;
  const handleView = studentsHook.viewStudent;

  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState("");

  const [displayedList, setDisplayedList] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [index, setIndex] = useState(0);

  const handleSearch = () => {
    if (searchText === "") {
      getSelectedStudents();
    } else {
      setIndex(2);
      studentsHook.searchStudentByName(searchText);
    }
  };

  const getSelectedStudents = () => {
    studentsHook.getStudentBySelected(selectedYear, selectedCourse);
  };

  const navigateForward = (selected) => {
    if (index === 0) {
      setSelectedYear(selected);
    } else if (index === 1) {
      setSelectedCourse(selected);
    } else if (index === 2) {
      getSelectedStudents();
    } else {
      console.log("MERONG MALI!!!");
    }
    setIndex(index + 1);
  };

  // TODO: CREATE MO NA YUNG ENDPOINT FOR
  //       SELECTING BY YEAR ANG COURSE SA BACKEND

  const navigateBack = () => {
    if (index === 2) {
      setSelectedCourse("");
    } else if (index === 1) {
      setSelectedYear(0);
    } else {
      console.log("MERONG MALI!!!");
    }
    setIndex(index - 1);
  };

  useEffect(() => {
    if (index === 0) {
      const yearItems = years.map((year) => {
        return (
          <NavigationItem
            key={year}
            text={year}
            onClick={() => {
              navigateForward(year);
            }}
          />
        );
      });
      setDisplayedList(<NavigationTable items={yearItems} heading={"Years"} />);
    } else if (index === 1) {
      const courseItems = courses.map((course) => {
        return (
          <NavigationItem
            key={course.id}
            text={course.name}
            onClick={() => {
              navigateForward(course.id);
            }}
          />
        );
      });
      setDisplayedList(
        <NavigationTable items={courseItems} heading={"Courses"} />
      );
    } else if (index === 2) {
      setDisplayedList(
        <StudentsRecordTable
          students={students}
          loading={studentsHook.loading}
          handleView={handleView}
          pagination={studentsHook.pagination}
          changePage={studentsHook.changePage}
        />
      );
      getSelectedStudents();
    } else {
      setDisplayedList(<p className="h1">ERROR TAENA MO</p>);
    }
  }, [index]);

  return (
    <div className={"mx-auto " + StaffStyles.staff_table_container}>
      <div className={"mt-5 " + StaffStyles.tableOptions}>
        <h4 className="me-auto">
          <strong className={StaffStyles.table_header}>
            {" "}
            Student Records{" "}
          </strong>
        </h4>
        <PrimaryButton text={<FiRefreshCw />} onClick={studentsHook} />

        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value === "") {
              getSelectedStudents();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <SecondaryButton text={"Search"} onClick={handleSearch} />
      </div>
      <div>{displayedList}</div>
      <BackButton
        text={"Go back"}
        handleClick={navigateBack}
        disabled={index === 0}
      />
    </div>
  );
};

export default StudentRecordsNavigator;
