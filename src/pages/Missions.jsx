import React from 'react';
import Styles from 'assets/scss/missions.module.scss';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Missions = () => (
  <div id="no-more-tables" className={Styles.missions}>
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
        <tr>
          <td data-title="Mission">
            <strong>Thaicom</strong>
          </td>
          <td data-title="Description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            suscipit. Porro beatae dolorem ipsa corporis dignissimos asperiores
            suscipit voluptate temporibus? Aut obcaecati a fugiat quibusdam ab
            voluptas, laboriosam necessitatibus velit? Natus rem necessitatibus
            dignissimos fugiat asperiores facilis perspiciatis nisi officiis
            exercitationem doloremque sapiente illum vitae cum inventore
            consectetur vero, repellat explicabo repellendus sed mollitia cumque
            delectus? Id accusamus dolorem minus!
          </td>
          <td className="align-middle" data-title="Status">
            <Badge bg="secondary">NOT A MEMBER</Badge>
          </td>
          <td className="align-middle">
            <Button variant="outline-success" className="text-nowrap">
              JOIN MISSION
            </Button>
          </td>
        </tr>
        <tr>
          <td data-title="Mission">
            <strong>Telstart</strong>
          </td>
          <td data-title="Description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, placeat illo laborum dolore iusto consequuntur velit
            esse, officiis rerum nihil illum nulla sunt. Non sapiente nulla sunt
            dolores, excepturi quisquam! Quisquam inventore ad ex error, labore
            enim iure molestiae expedita modi. Harum, delectus debitis sint
            natus vel quaerat nemo tenetur placeat iusto nihil cumque quasi.
            Culpa earum quis maxime praesentium!
          </td>
          <td className="align-middle" data-title="Status">
            <Badge bg="success">Active Member</Badge>
          </td>
          <td className="align-middle">
            <Button variant="outline-danger" className="text-nowrap">
              LEAVE MISSION
            </Button>
          </td>
        </tr>
        <tr>
          <td data-title="Mission">
            <strong>Iridium NEXT</strong>
          </td>
          <td data-title="Description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            nesciunt porro voluptate iusto magni enim quas aliquam minima dolor
            voluptates ducimus. Modi adipisci temporibus doloribus consequatur
            ab quae animi in? Aperiam voluptatibus velit ullam expedita officia
            blanditiis eligendi ut ipsa saepe provident modi perferendis,
            debitis itaque? Culpa fugiat nobis corrupti laudantium quaerat
            minima sequi consectetur amet? Architecto atque cupiditate
            reprehenderit. Iure consectetur doloribus voluptatibus qui, autem
            consequatur mollitia beatae ut unde impedit distinctio aspernatur
            nihil error sint eveniet nemo eos fugiat quod quibusdam soluta at
            possimus blanditiis ipsa doloremque? Nihil. Officia numquam pariatur
            eligendi inventore. Magni, animi corporis sint fuga in ipsa
            assumenda. Veritatis nostrum quos, tenetur sapiente consequuntur
            autem animi sint. Asperiores, praesentium soluta quisquam officiis
            optio saepe error. Cum sequi facilis voluptate doloribus, fugiat
            natus eum molestias ipsa aliquid tempore, modi porro! Suscipit
            aperiam tenetur expedita, itaque repellendus dicta soluta quo dolor
            deleniti sapiente culpa velit qui fugit.
          </td>
          <td className="align-middle" data-title="Status">
            <Badge bg="secondary">NOT A MEMBER</Badge>
          </td>
          <td className="align-middle">
            <Button variant="outline-success" className="text-nowrap">
              JOIN MISSION
            </Button>
          </td>
        </tr>
        <tr>
          <td data-title="Mission">
            <strong>Commercial Resupply Services</strong>
          </td>
          <td data-title="Description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam mollitia quae obcaecati fugit quaerat, dicta ipsum sint
            atque porro. Inventore nam est mollitia placeat temporibus quis rem
            blanditiis quae. Consectetur distinctio temporibus quidem dolorem
            nostrum in repudiandae dicta qui consequuntur doloribus possimus
            architecto saepe cupiditate, a labore. Totam nihil praesentium ex
            voluptatem, ab explicabo veniam natus error veritatis
            necessitatibus. Amet accusantium aliquid accusamus quos neque autem
            dolorum odit reprehenderit dignissimos iusto aliquam, itaque fuga
            nobis? Dicta, nam, suscipit delectus doloribus aspernatur ducimus
            vero porro a beatae similique iusto et.
          </td>
          <td className="align-middle" data-title="Status">
            <Badge bg="success">Active Member</Badge>
          </td>
          <td className="align-middle">
            <Button variant="outline-danger" className="text-nowrap">
              LEAVE MISSION
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default Missions;
