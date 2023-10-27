/* eslint-disable no-unused-vars */
import React from "react";
import Animate from "./AnimateComponent";
const Education = () => {
  return (
    <>
      <section id="education">
        <div className="education-container">
          <h2>Education</h2>

          <Animate>
            <div className="bachelors-section">
              <div className="edu-section-box">
                <div className="grade-title">
                  <h3>Bachelors of Technology</h3>
                  <span className="specialisation">
                    Electronics and Communication Engineering
                  </span>
                </div>
                <div className="grade">9.05 / 10 CGPA</div>
                <div className="grad-span-years">2022 - 2026</div>

                <div className="institution-location">
                  {" "}
                  Andhra Pradesh, India
                </div>
              </div>
              <Animate>
                <div className="coursework">
                  <ul id="courses">
                    <h2>CourseWork</h2>
                    <li className="course-item">
                      Data Structures and Algorithms
                    </li>
                    <li className="course-item">
                      Object Oriented Programming{" "}
                    </li>
                    <li className="course-item">Version Control using Git</li>
                    <li className="course-item">
                      CS50 (introduction to Computer Science)
                    </li>
                  </ul>
                </div>
              </Animate>
            </div>

            <div className="edu-section-box">
              <div className="grade-title">
                <h3>Higher secondary Education</h3>
                <span className="specialisation">
                  Mathematics and General Sciences (PCM)
                </span>
              </div>
              <div className="grade">
                <div className="percentage">93.4 % / 100</div>
              </div>
              <div className="grad-span-years">2020 - 2022</div>
              <div className="institution-location">Andhra Pradesh, India</div>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
};

export default Education;
