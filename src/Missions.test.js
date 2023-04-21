import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from 'pages/Missions';

jest.mock('features/missions/missionsSlice', () => ({
  fetchMissions: jest.fn(),
  joinMission: jest.fn(),
  leaveMission: jest.fn(),
}));

const mockStore = configureStore([]);

describe('Missions component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missionList: [],
        isLoading: false,
        error: null,
      },
    });
  });

  it('should render loading spinner if missions are loading', () => {
    store = mockStore({
      missions: {
        missionList: [],
        isLoading: true,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const loadingText = screen.getByText('Loading Missions...');

    expect(loadingText).toBeInTheDocument();
  });

  it('should render error message if there is an error', () => {
    store = mockStore({
      missions: {
        missionList: [],
        isLoading: false,
        error: 'An error occurred',
      },
    });

    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const errorText = screen.getByText('An error occurred');

    expect(errorText).toBeInTheDocument();
  });

  it('should render mission list if there are missions', () => {
    store = mockStore({
      missions: {
        missionList: [
          {
            mission_name: 'FalconSat',
            mission_id: 'F1',
            manufacturers: ['SpaceX'],
            payload_ids: ['FalconSat-2'],
            wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
            website: null,
            twitter: null,
            description:
              'FalconSat was the first Falcon 1 rocket launched by SpaceX. The primary mission objective was to achieve Earth orbit with a low-cost rocket.',
          },
          {
            mission_name: 'DemoSat',
            mission_id: 'F2',
            manufacturers: ['SpaceX'],
            payload_ids: ['DemoSAT'],
            wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
            website: null,
            twitter: null,
            description:
              'Demostat was the second Falcon 1 rocket launched by SpaceX, and the first to reach orbit. Its primary mission objective was to deploy a payload mass simulator into orbit.',
          },
        ],
        isLoading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const mission1Name = screen.getByText('FalconSat');
    const mission2Name = screen.getByText('DemoSat');
    const joinMissionButtons = screen.getAllByText('JOIN MISSION');

    expect(mission1Name).toBeInTheDocument();
    expect(mission2Name).toBeInTheDocument();
    expect(joinMissionButtons.length).toBe(4);
  });
});
