import React from "react"
import { graphql, useStaticQuery } from "gatsby"



export default [
  {
    id: 1,
    github: "https://github.com/rkopec91/Behavioral_Cloning",
    title: "Behavior Cloning for Self-Driving Car",
    description: "Using the Udacity self driving car simulator, the goal was to create a deep learning model that would be trained off of a human driving around the track that would predict steering angles from the image data that is collected.  In this simulation, I used a model created by Nvidia's self driving car team.  The link to the model can be seen here:  https://devblogs.nvidia.com/deep-learning-self-driving-cars/.",
    url: "https://drive.google.com/file/d/1o9Dly4oXQtwPjwwhk3wRhPA6bwQSC8tF/view?usp=sharing",
    image: "Behavior.png",
    stack: [
        {
            id: 1,
            title: "Python"
        },
        {
          id: 2,
          title: "Keras"
      },
    ]
  },
  {
    id: 2,
    github: "https://github.com/rkopec91/Augmented-Random-Search",
    title: "Augmented Random Search",
    description: "This is a simple project that teaches a cheetah how to run.  It utilizes the Augmented Random Search algorithm based on a paper by Horia Mania, Aurelia Guy, and Benjamin Rect at Berkeley.  https://arxiv.org/pdf/1803.07055.pdf.  This was a small project just for learning purposes.",
    url: "https://drive.google.com/file/d/1WXSQe42KOxmfbMF3ezTTTDZQ1j_lu1lc/view?usp=sharing",
    image: "Augmented-Random-Search.png",
    stack: [
        {
            id: 1,
            title: "Python"
        },
    ]
  },
  {
    id: 3,
    github: "https://github.com/rkopec91/reinforcement_learning_projects",
    title: "Reinforcement Learning Projects",
    description: "This is a repository that I have been working on a bit that takes a few different reinforcement learning alorithms together looking at how they perform in deferent environments.  There are a few algorithms that range from basic reinforcement learning to complex algorithms that utilize computer vision to solve problems.",
    
    image: "projects-4.jpg",
    stack: [
        {
            id: 1,
            title: "Python"
        },
        {
          id: 2,
          title: "Pytorch"
      },
    ]
  },
  {
    id: 4,
    github: "https://github.com/rkopec91/portfolio",
    title: "Portfolio project",
    description: "The portfolio project is refering to this website.  I decided to pick up this project in order to learn new skills and show off my talents.  I learned more about react and how it works, and I learned about Gatsby.  This project showcases some of my work throughout the years while at the same time will help me improve current and new skills.",
    url:"https://ryankopec.com/",
    image: "projects-2.jpg",
    stack: [
      {
          id: 1,
          title: "React"
      },
      {
        id: 2,
        title: "Gatsby"
      },
      {
        id: 3,
        title: "HTML"
      },
      {
        id: 4,
        title: "CSS"
      },
    ]
  },
]