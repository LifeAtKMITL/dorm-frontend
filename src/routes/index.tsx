import Loading from 'components/loading';
import React, { lazy, Suspense } from 'react';
import { Routes as Router, Route } from 'react-router-dom';

const Start = lazy(() => import('pages/start'));
const Home = lazy(() => import('pages/home/home'));
const Custom = lazy(() => import('pages/custom'));
const Dorm = lazy(() => import('pages/dorm/dorm'));
const Sort = lazy(() => import('pages/sort/sort'));

const Routes = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Router>
        <Route path='/' element={<Start />} />
        <Route path='dorm/:id' element={<Dorm />} />
        <Route path='home/custom' element={<Custom />} />
        <Route path='home' element={<Home />} />
        <Route path='sort' element={<Sort />} />
      </Router>
    </Suspense>
  );
};

export default Routes;
