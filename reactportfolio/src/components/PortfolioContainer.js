import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Resume';
import About from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';
import Resume from './pages/Resume';




// styles

import '../styles/header.css';
import '../styles/about.css';
import '../styles/bootstrap.min.css';
import '../styles/footer.css';
import '../styles/about.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='container'>
      {/* We are passing the currentPage from state and the function to update it */}
      <header>
          <Header />
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <footer>
      <Footer/>
      </footer>
     
    </div>
  );
}
