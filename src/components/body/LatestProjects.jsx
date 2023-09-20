import { useState } from "react";

const LatestProjects = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    setDropDown(!dropDown);
  };

  return <h2 onClick={handleClick}>Latest Projects</h2>;
};

export default LatestProjects;
