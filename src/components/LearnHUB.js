import React from 'react'

const LearnHUB = ({crtCarrer}) => {
    console.log(crtCarrer);
  return (
    <div className="career-expose" id='career-expose'>
      <div className="career-courses" id='career-courses'>
        
        <div>
            {crtCarrer.courses.map((career, index) => (
              <div key={index} className="career">
                <h3>{career}</h3>
              </div>
            ))}
        </div>
      </div>

      <div className="career-explain" id='career-explain'>
        <h1>{crtCarrer.career}</h1>
        <h3>Overview</h3> 
      </div>
    </div>
  );
};

export default LearnHUB