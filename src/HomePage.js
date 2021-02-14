import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const projects = [{
    id: 1,
    title: 'final project'
}];//mimicks a database that i'm pulling projects from

const HomePage = () => {
    return (
        <Container>
            {/* <Row md={4}> */}
            {/* <Col>first project</Col>
                <Col md={4}>second project</Col>
                <Col>3 of 3</Col> */}
            {/* {projects.map(project=>(
                    <Col key={project.id}>{project.title}</Col>
                ))} */}
            {/* </Row> */}
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Denny da Vjncj</h1>
                    </Col>
                </Row>
            </Container>

            <div className="container row">
                <div className="col-4">
                    <img className="brownGoku" src="https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/1/the-real-black-goku-kwabena-prempeh-transparent.png?&targetx=0&targety=-55&imagewidth=700&imageheight=610&modelwidth=700&modelheight=500&backgroundcolor=272b41&orientation=0" alt="version of the world famous Goku, that is of African descent" />
                </div>

                <div className="col-8 centerContent">
                    <h5>
                        "Of my most cherished traits, the affinity for collaboration & zest for enterprise are fan favorites! I've taken to progamming as a passion/serious-professional ambition due to the creative nature involved in programmatically finding solutions."
              </h5>
                </div>
            </div>
        </Container>
    )
}
export default HomePage;