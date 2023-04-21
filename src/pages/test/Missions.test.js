import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from 'pages/Missions';

const mockStore = configureStore([]);

describe('Missions component', () => {
  it('should render loading spinner if missions are loading', () => {});

  it('should render error message if there is an error', () => {});

  it('should render mission list if there are missions', () => {});
});
