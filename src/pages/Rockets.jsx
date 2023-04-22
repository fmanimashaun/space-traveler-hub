import React, { useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import LoadingSpinner from 'components/LoadingSpinner';
import Styles from 'assets/scss/rockets.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  reserveRocketAction,
  fetchRockets,
} from 'features/rockets/rocketsSlice';
import './rockets.css';

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
      {status === 'loading' && (
        <div className={Styles.rockets__loading}>
          <LoadingSpinner />
          <p>Loading Rockets...</p>
        </div>
      )}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && (
        <div className="rocket-cards">
          {rockets.map((rocket) => (
            <div key={rocket.id} className="card-item">
              <div className="image-container">
                <img
                  className="rocket-image"
                  src={rocket.flickr_images}
                  alt={rocket.rocket_name}
                />
              </div>
              <div className="information-container">
                <h2>{rocket.name}</h2>
                <p>
                  {rocket.reserved && <Badge bg="success">Reserved</Badge>}
                  {rocket.description}
                </p>
                {!rocket.reserved ? (
                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => dispatch(reserveRocketAction(rocket.id))}
                  >
                    Reserve Rocket
                  </Button>
                ) : (
                  <Button
                    variant="outline-secondary"
                    type="button"
                    onClick={() => dispatch(reserveRocketAction(rocket.id))}
                  >
                    Cancel Reservation
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Rockets;
