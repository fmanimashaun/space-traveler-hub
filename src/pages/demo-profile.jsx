import React from 'react';
import { useSelector } from 'react-redux';
import { Stack } from 'react-bootstrap';
import Reserved from 'components/Reserved';

const MyProfile = () => {
  const { reservedMissions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <>
      <Stack gap={5} direction="horizontal">
        <Reserved
          title="Rockets"
          arr={reservedRockets}
          idKey="id"
          nameKey="name"
        />
        <Reserved
          title="Missions"
          arr={reservedMissions}
          idKey="mission_id"
          nameKey="mission_name"
        />
      </Stack>
    </>
  );
};

export default MyProfile;
