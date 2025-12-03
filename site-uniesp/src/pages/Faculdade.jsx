import React from 'react'
import { Card, Container, Col, Row} from 'react-bootstrap'

const Faculdade = () => {
  return (
    <Container className="py-4">
      <h2 className="mb-4"> A Faculdade</h2>
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <p>A Faculdade Uniesp é boa!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam eligendi pariatur perspiciatis dolorum repudiandae quis, aut temporibus consequuntur ab officia odio, mollitia vero similique ad totam at doloremque vel saepe.</p>
        </Card.Body>

      </Card>
 <Row className="g-4">
            <Col md={4}>
                <Card className="text-center h-100 shadow-sm"> 
                    <Card.Img 
                        variant="top"
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786" 
                        alt="Vida no Campus"
                        style={{height: '200px', objectFit: 'cover'}}
                    />
                      <Card.Body>
                        <Card.Title> Vida no Campus </Card.Title>
                        <Card.Text> Um ambiente vibrante e acolhedor, com atividades... </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="text-center h-100 shadow-sm"> 
                    <Card.Img 
                        variant="top"
                        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc" 
                        alt="Biblioteca"
                        style={{height: '200px', objectFit: 'cover'}}
                    />
                    <Card.Body>
                        <Card.Title> Bibiloteca </Card.Title>
                        <Card.Text> Uma biblioteca com um acervo completo e atualizado, incluindo livros, revistas, e recursos digitais para pesquisa e estudo. </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="text-center h-100 shadow-sm"> 
                    <Card.Img 
                        variant="top"
                        src="https://images.unsplash.com/photo-1652974731232-efc86a9bd985" 
                        alt="Prédio Principal"
                        style={{height: '200px', objectFit: 'cover'}}
                    />
                      <Card.Body>
                        <Card.Title> Prédio Principal </Card.Title>
                        <Card.Text> O centro de nossa instituição, com salas de aula modernas e laboratórios equipados para atender às necessidades dos cursos. </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>   
    </Container>
  )
}

export default Faculdade