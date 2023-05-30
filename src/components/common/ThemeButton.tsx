import styled from '@emotion/styled'
import { FunctionComponent, useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const ThemeButtonDiv = styled.div`
  position: fixed;
  margin-top: 10px;
  right: 0;
  margin-right: 10px;

  .toggle {
    height: 30px;
    width: 60px;
    border-radius: 50px;
    margin: auto;
    background-image: linear-gradient(skyblue, white);
    position: relative;
    cursor: pointer;
    box-shadow: var(--box-shadow);

    @media (max-width: 768px) {
      height: 20px;
      width: 40px;
    }
  }

  .toggle.dark {
    background-image: linear-gradient(midnightblue, rebeccapurple);
  }

  .notch {
    height: 90%;
    width: 45%;
    border-radius: 50%;
    background: #f2f5a9;
    position: absolute;
    top: 5%;
    left: 2.5%;
    box-shadow: 0 0 5px yellow;
    z-index: 1;
    transition: all 0.6s ease;
  }

  .notch > .crater {
    background: burlywood;
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4) inset;
  }
  .dark .crater {
    opacity: 0.4;
  }

  .crater:first-of-type {
    left: 15%;
    top: 7.5%;
    height: 15%;
    width: 20%;
    transform: rotate(-45deg);
  }

  .crater:last-child {
    right: 15%;
    top: 7.5%;
    height: 15%;
    width: 12.5%;
    transform: rotate(45deg);
  }

  .dark > .notch {
    background: whitesmoke;
    box-shadow: 0 0 5px whitesmoke;
    transform: translate(110%, 0);
  }

  .shape {
    position: absolute;
    background: #e6e6e6;
    border-radius: 50%;
    transition: all 0.2s;
  }

  .shape.sm {
    height: 5%;
    width: 25%;
    top: 50%;
    left: 60%;
    transition: all 0s ease-out;
  }

  .shape.md {
    height: 10%;
    width: 32.5%;
    top: 25%;
    left: 25%;
    z-index: 2;
  }

  .shape.lg {
    height: 15%;
    width: 50%;
    bottom: 20%;
    left: 25%;
  }

  .dark .shape {
    background: lightgray;
    box-shadow: 0 0 0.7px 0.5px violet;
  }

  .dark .shape.sm {
    height: 5%;
    width: 2.5%;
    transform: translate(-800%, 0);
    background: #f3f781;
  }

  .dark .shape.sm:first-of-type {
    transform: translate(-700%, 300%);
  }

  .dark .shape.md {
    height: 10%;
    width: 5%;
    transform: translate(5%, 0);
  }

  .dark .shape.lg {
    height: 15%;
    width: 10%;
    transform: translate(-100%, 0);
  }
`

const ThemeButton: FunctionComponent = () => {
  const { isDark, handleTheme } = useContext(ThemeContext)

  return (
    <ThemeButtonDiv className="theme-button-wrapper">
      <div onClick={handleTheme} className={`toggle${isDark ? ' dark' : ''}`}>
        <div className="notch">
          <div className="crater" />
          <div className="crater" />
        </div>
        <div>
          <div className="shape sm" />
          <div className="shape sm" />
          <div className="shape md" />
          <div className="shape lg" />
        </div>
      </div>
    </ThemeButtonDiv>
  )
}

export default ThemeButton
