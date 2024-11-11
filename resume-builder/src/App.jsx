import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import CV from "./components/CV";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  //contact
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");
  const [phoneNum, setphoneNum] = useState("Phone number");
  //education
  const [school, setSchool] = useState("School");
  const [studyTitle, setStudyTitle] = useState("Title of study");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  //experience
  const [companyName, setCompanyName] = useState("Company Name");
  const [positionTitle, setPositionTitle] = useState("Position Title");
  const [resposibilities, setResposibilities] = useState("Resposibilities");
  const [startDateExperience, setStartDateExperience] = useState(null);
  const [endDateExperience, setEndDateExperience] = useState(null);

  // Contact
  const setNameChange = (value) => {
    setName(value);
  };

  const setEmailChange = (value) => {
    setEmail(value);
  };

  const setphoneNumChange = (value) => {
    setphoneNum(value);
  };

  //Education
  const setSchoolChange = (value) => {
    setSchool(value);
  };

  const setStudyTitleChange = (value) => {
    setStudyTitle(value);
  };

  const setStartDateChange = (value) => {
    setStartDate(value);
  };

  const setEndDateChange = (value) => {
    setEndDate(value);
  };

  //Experience
  const setCompanyNameChange = (value) => {
    setCompanyName(value);
  };

  const setPositionTitleChnage = (value) => {
    setPositionTitle(value);
  };

  const setResposibilitiesChange = (value) => {
    setResposibilities(value);
  };

  const setStartDateExperienceChange = (value) => {
    setStartDateExperience(value);
  };

  const setEndDateExperienceChange = (value) => {
    setEndDateExperience(value);
  };

  return (
    <>
      <nav className="sticky top-0 bg-indigo-950 text-white text-center ">
        <h1>CV Application</h1>
      </nav>
      <main className=" h-screen bg-gray-400 grid grid-cols-2 gap-20 ">
        <div className="bg-purple-400">
          <Contact
            nameStateFn={setNameChange}
            emailStateFn={setEmailChange}
            phoneNumStateFn={setphoneNumChange}
          />
          <Education
            schoolStateFn={setSchoolChange}
            studyTitleStateFn={setStudyTitleChange}
            startDateStateFn={setStartDateChange}
            endDateStateFn={setEndDateChange}
          />
          <Experience
            companyNameStateFn={setCompanyNameChange}
            positionTitleStateFn={setPositionTitleChnage}
            resposibilitiesStateFn={setResposibilitiesChange}
            startDateExperienceStateFn={setStartDateExperienceChange}
            endDateExperienceStateFn={setEndDateExperienceChange}
          />
        </div>
        <div className="bg-teal-400">
          <CV
            name={name}
            email={email}
            phoneNum={phoneNum}
            school={school}
            studyTitle={studyTitle}
            startDate={startDate}
            endDate={endDate}
            companyName={companyName}
            positionTitle={positionTitle}
            resposibilities={resposibilities}
            startDateExperience={startDateExperience}
            endDateExperience={endDateExperience}
          />
        </div>
      </main>
      <footer className="sticky bottom-0 bg-indigo-950 text-white text-center">
        © Odin Project
      </footer>
    </>
  );
}

export default App;
