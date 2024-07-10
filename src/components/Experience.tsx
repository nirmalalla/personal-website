import { Timeline, Text, Container } from "@mantine/core"

function Experience(){
    return (
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
            <Timeline bulletSize={24} lineWidth={2}>
                <Timeline.Item title="Software Engineer Intern @ Quadyster (June 2022 - July 2022)">
                    <Text w={400}> Developed responsive applications using Node.js, MongoDB, HTML, and CSS. Mentored by senior software engineers, gaining insights into advanced development techniques and industry best practices.</Text>
                </Timeline.Item>

                <Timeline.Item title="Software Developer @ ChangePlusPlus (Sep 2023 - Present)">
                    <Text w={400}>Collaborated with cross-functional team members, including an engineering manager and product manager, to develop innovative
                    technology solutions supporting non-profits. Utilized modern web development technologies such as React.js, MongoDB, and Node.js to build robust applications.</Text>
                </Timeline.Item>

                <Timeline.Item title="Software Engineer @ Vanderbilt Medical Center (May 2024 - Present)">
                    <Text w={400}>Optimized Clinical Informatics systems, improving runtime by over 25% and user experience through extensive testing and research. Developed and deployed a server and user interface, enabling numerous clinicians to access critical datasets efficiently.</Text>
                </Timeline.Item>
            </Timeline>
        </Container>
    )
}

export default Experience