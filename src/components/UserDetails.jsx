import React from "react";
import PropTypes, { any } from "prop-types";

const UserDetails = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age in 10yrs: {age + 10}</p>
    </div>
  );
};

export default UserDetails;

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

// any - any
// node - any renderable
// element - jsx component
// object - any object
// shape({ address: PropTypes.string, pin: PropTypes.number }) - accept object of defined shape
// array - any array
// arrayOf(PropTypes.string) - array of strings
// arrayOf(PropType.oneOfType(PropTypes.string, PropTypes.number)) - array of either string or number
// exact({ address: PropTypes.string, pin: PropTypes.number }) - only allow object with address and pin attribute, if any other property is there it throws error
// PropType.oneOfType(["A", "B"]) - allows A or B
