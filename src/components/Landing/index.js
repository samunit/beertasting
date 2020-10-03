import React from 'react';

const LandingPage = () => (
  <div>
    <Card img="./img1.png" title="test title" description="test desc"></Card>
    <h1>Beer Tasting</h1>
    <p>Welcome to the beer tasting page...</p>
  </div>
);

const Card = (props) => {
  return (
    <div style={{ height: 100 + 'px', width: 100 + 'px' }} className={props.className}>
      <div className={props.className}>
        <i className={props.className}></i>
        <img src={props.img} alt={props.alt}></img>
      </div>

      <div className="content-div">
        <span className="title">{props.title}</span>
        <br />
        <span>{props.description}</span>
      </div>
    </div>
  );
};

export default LandingPage;
