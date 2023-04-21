import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Reserved from 'components/Reserved';

const MyProfile = () => {
  const { reservedMissions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <Reserved
              title="Rockets"
              arr={reservedRockets}
              idKey="id"
              nameKey="name"
            />
          </Col>
          <Col lg={6}>
            <Reserved
              title="Missions"
              arr={reservedMissions}
              idKey="mission_id"
              nameKey="mission_name"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyProfile;
