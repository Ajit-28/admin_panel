import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

import Header from './components/Header'
import SideBar from './components/SideBar';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <Main />
      <Footer />
    </div>
  )
}


// for start the json server to get the data
// ------------------------------------------

// json-server --watch --port 4000 ./api/info.json
// --watch/-w can be omitted, JSON Server 1+ watches for file changes by default
// JSON Server started on PORT :4000
// Press CTRL-C to stop
// Watching ./api/info.json...

// Index:
// http://localhost:4000/

// Static files:
// Serving ./public directory if it exists

// Endpoints:
// http://localhost:4000/cards
// http://localhost:4000/news
// http://localhost:4000/topselling
// http://localhost:4000/recentsales
// http://localhost:4000/recentactiviy
