import { useState } from "react";

function Contact({ nameStateFn, emailStateFn, phoneNumStateFn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setphoneNum] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlephoneNumChange = (e) => {
    setphoneNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nameStateFn(name);
    emailStateFn(email);
    phoneNumStateFn(phoneNum);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" grid grid-cols-1 gap-0 border-2 border-black rounded-md p-2"
      >
        <legend>Contact info</legend>
        <label>Name: </label>
        <input
          key="name"
          type="text"
          value={name}
          required
          onChange={handleNameChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label>Email: </label>
        <input
          key="email"
          type="text"
          value={email}
          require
          onChange={handleEmailChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label>Phone number: </label>
        <input
          key="phoneNum"
          type="text"
          value={phoneNum}
          require
          onChange={handlephoneNumChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Contact;
