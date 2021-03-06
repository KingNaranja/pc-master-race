import React from 'react'
import styled from 'styled-components'
import PostContainer from "./../components/PostContainer"
import Toolbar from "./../components/Toolbar";
import { PageWrapper } from './../components/PageWrapper'


function Home() {
  // inherit style from Wrapper 
  const Wrapper = styled(PageWrapper)``

  const page = 'pcmr'

  return (
    <Wrapper>
      <Toolbar/>
      <PostContainer page={page} />
    </Wrapper>
  )
}

export default Home
