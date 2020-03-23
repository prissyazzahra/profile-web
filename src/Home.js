import React from 'react';
import Tilt from 'react-tilt';

import ProfileWrapper from './styles';
import theme from './theme';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: window.pageYOffset,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const scrolled = winScroll
    this.setState({position: scrolled})
  }

  render() {
    const headerAnimation = {
      opacity: 1 - (this.state.position / 500),
    }

    const contacts = [
      {
        imageSrc: 'github.svg',
        alt: 'Github',
        url: 'https://github.com/prissyazzahra',
      },
      {
        imageSrc: 'gitlab.svg',
        alt: 'Gitlab',
        url: 'https://gitlab.com/prissyazzahra',
      },
      {
        imageSrc: 'linkedin.svg',
        alt: 'LinkedIn',
        url: 'https://www.linkedin.com/in/prissyazzahra/',
      },
      {
        imageSrc: 'resume.svg',
        alt: 'Resume',
        url: 'https://drive.google.com/open?id=1GBwSO7kmitblvp0gnbvCC-SfGwekoSMo'
      }
    ]

    const projects = [
      {
        imageSrc: 'pmb.png',
        title: 'PMB Fasilkom UI',
        description: 'A website for the orientation period of Fasilkom UI.',
        tools: [
          'React.js',
          'Redux',
          'CSS3',
          'ES6'
        ],
        url: 'http://pmb.cs.ui.ac.id/',
      },
      {
        imageSrc: 'ristek-merch.jpg',
        title: 'Ristek Merchandise',
        description: 'A website for ordering merchandise for the members of Ristek Fasilkom UI.',
        tools: [
          'React.js',
          'Redux',
          'CSS3',
          'ES6'
        ],
        git: 'https://gitlab.com/prissyazzahra/ristek-merchandise',
      },
      {
        imageSrc: 'portfolio.png',
        title: 'Portfolio Website',
        description: 'My previous portfolio website!',
        tools: [
          'HTML',
          'CSS',
          'JS',
          'Django'
        ],
        url: 'http://prissyazzahra.herokuapp.com/',
        git: 'https://gitlab.com/prissyazzahra/ppwlab'
      }
    ]

    return (
      <ProfileWrapper>
        <div className="mid">
          <div style={headerAnimation}>
            <h3>Hello neat person! I'm</h3>
            <h1><span style={{'color': theme.skyBlue}}>Prissy</span>
            <br />
            <span style={{'color': theme.duskyBlue}}>Azzahra
            <br />Ratnadwita
            </span>
            </h1>
          </div>
          <img id="profile" style={headerAnimation} src={"profile-pic.jpg"} alt="Hello, I'm Prissy!" />
        </div>
        <div className="wrapper">
          <div className="rectangle" />
          <div className="text">
            <h2>I'm an undergraduate student at Faculty of Computer Science, University of Indonesia.</h2>
            <h2>Web development is mainly what I'm passionate about,</h2>
            <h2>but I'm also interested in animation, illustration, and UI design.</h2>
            <h2>I occasionally animate using code.</h2>
          </div>
        </div>
        <div className="tech">
          <h1 className="watermark">PROJECTS</h1>
          <div className="projects">
            {projects.map((item, i) => 
              <Tilt options={{scale: 1}} key={i} className="card">
                <div>
                  <img src={item.imageSrc} alt="Web Interface" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="tools">
                  {item.tools.map((tool, i) => 
                  <span key={i}>{tool}</span>
                  )}
                </div>
                <div className="sources">
                  {item.url ? 
                    <a className="button" href={item.url} target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                    :
                    null
                  }
                  {item.git ? 
                  <a className="button" href={item.git} target="_blank" rel="noopener noreferrer">
                    View Source
                  </a>
                  :
                    null
                  }
                </div>
              </Tilt>
            )}
          </div>
        </div>
        <div className="contact">
        <h1 className="watermark">CONTACT</h1>
          <div className="icons">
            {contacts.map((item, i) =>
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
                <img src={item.imageSrc} alt={item.alt} />
              </a>
            )}
          </div>
            <p>Prissy Azzahra Ratnadwita © 2020</p>
        </div>
      </ProfileWrapper>
    )
  }
}

export default Home;