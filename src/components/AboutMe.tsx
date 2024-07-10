import { Text, Group, Title, Container, Image, Pill } from '@mantine/core';
import vandy from "../assets/Vanderbilt-University-Emblem.png"

function AboutMe() {
  
  return (
    <div>
      <Container>
        <Text style={{marginBottom: 20}}>I am from Rock Island, IL and have hobbies that include: weightlifting, movies, basketball, hockey, and, obviously, programming. I am an aspiring Software and AI/ML Engineer with a passion for technology and learning. I love to try out new things and step out of my comfort zone. Feel free to reach out for any inquiries, or simply to get to know me.</Text>
        <Group>
          <Image h={200} w="auto" src={vandy}></Image>
          <div>
            <Title order={2}>Education</Title>
            <Text>Computer Science and Mathematics @ Vanderbilt University</Text>
            <Title order={4}>Relevant Coursework</Title>
            <Text w={420}>CS2201: Program Design and Data Structures | CS2212: Discrete Structures | CS2281: Computer Architecture | CS3251: Intermediate Software Design</Text>
          </div>
        </Group>
      </Container>
      <Container mt={20}>
        <Group style={{ textAlign: 'center', justifyContent: "center" }}>
          <Title order={2} style={{ marginBottom: 10 }}>
            Interests
          </Title>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Pill.Group style={{display: "flex", justifyContent: "center"}}>
              <Pill style={{ backgroundColor: "#36454F"}}>Machine Learning</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>Database/API Management</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>AI</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>Data Analytics</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>Web Dev</Pill>
            </Pill.Group>
          </div>
        </Group>
      </Container>
      <Container mt={20}>
        <Group style={{ textAlign: 'center', justifyContent: "center" }}>
          <Title order={2} style={{ marginBottom: 10 }}>
            Skills
          </Title>
          <div style={{ display: 'flex', justifyContent: 'center', width: 500 }}>
            <Pill.Group style={{display: "flex", justifyContent: "center"}}>
              <Pill style={{ backgroundColor: "#36454F"}}>C++</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>Java</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>Python</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>Javascript</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>React.js</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>MongoDB</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>Node.js</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>Flask</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>Pandas</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>Scikit-Learn</Pill>
              <Pill style={{ backgroundColor: "#36454F"}}>NumPy</Pill>
            </Pill.Group>
          </div>
        </Group>
      </Container>

    </div>
  );
}

export default AboutMe