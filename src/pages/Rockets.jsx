import React, { useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import LoadingSpinner from 'components/LoadingSpinner';
import Styles from 'assets/scss/rockets.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  reserveRocketAction,
  fetchRockets,
} from 'features/rockets/rocketsSlice';

const Rockets = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0 && status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [dispatch, status, rockets]);

  return (
    <>
      <Container className={Styles.rockets}>
        {status === 'loading' && (
          <div className={Styles.rockets__loading}>
            <LoadingSpinner />
            <p>Loading Rockets...</p>
          </div>
        )}
        {status === 'failed' && <p>{error}</p>}
        {status === 'succeeded' && (
          <div className={Styles.rockets__list}>
            {rockets.map((rocket) => (
              <Card key={rocket.id} className="border-0">
                <div className={`d-md-flex ${Styles.rockets__card}`}>
                  <Card.Img
                    src={rocket.flickr_images}
                    alt={rocket.rocket_name}
                    className={`${Styles.rockets__img} rounded-0`}
                  />
                  <Card.Body className="p-0 d-flex flex-column align-items-start">
                    <Card.Title as="h2" className={Styles.rockets__title}>
                      {rocket.name}
                    </Card.Title>
                    <Card.Text className="mb-auto">
                      {rocket.reserved && <Badge bg="success">Reserved</Badge>}
                      {rocket.description}
                    </Card.Text>
                    {!rocket.reserved ? (
                      <Button
                        variant="primary"
                        type="button"
                        onClick={() => dispatch(reserveRocketAction(rocket.id))}
                        className={Styles.rockets__btn}
                      >
                        Reserve Rocket
                      </Button>
                    ) : (
                      <Button
                        variant="outline-secondary"
                        type="button"
                        onClick={() => dispatch(reserveRocketAction(rocket.id))}
                        className={Styles.rockets__btn}
                      >
                        Cancel Reservation
                      </Button>
                    )}
                  </Card.Body>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default Rockets;
