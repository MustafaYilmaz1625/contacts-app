import { useState, useEffect } from "react";
import "./styles.css";
// import List from "./List";
import Form from "./Form";
import List from "./list";

function Contacts() {
    const [contacts, setContacts] = useState([
        {fullname: "mustafa yılmaz", phone_number: "555353535" }
    ]);

    // useEffect(()=>{
    //   console.log(contacts);
    // },[contacts])

    return (
        <div id='container' className='rounded-3'>
            <h1 className='text-center fw-bolder text-danger'>Contacts</h1>
            <List contacts={contacts} setContacts={setContacts} />
            <Form setContacts={setContacts} contacts={contacts} />
            
        </div>
    );
}

export default Contacts;