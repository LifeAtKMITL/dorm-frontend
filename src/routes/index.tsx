import React, { lazy, Suspense } from 'react';
import { Routes as Router, Route } from 'react-router-dom';

const Start = lazy(() => import('pages/start'));
const Home = lazy(() => import('pages/home/home'));
const Custom = lazy(() => import('pages/custom/custom'));
const Dorm = lazy(() => import('pages/dorm/dorm'));
const Sort = lazy(() => import('pages/sort/sort'));

const Routes = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router>
        <Route path='/' element={<Start />} />
        <Route path='dorm' element={<Dorm />} />
        <Route path='custom' element={<Custom />} />
        <Route path='home' element={<Home />} />
        <Route path='sort' element={<Sort />} />
      </Router>
    </Suspense>
  );
};

export default Routes;
