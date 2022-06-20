import React, { useState, useEffect } from "react";
import "./styles.css";
import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Mehmet", phone_number: "05343445566" },
    { fullname: "Mustafa", phone_number: "02123335456" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default Contacts;
