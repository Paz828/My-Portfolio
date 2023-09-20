import LatestProjects from './LatestProjects';
import AboutMe from './AboutMe';

const Body = () => {
  return (
    <div id="body-container">
      <h1>Dorion Boesch</h1>
      <img src="https://www.lend360.org/wp-content/uploads/2017/11/blank-headshot.jpg" />
      <AboutMe />
      <LatestProjects />
    </div>
  );
};

export default Body;
