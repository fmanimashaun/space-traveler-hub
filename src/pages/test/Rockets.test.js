import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PropTypes from 'prop-types';

const Rockets = ({ rockets }) => (
  <>
    <div className="rocket-cards">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="card-item">
          <div className="image-container">
            <img className="rocket-image" src={rocket.flickr_images} alt={rocket.rocket_name} />
          </div>
          <div className="information-container">
            <h2>{rocket.name}</h2>
            <p>
              {rocket.reserved && <span className="badge">Reserved</span>}
              {rocket.description}
            </p>
            <button
              aria-label="reserve-rocket"
              type="button"
              value="Reserve Rocket"
              className={`reserve-rocket${rocket.reserved ? 'reserved' : 'cancelled'}`}
              onClick={() => (({ id: rocket.id }))}
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </div>
  </>
);

Rockets.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
      flickr_images: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

test('renders rockets', () => {
  const rockets = [
    {
      id: 'falcon1', name: 'Falcon 1', reserved: false, description: 'Small launcher', flickr_images: 'https://www.example.com/falcon1.jpg',
    },
    {
      id: 'falcon9', name: 'Falcon 9', reserved: true, description: 'Large launcher', flickr_images: 'https://www.example.com/falcon9.jpg',
    },
  ];

  render(<Rockets rockets={rockets} />);

  rockets.forEach((rocket) => {
    const rocketElement = screen.getByText(rocket.name);
    expect(rocketElement).toBeInTheDocument();
  });
});
