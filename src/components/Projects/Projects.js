import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import qkart_img from "../../Assets/Projects/qkart.png";
import sentiments from "../../Assets/Projects/sentiments.jpg";
import fbi_gun from "../../Assets/Projects/fbigun.jpg";
import tvscript from "../../Assets/Projects/tvscript.png";
import face_gen from "../../Assets/Projects/facegeneration.jpg";
import data_wrangle from "../../Assets/Projects/datawrangling.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qkart_img}
              isBlog={false}
              title="Qkart"
              description="Developed and deployed a fully functional e-commerce website build with react.js, Material-UI, and Node.js. A user can sign up, logged in, place order, set delivery address and many more."
              link="https://qkartfrontendbyaleza.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiments}
              isBlog={false}
              title="Sentiments Analysis"
              description="In this project I have trained and deployed a sentiment analysis model using Amazon SageMaker. 
              I used pandas, numpy, nltk, beautifulsoup4, html5lib to train the model. I used LSTM (Long Short Term Memory) classifier for training the model. After training, I tested the model and deployed the model."
              link="https://github.com/MarcelAleza1/SentimentAnalysisProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fbi_gun}
              isBlog={false}
              title="Investigate-FBI-Gun-dataset"
              description="In this project, i used data analysis methods on FBI Gun dataset and i found that the gun registration per capita is 0.39781331523550745% in 2010, while in 2016 it is equal to 0.677793404977627%, this shows an increase of 70%. In 2021, the hand guns are the most registered, 9932120 records of handgun have been registered and multiple guns are the least registered in 2021 with a record of 327875."
              link="https://github.com/MarcelAleza1/Investigate-FBI-Gun-dataset"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tvscript}
              isBlog={false}
              title="TV-Scripts-Generation"
              description="In this project, I have generated my own Seinfeld TV scripts using RNNs (Recurrent Neural Networks). 
              I have used part of the Seinfeld dataset of scripts from 9 seasons.
               The Neural Network I built have generated a new ,'fake' TV script, based on patterns
                it recognizes in this training data."
              link="https://github.com/MarcelAleza1/TV-Scripts-Generation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face_gen}
              isBlog={false}
              title="Face Generation"
              description="In this project, I have defined and trained a DCGAN (Deep Convolutional Generative Adversarial Network) on a dataset of faces.
               I got a generator network to generate new images of faces that look as
                realistic as possible!"
              link="https://github.com/MarcelAleza1/Face-Generations"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data_wrangle}
              isBlog={false}
              title="Data Wrangling"
              description="I used twitter archives of Twitter user @dog_rates also known as WeRateDogs to analyze and visualize."
              link="https://github.com/MarcelAleza1/Data_Wrangling"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
