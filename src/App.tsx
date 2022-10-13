import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './components/page-layout/page-layout';
import Wrapper from './components/wrapper/wrapper';
import HomePage from './pages/home/home-page';
import PeoplePage from './pages/people/people-page';
import NotFound from './pages/not-found/not-found';
import PlanetsPage from './pages/planets/planets-page';
import StarshipsPage from './pages/starships/starships-page';

export const App = () => (
  <PageLayout title="title" description="description">
    <Routes>
      <Route
        path="/"
        element={
          <Wrapper>
            <HomePage />
          </Wrapper>
        }
      />
      <Route
        path="/people/:id"
        element={
          <Wrapper>
            <PeoplePage />
          </Wrapper>
        }
      />
      <Route
        path="/planets/:id"
        element={
          <Wrapper>
            <PlanetsPage />
          </Wrapper>
        }
      />
      <Route
        path="/starships/:id"
        element={
          <Wrapper>
            <StarshipsPage />
          </Wrapper>
        }
      />
      <Route
        path="*"
        element={
          <Wrapper>
            <NotFound />
          </Wrapper>
        }
      />
    </Routes>
  </PageLayout>
);
