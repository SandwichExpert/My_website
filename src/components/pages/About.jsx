import React, { useState } from "react";

export default function About() {
  const [about, setAbout] = useState(0);
  

  function previous(e) {
    e.preventDefault();
    setAbout(about-1);
  }

  function next(e) {
    e.preventDefault();
    setAbout(about+1);
  }
  
  return (
    <div className="page__container">
      <div className="welcome">
        <h1 className="main__title">About me:</h1>
        <div className="about">
          {about === 0 ? (
            <div className="about__section">
              <div>
              <h4 className="main__desc">My skills</h4>
              
              <p>I love coding and problem-solving. My skills include: 
              </p>
              <br/>
              </div>
              <div className="skills">
                <div className="languages">
                <h3 style={{marginTop:0}}>Programming languages</h3>
                    <p className='skill__list'><i className="fab fa-react"></i> ReactJs</p>
                    <p className='skill__list'><i className="fab fa-node-js"></i> NodeJs</p>
                    <p className='skill__list'><i className="fab fa-js"></i> JavaScript</p>
                    <p className='skill__list'><i className="fab fa-html5"></i> HTML</p>
                    <p className='skill__list'><i className="fab fa-css3"></i >CSS</p>
                    <p className='skill__list'>MongoDB</p>
                </div>
                    
                <div className="languages">
                <h3 style={{marginTop:0}}>Programming languages</h3>
                    <p className='skill__list'><i className="fab fa-react"></i> ReactJs</p>
                    <p className='skill__list'><i className="fab fa-node-js"></i> NodeJs</p>
                    <p className='skill__list'></p>
                    <p className='skill__list'><a href="https://pdfhost.io/v/sL4Vbmdsg_xavier_crespoCVpdf.pdf" target="_blank" rel="noopener noreferrer">link to my CV</a></p>
                </div>
              </div>
              <p className='skill__list'><a href="https://pdfhost.io/v/sL4Vbmdsg_xavier_crespoCVpdf.pdf" target="_blank" rel="noopener noreferrer">link to my CV</a></p>  
            </div>
            
          ) : (
            <div className="about__section">
              <h4 className="main__desc">Web dev front and back</h4>
            </div>
          )}
          <div className="buttons">
            {about !== 0 ? (
              
              <button onClick={previous}>Previous</button>
              
              ) : (
                <button onClick={next}>Next</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
