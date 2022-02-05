import { NextPage } from 'next'
import styled from '@emotion/styled'
import type { Theme } from 'lib/decl'
import Image from "next/image"

const Container = styled('div')`
  height: 100vh;
  width: 100vw;
  background: ${(props: { theme: Theme }) => props.theme.colors.background};
  color: ${(props: { theme: Theme }) => props.theme.colors.primary};
  width: clamp(16rem, 90vw, 80rem);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  h1 {
    font-size: 4rem;
    font-weight: bold;
  }

  p {
    font-size: 2rem;
  }
`

const Hero = styled('div')`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Description = styled('div')`
  width: clamp(16rem, 70%, 60rem);
`

const ImageDiv = styled('div')`
  width: 20rem;
  height: 20rem;
  background: red;
`

const IndexPage: NextPage = () => {
  return (
    <Container>
      <Hero>
        <Description>
          <h1>Hi, I&apos;m Jack</h1>
          <p>
            I currently am an IB student at the{' '}
            <b>International School of Talents - Multicampus</b> and the CTO of{' '}
            <b>T.W.I.N srl</b>
          </p>
        </Description>
          <Image src="/memoji.png" height={400} width={400}/>
      </Hero>
    </Container>
  )
}

export default IndexPage
