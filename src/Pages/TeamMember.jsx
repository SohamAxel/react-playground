import React from "react";
import { useParams } from "react-router-dom";

const TeamMember = ({ name }) => {
  const { memberName } = useParams();
  return <div>TeamMember - {memberName}</div>;
};

export default TeamMember;
