import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((e, i) => (
          <li key={i}>
            <span>{e.fullname}</span>
            <span>{e.phone_number}</span>
          </li>
        ))}
      </ul>

      <p>Total Contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
