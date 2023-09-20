import { useState } from 'react';
import projectItems from '../items/projectItems';

const LatestProjects = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    setDropDown(!dropDown);
  };

  const latest = projectItems.main[0];
  const mini = projectItems.mini[0];

  if (!dropDown) {
    return <h2 onClick={handleClick}>Latest Projects</h2>;
  } else {
    return (
      <>
        <h2 onClick={handleClick}>Latest Projects</h2>
        <div className="project-container">
          <h1>{latest.title}</h1>
          <a href={latest.link}>
            <img className="project-pic" src={latest.pic} />
          </a>
          <div style={{ marginTop: '2rem' }}>{latest.summ}</div>
        </div>
        <div className="project-container">
          <h1>{mini.title}</h1>
          <a href={mini.link}>
            <img className="project-pic" src={mini.pic} />
          </a>
          <div style={{ marginTop: '2rem' }}>{mini.focus}</div>
        </div>
      </>
    );
  }
};

export default LatestProjects;
