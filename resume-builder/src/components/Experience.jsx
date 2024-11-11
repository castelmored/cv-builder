import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Experience({
  companyNameStateFn,
  positionTitleStateFn,
  resposibilitiesStateFn,
  startDateExperienceStateFn,
  endDateExperienceStateFn,
}) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [resposibilities, setResposibilities] = useState("");
  const [startDateExperience, setStartDateExperience] = useState(null);
  const [endDateExperience, setEndDateExperience] = useState(null);

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handlePositionTitleChange = (e) => {
    setPositionTitle(e.target.value);
  };

  const handleResposibilitiesChange = (e) => {
    setResposibilities(e.target.value);
  };

  const handleStartDateExperienceChange = (date) => {
    setStartDateExperience(date);
  };

  const handleEndDateExperienceChange = (date) => {
    setEndDateExperience(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    companyNameStateFn(companyName);
    positionTitleStateFn(positionTitle);
    resposibilitiesStateFn(resposibilities);
    startDateExperienceStateFn(startDateExperience);
    endDateExperienceStateFn(endDateExperience);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" grid grid-cols-1 gap-0 border-2 border-black rounded-md p-2"
      >
        <legend>Experience</legend>
        <label>Company name: </label>
        <input
          key="company"
          type="text"
          value={companyName}
          require
          onChange={handleCompanyNameChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label>Position title: </label>
        <input
          key="position"
          type="text"
          value={positionTitle}
          require
          onChange={handlePositionTitleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label>
          Resposibilities:
          <textarea
            name="postContent"
            rows={4}
            cols={40}
            value={resposibilities}
            require
            onChange={handleResposibilitiesChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label>Start date: </label>
        <div>
          <DatePicker
            selected={startDateExperience}
            onChange={handleStartDateExperienceChange}
          />
        </div>
        <label>End date: </label>
        <div>
          <DatePicker
            selected={endDateExperience}
            onChange={handleEndDateExperienceChange}
          />
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Experience;
