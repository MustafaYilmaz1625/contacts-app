import { useState, useEffect } from "react";

const initialFormValue = { fullname: "", phone_number: "" };

function Form({ contacts, setContacts }) {
  const [form, setForm] = useState(initialFormValue);

  useEffect(() => {
    setForm(initialFormValue);
  }, [contacts]);


  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    setContacts([...contacts, form]);

    setForm({ fullname: "", phone_number: "" });
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          className="form-control"
          value={form.fullname}
          placeholder="Full Name"
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          type="number"
          className="mt-1 form-control"
          name="phone_number"
          value={form.phone_number}
          placeholder="Phone Number"
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button onClick={onSubmit}>Add</button>
      </div>
    </form>
  );
}

export default Form;
