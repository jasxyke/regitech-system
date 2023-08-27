import { useEffect, useState } from "react";
import axiosClient from "../utils/axios";

const useStaffCrud = () => {
  const [staffs, setStaffs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get("/users")
      .then((res) => {
        console.log(res);
        setStaffs(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        //handleError()
      });
  }, []);

  const onAddStaff = async (user, onError, onSuccess) => {
    try {
      setLoading(true);
      console.log("adding staff:");
      console.log(user);
      const res = await axiosClient.post("/users", user);
      let staff = res.data;
      let newStaffs = [...staffs, staff];
      setStaffs(newStaffs);
      console.log(newStaffs);
      onError("");
      onSuccess(true);
    } catch (error) {
      console.log(error);
      onError(error?.response?.data?.message);
      onSuccess(false);
    }
    setLoading(false);
  };

  const ondeleteStaff = async (staffId, onResponse) => {
    try {
      setLoading(true);
      const res = await axiosClient.delete("/users/" + staffId, staffId);
      let response = res.data.message;
      onResponse(response);
      console.log(res);
      setStaffs(staffs.filter((obj) => obj.id !== staffId));
    } catch (error) {
      console.log(error);
      onResponse(error?.response?.data?.message);
    }
    setLoading(false);
  };

  const onEditStaff = async (editedStaff, onError, onSuccess) => {
    try {
      setLoading(true);
      console.log("edited staff:");
      console.log(editedStaff);
      const res = await axiosClient.put(
        "/users/" + editedStaff.id,
        editedStaff
      );
      let updatedStaff = res.data;
      console.log("from backend: ");
      console.log(updatedStaff);
      let updatedStaffs = staffs.map((staff) =>
        staff.id == updatedStaff.id ? updatedStaff : staff
      );
      console.log(updatedStaffs);
      setStaffs(updatedStaffs);
      onSuccess(true);
    } catch (error) {
      console.log(error);
      onError(error?.response?.data?.message);
      onSuccess(false);
    }
    setLoading(false);
  };

  const onSelectStaff = (id) => {
    let staff = staffs.find((staff) => {
      return staff.id == id;
    });
    console.log("staff:");
    console.log(staff);
    console.log("staff id: " + id);
    setSelectedStaff(staff);
  };

  return {
    staffs,
    onAddStaff,
    loading,
    ondeleteStaff,
    onEditStaff,
    selectedStaff,
    onSelectStaff,
  };
};

export default useStaffCrud;
