// src/components/WhatIsHandball.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WhatIsHandball.css';

const WhatIsHandball = () => {
  return (
    <div className="what-is-handball">
      <h1>What is Handball?</h1>
      <p>Handball is a fast-paced sport where players use their hands to hit a small rubber ball against a wall. If you’re familiar with tennis or pickleball, the concept is similar—except there’s no racket or paddle. It’s just you, the ball, and the wall.</p>
      <p>In New York City, One-Wall Handball is the most common version of the game. You’ll see people playing it in parks all over the city, from casual pick-up games to intense tournament matches. It can be played one-on-one (singles), two-on-two (doubles), or even in a three-player game called ‘triangle.’</p>
      
      <h2>A Brief History</h2>
      <p>Handball has been played for centuries, with its modern roots tracing back to Ireland. Irish immigrants brought the game to the U.S. in the late 1800s, where it quickly gained popularity in New York City. The sport thrived in NYC because it was highly accessible—all you needed was a ball and a wall, making it perfect for urban environments. By the mid-1900s, the city built dedicated handball courts in public parks, solidifying its place as a staple of NYC street sports.</p>

      <div className="video-container">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/AEVmOPdgASc"
          title="What is Handball"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h2>How to Play One-Wall Handball</h2>
      <p>The goal of the game is simple: hit the ball against the front wall in a way that makes it hard for your opponent to return it.</p>
      <p>Game Formats:</p>
      <ul>
        <li><strong>Singles (1 vs. 1)</strong> – Just you and an opponent battling it out.</li>
        <li><strong>Doubles (2 vs. 2)</strong> – Team up with a partner against another duo.</li>
        <li><strong>Triangle (3 players)</strong> – A rotating game where players take turns competing.</li>
      </ul>
      <p>Basic Rules:</p>
      <ul>
        <li>The server must hit the ball off the front wall and past the short line to start the rally.</li>
        <li>The ball can bounce once before you have to hit it back.</li>
        <li>If your opponent can’t return the ball before the second bounce, you win the rally.</li>
        <li>Only the server can score points (unless you're playing with rally scoring).</li>
        <li>Games are usually played to 21 points (or whatever players agree on).</li>
      </ul>

      <h2>Why Play Handball?</h2>
      <p>Handball is more than just a game—it’s part of NYC’s culture. If you’re new to the game, grab a ball, head to your nearest park, and give it a shot.</p>
      <p>Explore some of the best handball courts in NYC in our <Link to="/where-to-play">Where to Play</Link> section and watch high-level play in our <Link to="/tournaments">Tournament</Link> section!</p>
    </div>
  );
};

export default WhatIsHandball;
