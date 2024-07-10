import "@mantine/core/styles.css"
import { MantineProvider, Title, Container } from '@mantine/core'
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Header from "./components/Header"
import './App.css'

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <Header />
        <div id="content">
          <div style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#242424', alignItems: "center", display: "flex", borderRadius: 8, marginBottom: 20, marginTop: 20 }}>
              <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
                  <Title>About Me</Title>
              </Container>
          </div>
          <AboutMe />
          <div style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#242424', alignItems: "center", display: "flex", borderRadius: 8, marginBottom: 20, marginTop: 20 }}>
              <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
                  <Title>Experience</Title>
              </Container>
          </div>
          <Experience />
          <div style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#242424', alignItems: "center", display: "flex", borderRadius: 8, marginBottom: 50, marginTop: 20 }}>
              <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
                  <Title>Projects</Title>
              </Container>
          </div>
          <Projects />
          <div style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#242424', alignItems: "center", display: "flex", borderRadius: 8, marginBottom: 20, marginTop: 20 }}>
              <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
                  <Title>Contact Info</Title>
              </Container>
          </div>
          <Contact />
        </div>
      </MantineProvider>
    </>
  )
}

export default App
