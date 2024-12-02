import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
 
const GoogleLoginComponent = () => {
  useEffect(() => {
	function start() {
      gapi.client.init({
    	clientId: 'your_google_client_id',
    	scope: 'email',
  	});
	}
 
	gapi.load('client:auth2', start);
  }, []);
 
  const onSignIn = (googleUser) => {
	const profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId());
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail());
  };
 
  return (
	<div className="g-signin2" data-onsuccess="onSignIn"></div>
  );
};
 
export default GoogleLoginComponent;
