/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import image1 from '../../dist/media/confidence.jpg';
import image2 from '../../dist/media/Purpose-with-background.png';
import image3 from '../../dist/media/lifestyle_business_model.jpg';
import image4 from '../../dist/media/roadmap.jpg';
import image5 from '../../dist/media/vintage_computer_lab.jpg';
import image6 from '../../dist/media/mindful_woman.jpg';


const Ideas = () => {
  return (
    <div className="two-col-container">
      <div className="left-container top-container">
        <div className="two-col-container no-wrap">
          <div className="left-container-nested">
            <h1>Ideas</h1>
          </div>
          <div className="inline">
            <Link to="/">
              <button className="home-button">home</button>
            </Link>
          </div>
        </div>
        <div className="articles-div">
          <Card
            title="On Fear and Confidence"
            image={image1}
            blurb={<p className="blurb">There is one thing I know for sure about doing anything. The difference between success and failure lies in your ability to overcome fear.
              This article is about fear, confidence and the relationship they share. Read it if you’re a human being.</p>}
            link={'/ideas/fear-and-confidence'} />
          <Card
            title="The Purpose Framework"
            image={image2}
            blurb={<p className="blurb">Wanna live a better life? Start by clarifying what matters most to you, then build the habits you need to actually do that. It sounds hard, and it is. But this framework will help make it just a bit easier.</p>}
            link={'/ideas/purpose-framework'} />
          <Card
            title="Lifestyle Business Models"
            image={image3}
            blurb={<p className="blurb">For all those that don't want to hustle, that don't need squillions, that just want enough. This if for you.</p>}
            link={'/ideas/lifestyle-business-models'} />
          <Card
            title="The Roadmap: A Simple Planning Tool"
            image={image4}
            blurb={<p className="blurb">I’m a student, an entrepreneur, an employee, and a mom. That’s a lot of shit to keep track of it. I use one tool to manage all these things. One free, easy, flexible, simple tool to manage all the projects of my life. It’s called The Roadmap.</p>}
            link={'/ideas/roadmap'} />
          <Card
            title="Digital Distractions Suck"
            image={image5}
            blurb={<p className="blurb">Trying to focus on your work and then, Ping! You get distracted. It happens to all of us, and it’s bad. This article talks about why it’s so bad, and more importantly, what you can do about it. Read more if you’re not trying to get anything done. If you are, get back to work!</p>}
            link={'/ideas/digital-distractions'} />
          <Card
            title="Mindful Entrepreneurship"
            image={image6}
            blurb={<p className="blurb">Trying to focus on your work and then, Ping! You get distracted. It happens to all of us, and it’s bad. This article talks about why it’s so bad, and more importantly, what you can do about it. Read more if you’re not trying to get anything done. If you are, get back to work!</p>}
            link={'/ideas/mindful-entrepreneurrship'} />
        </div>
      </div>
    </div>
  )
};

export default Ideas;