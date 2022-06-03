import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div>
      <List contacts={contacts} />
      <Form contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default Contacts;
