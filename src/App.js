import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { FaRegLightbulb } from "react-icons/fa6";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
const ToggleButton = styled.button`
position: fixed;
top: 20px;
right: 100px;
padding: 10px;
background-color: ${({ theme }) => theme.button};
color: ${({ theme }) => theme.white};
border: none;
border-radius: 5px;
cursor: pointer;
z-index: 999; /* Ensure it's above other elements */
height: 45px
svg {
  font-size: 24px; /* You can adjust the size accordingly */
  margin-bottom: 5px; /* Optional: Add some space between icon and text */
}
`;

const ToggleButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: flex-end; /* Adjusted to flex-end */
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <ToggleButtonContainer>
          <ToggleButton onClick={toggleDarkMode}>
            <FaRegLightbulb />
          </ToggleButton>
        </ToggleButtonContainer>
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
            <Education />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
