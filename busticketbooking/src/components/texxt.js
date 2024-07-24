import React from 'react';

const HomePage = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f5f5f5',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '20px 0',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  };

  const featureContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const featureStyle = {
    width: '30%',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to SAFEGO</h1>
      <p style={paragraphStyle}>Your one-stop solution for hassle-free bus ticket booking.</p>

      <div style={featureContainerStyle}>
        <div style={featureStyle}>
          <h2>Easy Booking</h2>
          <p>Book your bus tickets in just a few clicks with our user-friendly interface.</p>
        </div>

        <div style={featureStyle}>
          <h2>Wide Network</h2>
          <p>Explore a vast array of routes and bus operators across the region.</p>
        </div>

        <div style={featureStyle}>
          <h2>Best Deals</h2>
          <p>Enjoy competitive prices, exclusive discounts, and special offers.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
