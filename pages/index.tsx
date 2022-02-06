import { NextPage } from 'next'
import styled from '@emotion/styled'
import type { Theme } from 'lib/decl'
import Image from 'next/image'
import { ArrowDownIcon } from "@heroicons/react/outline";

const Title = styled('h1')`
  font-size: 4rem;
  font-weight: bold;
  line-height: 4rem;
  text-align: center;
`

const Description = styled.p`
  text-align: center;
  margin-top: 2rem;
`

const IndexWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`

const Container = styled.div``
const ImageWrapper = styled.div`
  display: none;`

const CTA = styled.span`
  position: absolute;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const DownArrow = styled(ArrowDownIcon)`
  
`

const IndexPage: NextPage = () => {
  return (
    <>
    <IndexWrapper>
      <Container>
        <ImageWrapper>
          <Image src="/memoji.png" height={400} width={400} />
        </ImageWrapper>
        <Title>
          Hi, <br /> I&apos;m Jack
        </Title>
        <Description>
          I currently am an IB student at the{' '}
          <b>International School of Talents - Multicampus</b> and the CTO of{' '}
          <b>T.W.I.N srl</b>
        </Description>
      </Container>
      <CTA><span>Learn more</span><DownArrow height={30} /></CTA>
    </IndexWrapper>
    </>
  )
}

export default IndexPage
