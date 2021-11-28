import AddOst from './AddOst'
import { Navigation, SharedForms } from './SharedForms'
import { Container, Row, Col } from 'react-bootstrap'

export default function OstAdd () {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Navigation title='Add' />
        </Col>
        <Col xs={10}>
          <AddOst />
          <SharedForms />
        </Col>
      </Row>
    </Container>
  )
}
