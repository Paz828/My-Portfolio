import { useState } from "react";

const AboutMe = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    setDropDown(!dropDown);
  };
  if (!dropDown) {
    return <h2 onClick={handleClick}>About Me</h2>;
  } else {
    return (
      <>
        <h2 onClick={handleClick}>About Me</h2>
        <div>
          <p>
            Welcome to my website! I'm Dorion, a dedicated professional with a
            background of eight years in the military. Having recently
            transitioned into civilian life, I've channeled my passion for
            problem-solving and adaptability into the world of technology. I
            specialize in crafting full-stack applications and possess expertise
            in creating robust authorization and authentication systems. My
            military experience has honed my discipline, attention to detail,
            and resilience, which I now apply to every project I undertake. I'm
            constantly enthusiastic about embracing new technologies and the
            ever-evolving world of development. Join me on this exciting journey
            of innovation and discovery.
          </p>
        </div>
      </>
    );
  }
};

export default AboutMe;
