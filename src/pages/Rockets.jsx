import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocketAction } from './RocketSlice';
import './rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

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
              <img className="rocket-image" src={rocket.flickr_images} alt={rocket.rocket_name} />
            </div>
            <div className="information-container">
              <h2>{rocket.name}</h2>
              {rocket.reserved && <div className="badge">Reserved</div>}
              <p>{rocket.description}</p>
              <button
                aria-label="reserve-rocket"
                type="button"
                value="Reserve Rocket"
                className={`reserve-rocket${rocket.reserved ? 'reserved' : 'cancelled'}`}
                onClick={() => dispatch(reserveRocketAction({ id: rocket.id }))}
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rockets;
