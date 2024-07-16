import { Container, Title, Avatar, Text } from "@mantine/core";
import profileIcon from "../assets/ProfileIcon.png"

function Header() {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#242424' }}>
            <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar src={profileIcon} size={120} style={{ marginBottom: 20 }} />
                <Title order={1} style={{ color: '#fff' }}>Hello! I'm Nirmal, nice to meet you.</Title>
            </Container>
            <div style={{ marginTop: 20 }}>
                <Text fw={700}>Scroll to Get to Know Me</Text>
            </div>
        </div>
    );
}

export default Header;
