import React, { useState } from "react";
import profilePic from './assets/edu.jpg';

function OnlineStore({ onSuccess }) {
  return (
    <div className="class">
      <p className="contentss">
        Online store management system is a website for maintaining and administrating the college store. The language used for this purpose is Python Django.The store is maintained by the admin. Using this website the college students can purchase and the admin can manage the store activities.The customer can book the items early.And also customers can request for unavailable items.
      </p>
      <button className="back-butn" onClick={onSuccess}>Go Back</button>
    </div>
  );
}

function InterfaceDeveloper({ onSuccess }) {
  return (
    <div className="class">
      <p className="contentss">
        This project focuses on developing a user-friendly interface based on user requirements.There is only one module,that is user.Anybody can use this website to create interface ,and also who have no knowledge of coding.This website also provide the corresponding codes in HTML,CSS and Javascript.The technology used here is Artificial Intelligence.
      </p>
      <button className="back-butn" onClick={onSuccess}>Go Back</button>
    </div>
  );
}

function SimpleCalculator({ onSuccess }) {
  return (
    <div className="class">
      <p className="contentss">
        This project is about building a simple calculator with basic arithmetic operations like addition,subtraction,multiplication,division,modular operation.This is a simple project and the operations are performed correctly. This technology is based on ReactJS.
      </p>
      <button className="back-butn" onClick={onSuccess}>Go Back</button>
    </div>
  );
}

function StopWatch({ onSuccess }) {
  return (
    <div className="class">
      <p className="contentss">
        A stopwatch application to keep track of time intervals.The technology used here is ReactJS.This is a simple project.The user can use this in recording something.
      </p>
      <button className="back-butn" onClick={onSuccess}>Go Back</button>
    </div>
  );
}

function DigitalClock({ onSuccess }) {
  return (
    <div className="class">
      <p className="contentss">
        This project is a digital clock displaying the current time.The technology used is ReactJS.The user can simply use this like a clock.
      </p>
      <button className="back-butn" onClick={onSuccess}>Go Back</button>
    </div>
  );
}

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  const renderProject = () => {
    switch (selectedProject) {
      case "OnlineStore":
        return <OnlineStore onSuccess={handleBackClick} />;
      case "InterfaceDeveloper":
        return <InterfaceDeveloper onSuccess={handleBackClick} />;
      case "SimpleCalculator":
        return <SimpleCalculator onSuccess={handleBackClick} />;
      case "StopWatch":
        return <StopWatch onSuccess={handleBackClick} />;
      case "DigitalClock":
        return <DigitalClock onSuccess={handleBackClick} />;
      default:
        return null;
    }
  };

  return (
    <div className="edu">
      {selectedProject ? (
        renderProject()
      ) : (
        <>
          <img className='cover-img' src={profilePic} alt="profile picture" />
          <div className="educationss">
            <h1 className="edu-class">Projects</h1>
            <ul>
              <div className="online-store">
                <li>Online Store Management</li>
                <button className="store" onClick={() => handleProjectClick("OnlineStore")}>View About</button>
              </div>
              <div className="interface">
                <li>Interface Developer</li>
                <button className="store" onClick={() => handleProjectClick("InterfaceDeveloper")}>View About</button>
              </div>
              <div className="calculator">
                <li>Simple Calculator</li>
                <button className="store" onClick={() => handleProjectClick("SimpleCalculator")}>View About</button>
              </div>
              <div className="stopwatch">
                <li>Stop Watch</li>
                <button className="store" onClick={() => handleProjectClick("StopWatch")}>View About</button>
              </div>
              <div className="digital-clock">
                <li>Digital Clock</li>
                <button className="store" onClick={() => handleProjectClick("DigitalClock")}>View About</button>
              </div>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Project;
