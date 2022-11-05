import React, { lazy, Suspense } from 'react';
import { Routes as Router, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/home/home'));
const Custom = lazy(() => import('pages/custom/custom'));
const Dorm = lazy(() => import('pages/dorm/dorm'));
const Sort = lazy(() => import('pages/sort/sort'));

const Routes = () => {
  return (
    <Suspense>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='dorm' element={<Dorm />} />
        <Route path='custom' element={<Custom />} />
        <Route path='sort' element={<Sort />} />
      </Router>
    </Suspense>
  );
};

export default Routes;