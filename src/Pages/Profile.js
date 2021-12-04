import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import BookContext from "../utlis/BookContext";

function Profile() {
    const {profile}=useContext(BookContext)
    return ( <>
     <Row>
        <Col md="6">
          <Card>
            <Card.Img variant="top" src={profile.avatar} />
            <Card.Body>
              <Card.Title>
                {profile.firstName} {profile.lastName}
              </Card.Title>
              <Card.Text>{profile.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </> );
}

export default Profile;