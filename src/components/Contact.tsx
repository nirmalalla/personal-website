import { Container, Text } from "@mantine/core"
import { IconMailFilled, IconPhoneFilled, IconBrandGithubFilled, IconBrandLinkedin } from "@tabler/icons-react"

function Contact(){
    return (
        <div>
            <Container style={{display: "flex", justifyContent: "center"}}>
                <IconMailFilled style={{marginRight: 5}} />
                <Text><a href="mailto:allanirmal@gmail.com">allanirmal@gmail.com</a></Text>
                <IconPhoneFilled style={{marginRight: 5, marginLeft: 10}} />
                <Text>+1 (309)-732-6282</Text>
                <IconBrandGithubFilled style={{marginRight: 5, marginLeft: 10}} />
                <Text><a target="_blank" href="https://github.com/nirmalalla">nirmalalla</a></Text>
                <IconBrandLinkedin style={{marginRight: 5, marginLeft: 10}} />
                <Text><a target="_blank" href="https://www.linkedin.com/in/nirmal-alla-687125242/">Link to Profile</a></Text>
            </Container>
        </div>
    )
}

export default Contact