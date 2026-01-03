import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, Lock, User, GraduationCap, Building2, Phone, CheckCircle 
} from 'lucide-react';
import logo from '../assets/images/logo.png';
import './Auth.css';

export default function Auth() {
  const navigate = useNavigate();
  const [step, setStep] = useState('auth');
  const [authMethod, setAuthMethod] = useState(null);
  
  // Form data states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  
  // Error states
  const [errors, setErrors] = useState({});
  
  // Clear error when field is modified
  const clearError = (field) => {
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };
  
  // Email validation
  const validateEmail = (email) => {
    if (!email.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email';
    }
    return null;
  };
  
  // Password validation
  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return null;
  };
  
  // Full name validation
  const validateFullName = (name) => {
    if (!name.trim() || name.trim().length < 2) {
      return 'Full name is required';
    }
    return null;
  };
  
  // Academic year validation
  const validateAcademicYear = (year) => {
    if (!year || year === '') {
      return 'Please select your academic year';
    }
    return null;
  };
  
  // College name validation
  const validateCollegeName = (college) => {
    if (!college.trim() || college.trim().length < 3) {
      return 'College name is required';
    }
    return null;
  };
  
  // Mobile number validation
  const validateMobileNumber = (mobile) => {
    if (!mobile) {
      return 'Mobile number is required';
    }
    if (mobile.length !== 10) {
      return 'Please enter a valid 10-digit number';
    }
    return null;
  };
  
  // Handle mobile number input (only digits, max 10)
  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
    clearError('mobileNumber');
  };
  
  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    
    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError
      });
      return;
    }
    
    setAuthMethod('email');
    setStep('profile');
  };
  
  // Handle Google login
  const handleGoogleLogin = () => {
    setAuthMethod('google');
    // Simulate Google OAuth
    setTimeout(() => {
      setStep('profile');
    }, 500);
  };
  
  // Handle profile submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    
    const nameError = validateFullName(fullName);
    const yearError = validateAcademicYear(academicYear);
    const collegeError = validateCollegeName(collegeName);
    const mobileError = validateMobileNumber(mobileNumber);
    
    if (nameError || yearError || collegeError || mobileError) {
      setErrors({
        fullName: nameError,
        academicYear: yearError,
        collegeName: collegeError,
        mobileNumber: mobileError
      });
      return;
    }
    
    setStep('success');
  };
  
  // Auto-redirect on success
  useEffect(() => {
    if (step === 'success') {
      const timer = setTimeout(() => {
        navigate('/team');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step, navigate]);
  
  // Get dynamic title
  const getTitle = () => {
    if (step === 'auth') return 'Welcome to CSI Sanjivani';
    if (step === 'profile') return 'Complete Your Profile';
    return 'All Set!';
  };
  
  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Logo Header */}
        <div className="auth-logo-header">
          <div className="auth-logo-container">
            <img src={logo} alt="CSI Logo" className="auth-logo" />
          </div>
          <h1 className="auth-title">{getTitle()}</h1>
          {step === 'auth' && (
            <p className="auth-subtitle">
              Login required to access Team, Events & Gallery
            </p>
          )}
        </div>
        
        {/* Step Indicator */}
        <div className="step-indicator">
          <div className="step-item">
            <div className={`step-circle ${step !== 'auth' ? 'step-complete' : 'step-active'}`}>
              <span>1</span>
            </div>
            <span className={`step-label ${step !== 'auth' ? 'step-complete' : 'step-active'}`}>
              Login
            </span>
          </div>
          <div className={`step-connector ${step !== 'auth' ? 'step-active' : ''}`}></div>
          <div className="step-item">
            <div className={`step-circle ${step === 'success' ? 'step-complete' : step === 'profile' ? 'step-active' : ''}`}>
              <span>2</span>
            </div>
            <span className={`step-label ${step === 'success' ? 'step-complete' : step === 'profile' ? 'step-active' : ''}`}>
              Profile
            </span>
          </div>
        </div>
        
        {/* Main Card */}
        <div className="auth-card">
          {/* Step 1: Login */}
          <div className={`step-content ${step === 'auth' ? 'step-visible' : 'step-hidden-left'}`}>
            <form onSubmit={handleLogin} className="auth-form">
              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  <Mail size={16} className="label-icon" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearError('email');
                  }}
                  placeholder="your.email@example.com"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
              
              <div className="form-field">
                <label htmlFor="password" className="form-label">
                  <Lock size={16} className="label-icon" />
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    clearError('password');
                  }}
                  placeholder="Enter your password"
                  className={`form-input ${errors.password ? 'input-error' : ''}`}
                />
                {errors.password && <p className="error-message">{errors.password}</p>}
              </div>
              
              <button type="submit" className="btn-primary">
                Login
              </button>
              
              <div className="or-divider">
                <div className="divider-line"></div>
                <span className="divider-text">OR</span>
                <div className="divider-line"></div>
              </div>
              
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn-google"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" className="google-icon">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
            </form>
          </div>
          
          {/* Step 2: Profile */}
          <div className={`step-content ${step === 'profile' ? 'step-visible' : step === 'auth' ? 'step-hidden-right' : 'step-hidden-left'}`}>
            <form onSubmit={handleProfileSubmit} className="auth-form">
              <p className="profile-intro">Help us personalize your experience</p>
              
              <div className="form-field">
                <label htmlFor="fullName" className="form-label">
                  <User size={16} className="label-icon" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    clearError('fullName');
                  }}
                  placeholder="Enter your full name"
                  className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                />
                {errors.fullName && <p className="error-message">{errors.fullName}</p>}
              </div>
              
              <div className="form-field">
                <label htmlFor="academicYear" className="form-label">
                  <GraduationCap size={16} className="label-icon" />
                  Academic Year
                </label>
                <select
                  id="academicYear"
                  value={academicYear}
                  onChange={(e) => {
                    setAcademicYear(e.target.value);
                    clearError('academicYear');
                  }}
                  className={`form-input form-select ${errors.academicYear ? 'input-error' : ''}`}
                >
                  <option value="">Select your year</option>
                  <option value="FE">FE (First Year)</option>
                  <option value="SE">SE (Second Year)</option>
                  <option value="TE">TE (Third Year)</option>
                  <option value="BE">BE (Final Year)</option>
                </select>
                {errors.academicYear && <p className="error-message">{errors.academicYear}</p>}
              </div>
              
              <div className="form-field">
                <label htmlFor="collegeName" className="form-label">
                  <Building2 size={16} className="label-icon" />
                  College Name
                </label>
                <input
                  type="text"
                  id="collegeName"
                  value={collegeName}
                  onChange={(e) => {
                    setCollegeName(e.target.value);
                    clearError('collegeName');
                  }}
                  placeholder="Sanjivani College of Engineering"
                  className={`form-input ${errors.collegeName ? 'input-error' : ''}`}
                />
                {errors.collegeName && <p className="error-message">{errors.collegeName}</p>}
              </div>
              
              <div className="form-field">
                <label htmlFor="mobileNumber" className="form-label">
                  <Phone size={16} className="label-icon" />
                  Mobile Number
                </label>
                <div className="mobile-input-container">
                  <div className="country-code">+91</div>
                  <input
                    type="tel"
                    id="mobileNumber"
                    value={mobileNumber}
                    onChange={handleMobileChange}
                    placeholder="10-digit number"
                    maxLength={10}
                    className={`form-input mobile-input ${errors.mobileNumber ? 'input-error' : ''}`}
                  />
                </div>
                {errors.mobileNumber && <p className="error-message">{errors.mobileNumber}</p>}
              </div>
              
              <div className="info-box">
                📱 Your mobile number will be used for WhatsApp event notifications only.
              </div>
              
              <button type="submit" className="btn-primary btn-save">
                Save & Continue
              </button>
            </form>
          </div>
          
          {/* Step 3: Success */}
          <div className={`step-content ${step === 'success' ? 'step-visible' : 'step-hidden-right'}`}>
            <div className="success-content">
              <div className="success-icon-container">
                <CheckCircle size={48} className="success-icon" />
              </div>
              <h2 className="success-heading">Profile Complete!</h2>
              <p className="success-message">
                Welcome to CSI Sanjivani, {fullName}!
              </p>
              <p className="success-submessage">
                You now have access to all pages...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
