import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const projects = [{
    id: 1,
    title: 'final project'
}];//mimicks a database that i'm pulling projects from

const Contact = () => {
    return (
        <Container>
          <div className='contactForm d-flex justify-content-center strangeFruit'>
              <div className='card translucentBlackground border borderSoChic col-sm-10 col-md-10 col-lg-7'>
                  <div className='card-body shadow'>
                        <h5 className='card-title'>
                          Denny da Vjncj
                        </h5>
                        <h6 className='card-subtitle mb-2 text-muted'>
                            software engineer slash creative
                        </h6>
                        <footer>
                            <p className='card-text vividAffinity'>
                                Specializing in the full array of eCommerce, consultation and web development
                            </p>
                            <a href='mailto:daVjncjCode@gmail.com' className='card-link vividAffinity'>
                                eMail me
                            </a>
                            <a href="https://www.linkedin.com/in/ambiguousambition/" className="card-link vividAffinity" target="_blank">
                                LinkedIn
                            </a>
                            <a href="https://github.com/DennyDaVjncj" className="card-link vividAffinity" target="_blank">
                                GitHub
                            </a>
                            <a href="https://docs.google.com/document/d/1cRtQeS3qn5lb1JMlFMxnHqdG7yryx9v57Vuq22bQHsA/edit?usp=sharing" className="card-link vividAffinity" target="_blank">
                                Resume
                            </a>
                        </footer>
                        <br/>
                        <h2>
                            call me:
                        </h2>
                        <aside>
                            407.732.8899
                        </aside>
                  </div>
              </div>
          </div>
        </Container>
    )
}
export default Contact;