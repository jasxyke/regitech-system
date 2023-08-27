import React from "react";
import Popover from "react-bootstrap/Popover";
import { convertStampToDate } from "../../utils/datesHandler";

const LastEditPopover = ({ staffName, lastVerifiedAt }) => {
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Last verified</Popover.Header>
      <Popover.Body>
        <p>
          <b>Last verified by:</b> {staffName}
        </p>
        <p>
          <b>Last verified at:</b> {convertStampToDate(lastVerifiedAt)}
        </p>
      </Popover.Body>
    </Popover>
  );
};

export default LastEditPopover;
