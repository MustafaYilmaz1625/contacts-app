import React, { useState } from "react";

function List({ contacts, setContacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  const deleteHandler = (index) => {
    contacts.splice(index, 1);
    setContacts([...contacts]);
  };

  return (
    <div>
      <input
        className="form-control"
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <div className="lists">
        <ul className="list">
          {filtered.map((e, i) => (
            <li key={i} className=" container fw-bold">
              <div className="row">
                <div className="col-5 firstName">
                  <span>
                    <span className="text-danger">{i + 1}. </span>
                    {e.fullname}
                  </span>
                </div>
                <div className="col-5 text-end">
                  <span>{e.phone_number}</span>
                </div>
                <div className="col-2 text-end">
                  <button
                    className="btnDelete px-2 rounded-3"
                    onClick={() => deleteHandler(i)}
                  >
                    <i className="bi bi-dash-circle"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p>Total Contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
