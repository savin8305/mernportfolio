import React, { useEffect } from "react";
import "./Home.css";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import { Projects } from "../../pages/Projects";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, youtubes, skills, about }) => {
  const handleCardHover = () => {
    document.querySelector(".card").classList.add("active");
  };

  // Function to handle card exit
  const handleCardExit = () => {
    document.querySelector(".card").classList.remove("active");
  };

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer ">
        <Typography variant="h1">
          <img className="fimg" src={skills.image7.url} alt="Face1" />
        </Typography>
   

        <div className="homeCanvasBox" >
          <Typography className="text" variant="h2">Hello!</Typography>
          <Typography className="text"  variant="h2">World!</Typography>
          <Typography  className="text" variant="h2">I am !</Typography>
          <Typography className="text" variant="h2"
          >
            Akash!
          </Typography>
          <Typography className="text"  variant="h2">Vishwakarma!</Typography>
        </div>
      </div>
   
    
      <div className="dailyquote">
        <div className="quote-wrapper god-level">
          <span className="quote-left">“</span>
          <Typography
          
            variant="h4"
            className="quote-text text"
          >
            {about.quote.substring(0, 250)}
          </Typography>
          <span className="quote-right">”</span>
        </div>
      </div>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>
      <div className="homeYoutube">
        <Typography variant="h3">SKILLS</Typography>

        <Projects skills={skills} />

        <Typography variant="h3">PROJECTS</Typography>

        <div className="homeYoutubeWrapper">
          {youtubes.map((item) => (
            <YoutubeCard
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
