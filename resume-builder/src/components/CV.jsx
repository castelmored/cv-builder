function CV({
  name,
  email,
  phoneNum,
  school,
  studyTitle,
  startDate,
  endDate,
  companyName,
  positionTitle,
  resposibilities,
  startDateExperience,
  endDateExperience,
}) {
  return (
    <>
      <div>
        <p className="text-center">{name}</p>
        <p>{email}</p>
        <p>{phoneNum}</p>
      </div>
      <hr></hr>
      <div>
        <p>{school}</p>
        <p>{studyTitle}</p>
        <p>
          {startDate ? startDate.toLocaleDateString() : "Start date"} {" - "}
          {endDate ? endDate.toLocaleDateString() : "End date"}
        </p>
      </div>
      <hr></hr>
      <div>
        <p>{companyName}</p>
        <p>{positionTitle}</p>
        <p>{resposibilities}</p>
        <p>
          {startDateExperience
            ? startDateExperience.toLocaleDateString()
            : "Start date"}{" "}
          {" - "}
          {endDateExperience
            ? endDateExperience.toLocaleDateString()
            : "End date"}
        </p>
      </div>
    </>
  );
}

export default CV;
