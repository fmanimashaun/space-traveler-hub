import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from './RocketSlice';

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
      <h1>Rocket page</h1>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <h2>{rocket.rocket_name}</h2>
          <p>{rocket.description}</p>
          <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
        </div>
      ))}
    </>
  );
};

export default Rockets;
