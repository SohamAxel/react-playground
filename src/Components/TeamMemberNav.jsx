import React from "react";
import { Link } from "react-router-dom";

const TeamMemberNav = () => {
  return (
    <nav>
      {/* If "/" is prefixed to the link this acts as an absolute path, i.e. for
      example // "/team/pam" - https://example.url/team/pam // if "/" is not
      prefixed to the link this acts as an relative path, i.e. // it will get
      appended after the the current route from where the component is called. */}
      <Link to="/team/pam">Pam</Link>
      {/* In router this component is a child of /team route, hence the following
      link will take user to /team/pam */}
      <Link to="pam">Pam</Link>
      <Link to="jim">Jim</Link>
      <Link to="..">..Route</Link>
      <Link to=".." relative="path">
        ..Path
      </Link>
    </nav>
  );
};

export default TeamMemberNav;
