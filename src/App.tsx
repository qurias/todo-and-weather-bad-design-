import React from 'react'
import Todo from './components/Todo'
import styled from "styled-components"
import StyledFlex from './styled/StyledFlex'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Weather from './components/Weather'

const StyledAppContainer = styled(StyledFlex)`
  max-width: 100vw;
  height: auto;
`

const App = () => {
  return (
    <StyledAppContainer items="center" direction="column">
      <Header />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </StyledAppContainer>
  );
}

export default App
