import React from 'react';
import Home from '../Home/Home';
import Header from '../../components/Layout/Header';

export default function Layout() {
  return (
    <div>
      <Header />
      <Home />
      <footer>this is the footer</footer>
    </div>
  );
}
