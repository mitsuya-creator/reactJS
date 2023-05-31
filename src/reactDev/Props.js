import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Profile({ children }) {
  return (
    <Card style={{ width: '18rem', height: '10rem' }} className="my-4 mx-2">
      {children}
    </Card>
  );
}
export default Profile;