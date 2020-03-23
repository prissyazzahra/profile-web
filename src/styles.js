import styled from 'styled-components';

const ProfileWrapper = styled.div`
  background: ${props => props.theme.coffee};
  overflow-x: hidden;
  position: relative;
  z-index: 0;

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  h1 {
    font-size: 7rem;
    font-weight: bold;
  }

  h2 {
    line-height: 4rem;
    font-size: 1.5rem;
  }

  .mid {
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;

    #profile {
      margin-left: 5em;
      border-radius: 50%;
      width: 300px;
      height: auto;
      border: 30px solid ${props => props.theme.yellow};
    }
  }

  .rectangle {
    color: ${props => props.theme.yellow}
    text-align: center;
    background: ${props => props.theme.red};
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  .before-rect {
    background: ${props => props.theme.red};
    position: relative;
    height: 200px;
    width: 4000px;
    transform: rotate(-5deg) translate(-100px);
    z-index: 0;
  }

  .after-rect {
    background: ${props => props.theme.red};
    position: relative;
    height: 300px;
    width: 4000px;
    transform: rotate(-5deg) translate(-100px);
    z-index: 0;
  }

  .tech {
    text-align: right;
    padding: 2em;
    margin-top: 6em;

  }

  .watermark {
    opacity: 0.3;
    color: ${props => props.theme.duskyBlue};
    font-weight: bold;
    font-size: 10rem;
    transition: 0.5s;

  }

  .watermark:hover {
    opacity: 1;
  }

  .projects {
    display: flex;
    justify-content: center;

    .tools {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1em; 

      span {
        border: 2px solid ${props => props.theme.yellow};
        padding: 5px 15px;
        border-radius: 50px;
        margin: 0 0.5em;
      }
    }
  }

  .card {
    background: ${props => props.theme.coffee};
    padding: 1.5em;
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1em;
    color: ${props => props.theme.duskyBlue};
    text-align: left;
    line-height: 2em;
    border-radius: 5px;
    box-shadow: 10px 10px 28px 0px rgba(196,196,196,1);
    transform-style: preserve-3d;

    img {
      width: 100%;
    }

    .sources {
      display: flex;
      margin-top: 1em;
      transition: 0.5s;

      .button {
        width: 50%;
        margin: 0 0.5em;
        text-decoration: none;
        font-weight: bold;
        text-align: center;
        color: ${props => props.theme.duskyBlue};
        background: ${props => props.theme.yellow};
        border-radius: 5px;
        padding: 5px 15px;
      }
    }
  }

  .card:hover {
    .sources {
      transform: translateZ(50px);
}
  }

  .contact {
    padding: 2em;
  }

@media screen and (max-width: 64em) {
  h1 {
    font-size: 15vw;
  }

  h2 {
    font-size: 4vw;
    line-height: 2.2em;
  }

  .mid {
    flex-direction: column;

    #profile {
      margin-left: 0;
      margin-top: 3em;
      width: 50vw;
    }
  }

  .projects {
    flex-direction: column;
  }
}
`;

export default ProfileWrapper;