import { useSelector } from 'react-redux';
import { selectRockets } from './RocketSlice';

const ReservedRockets = () => {
  const reservedRockets = useSelector(selectRockets);

  return (
    <>
      {reservedRockets.length > 0 ? (
        <div>
          <h2>My Rockets</h2>
          <ul>
            {reservedRockets.map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No rockets reserved.</div>
      )}
    </>
  );
};

export default ReservedRockets;
