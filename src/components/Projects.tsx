import { Container, Text, Title, Image, Group } from "@mantine/core"

function Projects(){
    return (
        <div>
            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                <Group>
                    <Image h={150} w="auto" src="src/assets/DecisionTree.gif" style={{ marginRight: 20 }} radius="md" />
                    <div>
                        <Title order={3}><a target="_blank" href="https://github.com/nirmalalla/random-forest" style={{ color: 'inherit', textDecoration: 'none' }}>Random Forest</a></Title>
                        <Text w={400}>Developed a Random Forest from scratch using C++. Used Gini Impurity to quantify impurities and optimize splitting for Decision Trees and Decision Nodes. Trained and tested data with the Iris Dataset, proving its accuracy.</Text>
                    </div>
                </Group>
            </Container>
            <Container mt={50} style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                <Group>
                    <Image h="auto" w={260} src="src\assets\PredictiveModel.gif" style={{ marginRight: 20 }} radius="md" />
                    <div>
                        <Title order={3}><a target="_blank" href="https://github.com/nirmalalla/nhl-data" style={{ color: 'inherit', textDecoration: 'none' }}>NHL Predictor</a></Title>
                        <Text w={400}>Engineered a Predictive Model used to determine the most likely recipient of various awards in the National Hockey League. Prepared +15 years worth of data with Pandas and NumPy and trained on a MultiOutput Regressor from scikit-learn. Tested the data with current and future years.</Text>
                    </div>
                </Group>
            </Container>
            <Container mt={50} style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                <Group>
                    <Image h="auto" w={260} src="src\assets\GeneticAlgorithm.gif" style={{ marginRight: 20 }} radius="md" />
                    <div>
                        <Title order={3}><a target="_blank" href="https://github.com/nirmalalla/genalgo" style={{ color: 'inherit', textDecoration: 'none' }}>Genetic Algorithm</a></Title>
                        <Text w={400}>Created a Genetic Algorithm from inception to minimize the value of a two parameter function. Utilized Roulette Wheel selection when implementing the evolutionary learning.</Text>
                    </div>
                </Group>
            </Container>
            <Container mt={50} style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                <Group>
                    <Image h="auto" w={260} src="src\assets\LoanManagment.gif" style={{ marginRight: 20 }} radius="md" />
                    <div>
                        <Title order={3}><a target="_blank" href="https://github.com/ChangePlusPlusVandy/vac-net" style={{ color: 'inherit', textDecoration: 'none' }}>Loan Management System</a></Title>
                        <Text w={400}>Developed a Loan & Credit Management system for <a target="_blank" href="https://www.vacnetwork.org/">Volunteer Action Network</a> to manage +29,000 microloans. Engineered with a team of developers, engineering manager, and product manager.</Text>
                    </div>
                </Group>
            </Container>
            
        </div>
        
    )
}

export default Projects