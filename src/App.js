import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {

  const [users, setUsers] = useState([]);

  const [DATA, setDATA] = useState([])

  const [isLoggedin, setIsLoggedin] = useState(false);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem('todos', JSON.stringify(json))
        setUsers(json)
      });
    }, []);
    useEffect(() => {
    const storageUsers = JSON.parse(localStorage.getItem('todos')) || [];
    const storedDATA = JSON.parse(localStorage.getItem('logged')) || []
    if(storedDATA.length !== 0){
      setDATA(storedDATA) 
      setUsers(storageUsers);
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false)
    } }, []);

const image = [
    {photo:'https://images.unsplash.com/photo-1601583789200-96cd7f385315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',},
    {photo:'https://images.unsplash.com/photo-1580281658626-ee379f3cce93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',},
    {photo:'https://images.unsplash.com/photo-1625498542602-6bfb30f39b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',},
    {photo:'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',},
    {photo:'https://images.unsplash.com/photo-1625498542638-858fb4848fa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=830&q=80',},
    {photo:'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',},
    {photo:'https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',},
    {photo:'https://images.unsplash.com/photo-1592947945242-69312358628b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80',},
    {photo:'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80',},
    {photo:'https://images.unsplash.com/photo-1614608682468-f0e22796f633?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',},
  ];


  users.forEach( (user, index) => {
    user.photo = image[index].photo
  })



  const loginHandler = (username, email, password) => {
    let data = {
      username: username,
      email: email,
      password: password,
    }
    localStorage.setItem('logged', JSON.stringify([data]))
    setDATA([data])
    setIsLoggedin(true);
  };

  const logoutHandler = () => {
    setIsLoggedin(false); 
  };

  return (
    <div className="App">
      {!isLoggedin && <Login onLogin={loginHandler} />}
      {isLoggedin && (
        <Home onLogout={logoutHandler} setIsLoggedin={setIsLoggedin} DATA={users} />
      )}
    </div>
  );
}

export default App;
