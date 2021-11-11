import { Box } from "@mui/system";
import React from "react";
import { Carousel } from "react-carousel-minimal";

const Hero = () => {
  const data = [
    {
      image: "https://i.ibb.co/VQV56gT/slider1.jpg",
      caption: `<div className="slider-cap">
                
                  <h2>MODREN-CLASSIC</h2>
                  
                </div>`,
    },
    {
      image: "https://i.ibb.co/v1r6f53/slider2.jpg",
      caption: `<div className="slider-cap">
                  
                  <h2>MODREN-CLASSIC</h2>
                  
                </div>`,
    },
    {
      image: "https://i.ibb.co/98KtKjM/slider3.jpg",
      caption: `<div className="slider-cap">
                
                  <h2>MODREN-CLASSIC</h2>
                  
                </div>`,
    },
  ];

  const captionStyle = {
    fontWeight: "bold",
    fontSize: "3rem",
    marginTop: "-60px",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <Box
      className="hero"
      style={{
        width: "100vw",
        height: "100vh",
        marginTop: "55px",
        overflowX: "hidden",
      }}
    >
      <Carousel
        data={data}
        time={5000}
        width="100vw"
        height="93vh"
        captionStyle={captionStyle}
        radius="0px"
        slideNumberStyle={slideNumberStyle}
        captionPosition="center"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={false}
        thumbnailWidth="100px"
        showNavBtn={true}
        style={{
          textAlign: "center",
          Width: "100vw",
        }}
      />
    </Box>
  );
};

export default Hero;
