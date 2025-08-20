import React from 'react';
import './SignIn.css';

const SignInPage = () => {
  return (
    <div className="signin-page">
      <div className="background-overlay">
        <div className="signin-card">
          {/* Logo/Icon */}
          <div className="logo-container">
            <svg 
              className="logo-icon" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4.11743 5.20853C4.11743 4.90543 4.23784 4.61474 4.45217 4.40042C4.66649 4.18609 4.95719 4.06567 5.26029 4.06567H18.9746C19.2777 4.06567 19.5684 4.18609 19.7827 4.40042C19.997 4.61474 20.1175 4.90543 20.1175 5.20853V7.49425C20.1175 7.79735 19.997 8.08804 19.7827 8.30237C19.5684 8.5167 19.2777 8.6371 18.9746 8.6371H5.26029C4.95719 8.6371 4.66649 8.5167 4.45217 8.30237C4.23784 8.08804 4.11743 7.79735 4.11743 7.49425V5.20853ZM4.11743 12.0657C4.11743 11.7626 4.23784 11.4718 4.45217 11.2576C4.66649 11.0432 4.95719 10.9228 5.26029 10.9228H12.1175C12.4205 10.9228 12.7113 11.0432 12.9256 11.2576C13.1399 11.4718 13.2603 11.7626 13.2603 12.0657V18.9228C13.2603 19.2259 13.1399 19.5166 12.9256 19.7309C12.7113 19.9452 12.4205 20.0657 12.1175 20.0657H5.26029C4.95719 20.0657 4.66649 19.9452 4.45217 19.7309C4.23784 19.5166 4.11743 19.2259 4.11743 18.9228V12.0657ZM16.6889 10.9228C16.3858 10.9228 16.0951 11.0432 15.8808 11.2576C15.6664 11.4718 15.546 11.7626 15.546 12.0657V18.9228C15.546 19.2259 15.6664 19.5166 15.8808 19.7309C16.0951 19.9452 16.3858 20.0657 16.6889 20.0657H18.9746C19.2777 20.0657 19.5684 19.9452 19.7827 19.7309C19.997 19.5166 20.1175 19.2259 20.1175 18.9228V12.0657C20.1175 11.7626 19.997 11.4718 19.7827 11.2576C19.5684 11.0432 19.2777 10.9228 18.9746 10.9228H16.6889Z" 
                fill="white"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="signin-title">Sign in to LeadFlow</h1>

          {/* Subtitle */}
          <p className="signin-subtitle">Access your account to manage leads effectively</p>

          {/* Access Type Tabs */}
          <div className="access-tabs">
            <div className="tab-active">
              <span className="tab-text-active">Admin Access</span>
            </div>
            <div className="tab-inactive">
              <span className="tab-text-inactive">User Access</span>
            </div>
          </div>

          {/* Lock Icon */}
          <div className="lock-icon-container">
            <svg 
              className="lock-icon" 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M10 2C11.3261 2 12.5979 2.52678 13.5355 3.46447C14.4732 4.40215 15 5.67392 15 7V8C15.5304 8 16.0391 8.21071 16.4142 8.58579C16.7893 8.96086 17 9.46957 17 10V16C17 16.5304 16.7893 17.0391 16.4142 17.4142C16.0391 17.7893 15.5304 18 15 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8V7C5 5.67392 5.52678 4.40215 6.46447 3.46447C7.40215 2.52678 8.67392 2 10 2ZM13 8V7C13 6.20435 12.6839 5.44129 12.1213 4.87868C11.5587 4.31607 10.7956 4 10 4C9.20435 4 8.44129 4.31607 7.87868 4.87868C7.31607 5.44129 7 6.20435 7 7V8H13Z" 
                fill="#3B82F6"
              />
            </svg>
          </div>

          {/* Administrator Login Section */}
          <h2 className="admin-login-title">Administrator Login</h2>
          <p className="admin-login-subtitle">Sign in with your Facebook account to access admin features</p>

          {/* Facebook Login Button */}
          <button className="facebook-login-btn">
            <svg 
              className="facebook-icon" 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_43_109)">
                <path 
                  d="M20 10.0608C20 4.53829 15.5225 0.060791 10 0.060791C4.4775 0.060791 0 4.53829 0 10.0608C0 15.0525 3.65667 19.1891 8.4375 19.9391V12.9516H5.89833V10.06H8.4375V7.85829C8.4375 5.35246 9.93083 3.96746 12.215 3.96746C13.3083 3.96746 14.4533 4.16329 14.4533 4.16329V6.62412H13.1917C11.9492 6.62412 11.5617 7.39496 11.5617 8.18579V10.0608H14.335L13.8917 12.9525H11.5617V19.94C16.3433 19.1891 20 15.0516 20 10.0608Z" 
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_109">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="facebook-btn-text">Continue with Facebook</span>
          </button>

          {/* Security Feature */}
          <div className="security-feature">
            <div className="security-check-icon">
              <svg 
                className="check-icon" 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M10 3L4.5 8.5L2 6" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="security-content">
              <div className="security-title">Secure Admin Access</div>
              <div className="security-description">Full platform control with Facebook authentication</div>
            </div>
          </div>

          {/* Terms and Privacy */}
          <div className="terms-section">
            <div className="terms-text">
              <span className="terms-normal">By signing in, you agree to our </span>
              <span className="terms-link">Terms of Service</span>
              <span className="terms-normal"> and</span>
            </div>
            <div className="privacy-text">
              <span className="privacy-link">Privacy Policy</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="signup-section">
            <span className="signup-text">Need an account? </span>
            <span className="signup-link">Sign Up</span>
          </div>
        </div>

        {/* Side Info Card */}
        <div className="info-card">
          <div className="info-icon-container">
            <svg 
              className="info-icon" 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M8 1.5C9.06087 1.5 10.0783 1.92143 10.8284 2.67157C11.5786 3.42172 12 4.43913 12 5.5V6.5C12.2652 6.5 12.5196 6.60536 12.7071 6.79289C12.8946 6.98043 13 7.23478 13 7.5V12.5C13 12.7652 12.8946 13.0196 12.7071 13.2071C12.5196 13.3946 12.2652 13.5 12 13.5H4C3.73478 13.5 3.48043 13.3946 3.29289 13.2071C3.10536 13.0196 3 12.7652 3 12.5V7.5C3 7.23478 3.10536 6.98043 3.29289 6.79289C3.48043 6.60536 3.73478 6.5 4 6.5V5.5C4 4.43913 4.42143 3.42172 5.17157 2.67157C5.92172 1.92143 6.93913 1.5 8 1.5ZM10 6.5V5.5C10 4.96957 9.78929 4.46086 9.41421 4.08579C9.03914 3.71071 8.53043 3.5 8 3.5C7.46957 3.5 6.96086 3.71071 6.58579 4.08579C6.21071 4.46086 6 4.96957 6 5.5V6.5H10Z" 
                fill="#3B82F6"
              />
            </svg>
          </div>
          <div className="info-content">
            <div className="info-title">Secure Access</div>
            <div className="info-description">Choose your login method based on your role</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
