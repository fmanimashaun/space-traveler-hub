import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from 'features/missions/missionsSlice';
import LoadingSpinner from 'components/LoadingSpinner';
import Styles from 'assets/scss/missions.module.scss';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Missions = () => {
  const { missionList, isLoading, error } = useSelector(
    (state) => state.missions,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionList.length === 0 && !isLoading && !error) {
      dispatch(fetchMissions());
    }
  }, [dispatch, error, isLoading, missionList]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (
    <>
      {isLoading && (
        <div className={Styles.missions__loading}>
          <LoadingSpinner />
          <p>Loading Missions...</p>
        </div>
      )}
      {!isLoading && error && <p className={Styles.missions__error}>{error}</p>}
      {!isLoading && !error && (
        <div className={Styles.missions}>
          <Table striped bordered responsive="sm">
            <thead>
              <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {missionList.map((mission) => (
                <tr key={mission.id}>
                  <td data-title="Mission">
                    <strong>{mission.name}</strong>
                  </td>
                  <td data-title="Description">{mission.description}</td>
                  <td className="align-middle" data-title="Status">
                    {mission.reserved ? (
                      <Badge bg="success">Active Member</Badge>
                    ) : (
                      <Badge bg="secondary">NOT A MEMBER</Badge>
                    )}
                  </td>
                  <td className="align-middle">
                    {mission.reserved ? (
                      <Button
                        variant="outline-danger"
                        className="text-nowrap"
                        onClick={() => handleLeaveMission(mission.id)}
                      >
                        LEAVE MISSION
                      </Button>
                    ) : (
                      <Button
                        variant="outline-success"
                        className="text-nowrap"
                        onClick={() => handleJoinMission(mission.id)}
                      >
                        JOIN MISSION
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Missions;
