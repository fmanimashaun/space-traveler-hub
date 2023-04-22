import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const reservedRockets = useSelector(
    (state) => state.rockets.rockets.filter((rocket) => rocket.reserved),
  );

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
