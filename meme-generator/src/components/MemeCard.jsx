import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MemeCard({ img, title }) {
  const navigate = useNavigate();  // ✅ Fixed typo in useNavigate()

  return (
    <Card style={{ width: '18rem', margin: '25px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button 
          onClick={() => navigate(`/edit?url=${encodeURIComponent(img)}`)} // ✅ Correct URL format
          variant="primary"
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MemeCard;
