import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Profile({person, sizeImg = 100 }) {
  return (
    <Card style={{ width: '18rem' }} className="my-4 mx-2">
    <div style={{width: '18rem'}} className="d-flex justify-content-center">
      <img src={person.imgUrl} width={sizeImg} height={sizeImg} className="rounded-circle mx-1 my-2"/>
      </div>
      <Card.Body>
        <Card.Title className="text-center">{person.title}</Card.Title>
        <Card.Text className="text-center">
          {person.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Profile;