import React from 'react';
import { GoogleLogin } from 'react-google-login';
import googleLogo from '../Assets/google.png'; // Adjust the path if needed

const clientId = "819262005520-msa18mh5pbdk44q5re2q7vhjfeie163s.apps.googleusercontent.com"; // Replace with your actual Google Client ID

const OAuth = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      render={(renderProps) => (
        <button
          className="oauth-button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            border: '1px solid #cccccc',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          <img src={googleLogo} alt="Google logo" style={{ marginRight: '10px', width: '20px', height: '20px' }} />
          Continue with Google
        </button>
      )}
    />
  );
};

export default OAuth;
