import css from "./StaffDashboard.module.css";
import React, { useState } from 'react';

const VerificationRequestTable = () => {
    const [verificationRequests, setVerificationRequests] = useState([
      { id: 1, firstName: 'John', lastName: 'Doe', reviewStatus: 'Yes' },
      { id: 2, firstName: 'Jimi', lastName: 'Hendrix', reviewStatus: 'No' },
      { id: 3, firstName: 'Eddie', lastName: 'Van Halen', reviewStatus: 'No' },
      { id: 4, firstName: 'Chad', lastName: 'Smith', reviewStatus: 'Yes' },
    ]);
    
    const handleView = (id) => {
      console.log('View request:', id);
    };

    return (
      <table className="table table-responsive-lg">
        <thead>
          <tr className={css.table_head}>
            <th className={css.col}>ID</th>
            <th className={css.col}>First Name</th>
            <th className={css.col}>Last Name</th>
            <th className={css.col}>Reviewed</th>
            <th className={css.col}> </th>
          </tr>
        </thead>
        <tbody>
          {verificationRequests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.firstName}</td>
              <td>{request.lastName}</td>
              <td>
                <div
                    className={
                    request.reviewStatus === 'Yes'
                        ? `${css.reviewStatusYes}`
                        : `${css.reviewStatusNo}`
                    }
                >
                    {request.reviewStatus}
                </div>
              </td>
              <td>
                <div className={css.btncont}>
                <a href="" className={css.viewBtn} onClick={() => handleView(request.id)}>View</a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default VerificationRequestTable;
