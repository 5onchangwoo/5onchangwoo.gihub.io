import React, { FunctionComponent, useState } from 'react'
import { graphql } from 'gatsby'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`
const Text0 = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`
// Kebeb Case 사용
const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`
// Camel Case 적용
const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'green',
  textDecoration: disable ? 'line-through' : 'none'
}))


type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {

  const [over1, setOver1] = useState(false);
  const [over2, setOver2] = useState(false);
  console.log(over2)

  return (
    <div>
      <Global styles={globalStyle} />
      <Text0 >{title}</Text0>
      <Text1 disable={over1} onMouseOver={() => setOver1(true)} onMouseLeave={() => setOver1(false)}>{description}</Text1>
      <Text2 disable={over2} onMouseOver={() => setOver2(true)} onMouseLeave={() => setOver2(false)}>{author}</Text2>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`