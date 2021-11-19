import React, { useState } from 'react';
import classes from './Home.module.css';
import Card from '../UI/Card/Card';
import ModalOverlay from '../UI/Modal/Modal';

const Home = (props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card>
        <div className={classes.container}>
          <div className={classes.header}>
            <h2> FREE Psychological Aid Fund</h2>
            <button onClick={props.onLogout}>Logout</button>
          </div>

          <div className={classes.content}>
            {props.DATA.map((user) => {
              return (
                <ul className={classes.lists}>
                  <div>
                    <img src={user.photo} />
                  </div>
                  <div>
                    <li>Dr.{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.address.city}</li>
                    <li>{user.address.zipcode}</li>
                    <li>{user.website}</li>
                    <li
                      style={{ color: 'blue', cursor: 'pointer' }}
                      onClick={() => {
                        setOpenModal(true);
                      }}
                    >
                      📞 {user.phone}
                    </li>
                  </div>
                  {openModal && <ModalOverlay closeModal={setOpenModal} />}
                </ul>
              );
            })}
          </div>
        </div>
      </Card>
    </>
  );
};

export default Home;
