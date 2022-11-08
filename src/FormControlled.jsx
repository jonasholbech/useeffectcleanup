import { useState } from "react";
function FormControlled() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(20);
  const [price, setPrice] = useState(0);
  const emailChanged = (e) => {
    setEmail(e.target.value);
  };
  const nameChanged = (e) => {
    setName(e.target.value);
  };
  const ageChanged = (e) => {
    console.log();
    setAge(e.target.value.replace(/\D/g, ""));
  };
  function submit(e) {
    e.preventDefault();
    post({
      name,
      email,
      age,
    });
  }
  return (
    <div>
      <h1>Hi there {name}</h1>
      <p>
        Hey {name}, your personalized price is {age > 25 ? 1234 : 999},-
      </p>
      <form onSubmit={submit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            onChange={nameChanged}
            value={name}
          />
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            required
            disabled={name.length < 3}
            onChange={emailChanged}
            value={email}
          />
        </label>
        <label>
          Age
          <input type="number" name="age" onChange={ageChanged} value={age} />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormControlled;
