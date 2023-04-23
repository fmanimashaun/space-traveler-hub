import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import Styles from 'assets/scss/reservedTable.module.scss';

const Reserved = ({ title, arr }) => {
  const titleName = title === 'Rockets' ? 'rocket' : 'mission';

  return (
    <div className="flex-fill">
      <h2 className={titleName}>{`My ${title}`}</h2>
      <div className={Styles.roundedborder}>
        {arr.length > 0 ? (
          <Table className="mb-0">
            <tbody>
              {arr.map((item) => (
                <tr key={item.id}>
                  <td className="pt-3 pb-4 ps-3 pe-3">{item.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p className="text-center pt-3 pb-4 ps-3 pe-3 mb-0">{`No reserved ${title}`}</p>
        )}
      </div>
    </div>
  );
};

Reserved.propTypes = {
  title: PropTypes.string.isRequired,
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Reserved;
