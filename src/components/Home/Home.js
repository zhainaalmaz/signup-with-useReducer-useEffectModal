import React, { useState, useEffect } from 'react';
import classes from './Home.module.css';
import Card from '../UI/Card/Card';

const Home = (props) => {
  // const photo = image.map((item, index) => {
  //   return <img src={item.photo} />;
  // });

  console.log(props.DATA);

  return (
    <>
      <Card>
        <div className={classes.container}>
          <div className={classes.header}>
            <h2>Welcome to our FREE Psychological Aid Fund</h2>
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
                    <li>📞 {user.phone}</li>
                  </div>
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
