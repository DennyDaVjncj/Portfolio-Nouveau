import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const projects=[{
    id:1,
    title:'final project'
}];//mimicks a database that i'm pulling projects from

const HomePage=()=>{
    return(
        <Container>            
            <Row md={4}>
                {/* <Col>first project</Col>
                <Col md={4}>second project</Col>
                <Col>3 of 3</Col> */}
                {projects.map(project=>(
                    <Col key={project.id}>{project.title}</Col>
                ))}
            </Row>
        </Container>        
    )
}
export default HomePage;