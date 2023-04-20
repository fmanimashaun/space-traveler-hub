describe('reserveRocketAction', () => {
  const reserveRocketAction = (state, action) => {
    const id = action.payload.id.toString();
    const updatedRockets = state.rockets.map((rocket) => {
      if (rocket.id === id) {
        return {
          ...rocket,
          reserved: !rocket.reserved,
        };
      }
      return rocket;
    });
    return {
      ...state,
      rockets: updatedRockets,
    };
  };

  it('should update the reserved property of a rocket', () => {
    // Set up initial state
    const initialState = {
      rockets: [
        { id: '1', name: 'Falcon 9', reserved: false },
        { id: '2', name: 'Atlas V', reserved: false },
        { id: '3', name: 'Delta IV', reserved: false },
      ],
    };

    // Create an action to reserve a rocket
    const action = {
      type: 'rockets/reserveRocketAction',
      payload: { id: 2 },
    };

    // Call the reserveRocketAction function with the initial state and action
    const newState = reserveRocketAction(initialState, action);

    // Check that the state was updated correctly
    expect(newState.rockets[1].reserved).toBe(true);

    // Create an action to unreserve a rocket
    const action2 = {
      type: 'RESERVE_ROCKET',
      payload: { id: '1' },
    };

    // Call the reserveRocketAction function with the updated state and action2
    const newState2 = reserveRocketAction(newState, action2);

    // Check that the state was updated correctly
    expect(newState2.rockets[0].reserved).toBe(true);
    expect(newState2.rockets[1].reserved).toBe(true);
    expect(newState2.rockets[2].reserved).toBe(false);
  });
});
