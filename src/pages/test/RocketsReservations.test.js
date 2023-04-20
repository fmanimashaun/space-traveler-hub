import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PropTypes from 'prop-types';

const ReservedRockets = ({ reservedRockets }) => (
  <>
    { reservedRockets.length > 0 ? (
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

ReservedRockets.propTypes = {
  reservedRockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

test('renders reserved rockets', () => {
  const reservedRockets = [
    { id: 'falcon1', name: 'Falcon 1' },
    { id: 'falcon9', name: 'Falcon 9' },
  ];

  render(<ReservedRockets reservedRockets={reservedRockets} />);

  const heading = screen.queryByText('My Rockets');
  expect(heading).not.toBeNull();

  reservedRockets.forEach((rocket) => {
    const rocketElement = screen.getByText(rocket.name);
    expect(rocketElement).toBeInTheDocument();
  });
});
