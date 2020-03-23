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
    font-size: 1.5vw;
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

  .text {
    color: ${props => props.theme.yellow}
    text-align: center;
    width: 100%;
    position: absolute;
    z-index: 1;
    top: 25%;
  }

  .wrapper {
    position: relative;
  }

  .rectangle {
    background: ${props => props.theme.red};
    height: 30vw;
    width: calc(100% + 200px);
    transform: rotate(-5deg) translate(-100px);
    z-index: 0;
  }

  .tech {
    text-align: right;
    padding: 2em;

  }

  .watermark {
    opacity: 0.3;
    color: ${props => props.theme.duskyBlue};
    font-weight: bold;
    font-size: 8rem;
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
      flex-wrap: wrap;
      margin-top: 1em; 

      span {
        border: 2px solid ${props => props.theme.yellow};
        padding: 5px 15px;
        border-radius: 50px;
        margin: 0 0.3em;
      }
    }
  }

  .card {
    background: ${props => props.theme.coffee};
    padding: 1.5em;
    flex-basis: 30%;
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
      justify-content: center;
      transition: 0.5s;

      .button {
        width: 100%;
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

    .icons {
      margin: auto;
      display: flex;
      justify-content: space-between;
      width: 50%;
      flex-wrap: wrap;
    }

    img {
      color: ${props => props.theme.duskyBlue};
      width: 50px;
    }

    p {
      margin-top: 2em;
      width: 100%;
      text-align: center;
    }
  }

@media screen and (max-width: 64em) {
  h1 {
    font-size: 15vw;
  }

  h2 {
    line-height: 3em;
    font-size: 2vw;
  }

  .watermark {
    font-size: 15vw;
    opacity: 1;
  }

  .mid {
    flex-direction: column;

    #profile {
      margin-left: 0;
      margin-top: 3em;
      width: 50vw;
    }
  }

  .rectangle {
    height: 40vw;
  }

  .projects {
    flex-direction: column;

    .tools {
      span {
        margin: 0.5em;
      }

      .button {
        width: 30%;
      }
    }
  }

  .icons {
    width: 100%;
  }
}
`;

export default ProfileWrapper;