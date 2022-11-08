import { useRef, useState } from "react";

function FormUncontrolled() {
  const formEl = useRef(null);
  const [emailMsg, setEmailMsg] = useState("");
  function test(e) {
    e.preventDefault();

    if (formEl.current.elements.email.value.includes(".")) {
      post({
        name: formEl.current.elements.name.value,
        email: formEl.current.elements.email.value,
        age: formEl.current.elements.age.value,
      });
    } else {
      setEmailMsg("Please provide a valid e-mail");
    }
  }
  return (
    <form ref={formEl} onSubmit={test}>
      <label>
        E-mail
        <input type="email" name="email" required />
      </label>
      <p>{emailMsg}</p>
      <button>Submit</button>
    </form>
  );
}

export default FormUncontrolled;
