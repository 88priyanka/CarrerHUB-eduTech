import '../styleSheets/carrerExp.css'
import { Link } from 'react-router-dom';

const CareerCourses = ({careerData , loading,crtCarrer,setUrl,setCarrer,url}) => {

  const videoUrlChanged = (career) => {
    setCarrer(career);
    setUrl(career.link); // Use `career.link` directly
  };
  const carrerpathset = () => {
    setCarrer(crtCarrer)
    console.log(crtCarrer)
  }

  return (
    <div className="career-expose" id='career-expose'>
      <div className="career-courses" id='career-courses'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {careerData.map((career, index) => (
              <div key={index} className="career" onClick={() => videoUrlChanged(career)}>
                <h3>{career.career}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="career-explain" id='career-explain'>
        <h1>{crtCarrer.career}</h1>
        {url && (
          <iframe
            src={url}
            width="900px"
            height="500px"
            title="Career Video"
          />
        )}
        <h3>Overview</h3>
        <p className='description'>&ensp;&ensp;&ensp;&ensp;&ensp;{crtCarrer.description}</p>
        <Link to="/learnhub" className='path-set' onClick={carrerpathset}>Get Path</Link>
      </div>
    </div>
  );
};

export default CareerCourses;
