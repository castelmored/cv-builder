import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Education({
  schoolStateFn,
  studyTitleStateFn,
  startDateStateFn,
  endDateStateFn,
}) {
  const [school, setSchool] = useState("");
  const [studyTitle, setStudyTitle] = useState("");

  const [startDate, setstartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  const handlestudyTitleChange = (e) => {
    setStudyTitle(e.target.value);
  };

  const handlesetStartDateChange = (date) => {
    setstartDate(date);
  };

  const handlesetEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    schoolStateFn(school);
    studyTitleStateFn(studyTitle);
    startDateStateFn(startDate);
    endDateStateFn(endDate);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" grid grid-cols-1 gap-0 border-2 border-black rounded-md p-2"
      >
        <legend>Education Info</legend>
        <label>School: </label>
        <input
          key="school"
          type="text"
          value={school}
          require
          onChange={handleSchoolChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label>Title of Study: </label>
        <input
          key="studyTitle"
          type="text"
          value={studyTitle}
          require
          onChange={handlestudyTitleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label>Start date: </label>
        <div>
          <DatePicker
            selected={startDate}
            onChange={handlesetStartDateChange}
          />
        </div>
        <label>End date: </label>
        <div>
          <DatePicker selected={endDate} onChange={handlesetEndDateChange} />
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

export default Education;
