import "../styles/projects.css";
import Project from "./project";

function Projects() {
    return (
        <div className="projectsParent">
            <div className="prTitle">
                <img src={require("../images/leetcode.png")} alt="Education" className="edImg"/>
                <h3>Projects</h3>
            </div>
            <Project 
                name="Second Rodeo" 
                description="One of the largest problems in rodeo is beating the luck of the draw. Every contestant and stock contractor want to know each animals
                    habits and tendencies, but this all done through word of mouth. Second Rodeo is a platform that allows stock contractors and secretaries 
                    to input data on stock. This data is then available to contestants to view. This allows contestants to make more informed decisions on
                    their game plan. "
                stack="Python | MERN"
                items={
                    ["Standalone application for contractors and secretaries written in Python", 
                    "Web application with MERN stack and has all functionalites of standalone application", 
                    "Both applications utilize RESTful API calls to MongoDB"]}        
            />
            <Project 
                name="Studdy Buddy" 
                description="I have always had trouble focusing on my studies. It is very easy for me and others to get distracted while studying. 
                    With that being said I wanted to utilize facial recognition to help me track my focus and study habits, so I created Studdy Buddy.
                    Studdy Buddy has a web application and a standalone application to help people track their focus and improve their study habits."
                stack="Python | MERN"
                items={
                    ["Standalone application utilizes OpenCV in Python to track ones focus", 
                    "Web application uses the face-api.js library to track focus", 
                    "Web application uses a RESTful API to log data to MongoDB, and let users view their data"]}        
            />
            <Project 
                name="Spyware" 
                description="
                        I have always had an interest in cybersecurity and wanted to learn more about how people develop malicious software, so I created a
                        spyware. This spyware utilizes the cloud to upload keylogs and screen recordings. I am currently working on extending the compatibility
                        to MacOS, and implementing a packet sniffer." 
                stack="Python"
                items={
                    ["Utilizes Google Drive API to upload keylogs and screen recordings", 
                    "Uses threads to run keylogger and screen recorder simultaneously", 
                    "OpenCV is used to record screen of the user"]}        
            />
            <Project 
                name="Drone Path Planning" 
                description="
                        After taking Cyber-Aerial Computing, it became clear to me that drones are going to change our society in many ways in the coming years. 
                        This course touched on drone ethics, drone security, and drone path planning. Drone path planning stuck out to me the most, so I decided
                        to create a program that let users enter restricted areas and find the shortest path to their destination navigating around these areas." 
                stack="MatLab"
                items={
                    ["Utilizes 2 different drone mobility models", 
                    "Uses graph theory to find shortest path in 3D space", 
                    "Plots drone path and restricted areas in 3D space"]}        
            />
        </div>
    );
}

export default Projects;