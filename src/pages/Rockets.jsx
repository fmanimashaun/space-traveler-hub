import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRockets,
  reserveRocketAction,
} from '../features/rockets/rocketsSlice';
import './rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, status, error } = useSelector((state) => state.rockets);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <>
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
              <p>{rocket.description}</p>
              <button
                aria-label="reserve-rocket"
                type="button"
                value="Reserve Rocket"
                className="reserve-rocket"
                onClick={() => dispatch(reserveRocketAction(rocket.id))}
              >
                Reserve Rocket
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rockets;
