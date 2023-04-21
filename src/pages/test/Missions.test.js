import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from 'pages/Missions';

const mockStore = configureStore([]);

describe('Missions component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missionList: [
          {
            id: 'mission1',
            name: 'Mission 1',
            description: 'Description for Mission 1',
            reserved: true,
          },
          {
            id: 'mission2',
            name: 'Mission 2',
            description: 'Description for Mission 2',
            reserved: false,
          },
        ],
        isLoading: false,
        error: null,
      },
    });
  });

  it('should render loading spinner if missions are being fetched', () => {
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

    expect(screen.getByText('Loading Missions...')).toBeInTheDocument();
  });

  it('should render error message if fetching missions failed', () => {
    store = mockStore({
      missions: {
        missionList: [],
        isLoading: false,
        error: 'Failed to fetch missions',
      },
    });

    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Failed to fetch missions')).toBeInTheDocument();
  });

  it('should render mission list if missions are fetched successfully', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Description for Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Mission 2')).toBeInTheDocument();
    expect(screen.getByText('Description for Mission 2')).toBeInTheDocument();
  });

  it('should show active member badge for reserved missions', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Active Member')).toBeInTheDocument();
    expect(screen.getByText('NOT A MEMBER')).toBeInTheDocument();
  });

  it('should dispatch joinMission action when Join Mission button is clicked', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const joinMissionButton = screen.getByText('JOIN MISSION');
    fireEvent.click(joinMissionButton);

    await waitFor(() =>
      expect(store.getActions()).toContainEqual({
        type: 'missions/joinMission/pending',
        meta: {
          arg: expect.any(String),
          requestId: expect.any(String),
          requestStatus: 'pending',
        },
      }),
    );
  });

  it('should dispatch leaveMission action when Leave Mission button is clicked', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const leaveMissionButton = screen.getByText('LEAVE MISSION');
    fireEvent.click(leaveMissionButton);

    await waitFor(() =>
      expect(store.getActions()).toContainEqual({
        type: 'missions/leaveMission/pending',
        meta: {
          arg: expect.any(String),
          requestId: expect.any(String),
          requestStatus: 'pending',
        },
      }),
    );
  });
});
