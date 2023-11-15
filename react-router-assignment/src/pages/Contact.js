import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const CardHeader=()=> {
  return (
    <>
    <Card>
      <Card.Header>Contact</Card.Header>
      <Card.Body>
        <Card.Text>
          In this page you can find my contact information.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '96rem' , paddingTop:'50px'}}>
      <ListGroup variant="flush">
        <ListGroup.Item>apeai001@edu.xamk.fi</ListGroup.Item>
      </ListGroup>
    </Card>
    </>
  );
}
export default CardHeader;