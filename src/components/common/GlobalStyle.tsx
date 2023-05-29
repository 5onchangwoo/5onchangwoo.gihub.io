import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Myeongjo', serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  :root {
    --main-color: #fff;
    --box-shadow: 0 0 2px rgba(0, 0, 0, 0.7);
    --post-item-hover-shadow: 0 0 20px rgba(0, 0, 0, 1);
  }

  :root .dark {
    --main-color: #121212;
    --second-color: #242424;
    --text-color: #fff;
    --box-shadow: 0 0 2px rgba(255, 255, 255, 0.7);
    --post-item-hover-shadow: 0 0 20px rgba(255, 255, 255, 1);

    background-color: var(--main-color);
    color: var(--text-color);
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
