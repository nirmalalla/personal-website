import { Container, Title, Avatar } from "@mantine/core";

function Header() {
    const scrollToContent = () => {
        const content = document.getElementById('content');
        if (content) {
            content.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#242424' }}>
            <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar src="src/assets/ProfileIcon.png" size={120} style={{ marginBottom: 20 }} />
                <Title order={1} style={{ color: '#fff' }}>Hello! I'm Nirmal, nice to meet you.</Title>
            </Container>
            <div style={{ marginTop: 20 }}>
                <button onClick={scrollToContent} style={{ padding: 10, fontSize: 16, backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Meet Me
                </button>
            </div>
        </div>
    );
}

export default Header;
