import React, { lazy, Suspense } from 'react';
import { Routes as Router, Route } from 'react-router-dom';

const Start = lazy(() => import('pages/start'));
const Home = lazy(() => import('pages/home'));

const Routes = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router>
        <Route path='/' element={<Start />} />
        <Route path='home' element={<Home />} />
      </Router>
    </Suspense>
  );
};

export default Routes;
