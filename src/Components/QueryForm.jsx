import React, { useEffect, useRef } from "react";
import { Form } from "react-router-dom";

const QueryForm = ({ users, q, userId }) => {
  const selectRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = q;
    if (userId) {
      selectRef.current.value = userId;
    }
  }, [q, userId]);

  return (
    <>
      <Form method="get" action="/posts" className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" ref={inputRef} />
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select type="search" name="userId" id="userId" ref={selectRef}>
              <option value="">Any</option>
              {users.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <button className="btn">Filter</button>
        </div>
      </Form>
    </>
  );
};

export default QueryForm;
