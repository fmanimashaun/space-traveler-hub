import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from 'features/missions/missionsSlice';
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
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <div className={Styles.missions__loading}>
          <LoadingSpinner />
          <p>Loading Missions...</p>
        </div>
      )}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && (
        <div className={Styles.missions}>
          <Table striped bordered responsive="sm">
            <thead>
              <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {missionList.map((mission) => (
                <tr key={mission.mission_id}>
                  <td data-title="Mission">
                    <strong>{mission.mission_name}</strong>
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
                      <Button variant="outline-danger" className="text-nowrap">
                        LEAVE MISSION
                      </Button>
                    ) : (
                      <Button variant="outline-success" className="text-nowrap">
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
