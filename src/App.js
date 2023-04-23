import React from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Rockets from 'pages/Rockets';
import Missions from 'pages/Missions';
import MyProfile from 'pages/MyProfile';
import ErrorPage from 'pages/ErrorPage';

const App = () => (
  <>
    <Container>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </Container>
  </>
);

export default App;
