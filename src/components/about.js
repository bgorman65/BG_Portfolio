import "../styles/about.css";

function About() {
  return (
    <div className="parentAbout">
        <div className="aboutHeader">
            <img src={require("../images/bolt.png")} alt="About Image" className="sumImg"/>
            <h3 className="aboutTitle">About Me</h3>
        </div>
        <div className="aboutText">
            <p className="introTxt">
                Hi, I'm Barry Gorman. I am currently a senior at Texas Tech University studying Computer Science.
                I have been taking CS classes since my freshman year of high school, and I am very passionate about the field. I have experience in many 
                different programming languages, such as Python, C, C++, JavaScript, and MatLab. I have also worked with many different frameworks and 
                libraries, such as React, Node.js, and Express. I am always looking to learn more and expand my knowledge in the field.
            </p>
            <p className="currentTxt">
                I am currently an undergraduate teaching assistant at Texas Tech University assigned to Programming Principles, taught in C. This position 
                entails helping students with their assignments, grading, holding office hours, and helping instruct the lab portion of the course. 
                I have interests in the fields of software development, cybersecurity, cyber-aerial computing, and I have recently started to touch on 
                web development.
            </p>
        </div>
      
    </div>
  );
}

export default About;