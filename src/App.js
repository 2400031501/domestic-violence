import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

// Component imports handled within this file

// App Component
function App() {
  const [showEmergencyButton, setShowEmergencyButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowEmergencyButton(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/grievances" element={<Grievances />} />
          </Routes>
        </main>
        <Footer />
        {showEmergencyButton && <EmergencyButton />}
      </div>
    </Router>
  );
}

export default App;

// Emergency Exit Component (defined inside this file)
function EmergencyButton() {
  const handleExit = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.open('https://www.google.com', '_blank');
    window.location.replace('https://www.weather.com');
  };

  return (
    <button className="emergency-exit-btn" onClick={handleExit}>
      ⚠️ Quick Exit
    </button>
  );
}

// Navbar Component (defined inside this file)
function Navbar({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">🛡️ SafeSupport</Link>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
              <li><button onClick={handleLogout} className="nav-link btn-logout">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="nav-link">Login</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </>
          )}
          <li><Link to="/get-help" className="nav-link btn-get-help">Get Help</Link></li>
        </ul>
      </div>
    </nav>
  );
}

// Home Page Component (defined inside this file)
function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>🛡️ SafeSupport</h1>
        <h2>You Are Not Alone</h2>
        <p>Safe, confidential support for those experiencing domestic violence</p>
        <div className="hero-buttons">
          <a href="tel:100" className="btn-emergency">📞 Call Emergency: 100</a>
          <button className="btn-secondary">Learn More</button>
        </div>
      </section>

      <section className="emergency-section">
        <h2>🚨 Emergency Helplines</h2>
        <div className="helpline-grid">
          <div className="helpline-card">
            <h3>Police Emergency</h3>
            <p className="helpline-number">100</p>
            <p>Immediate emergency response</p>
            <a href="tel:100" className="btn-call">📞 Call Now</a>
          </div>
          
          <div className="helpline-card">
            <h3>Women's Helpline</h3>
            <p className="helpline-number">181</p>
            <p>24/7 support for women</p>
            <a href="tel:181" className="btn-call">📞 Call Now</a>
          </div>
          
          <div className="helpline-card">
            <h3>Domestic Violence Helpline</h3>
            <p className="helpline-number">1800-XXX-XXXX</p>
            <p>Confidential support</p>
            <a href="tel:1800XXXXXXX" className="btn-call">📞 Call Now</a>
          </div>
        </div>
      </section>

      <section className="info-section">
        <h2>How We Can Help</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>🛡️ Safety Planning</h3>
            <p>Create a personalized safety plan to protect yourself and your loved ones.</p>
            <button className="btn-primary">Get Started</button>
          </div>
          
          <div className="info-card">
            <h3>⚖️ Legal Support</h3>
            <p>Access legal resources and connect with legal advisors for guidance.</p>
            <button className="btn-primary">Get Help</button>
          </div>
          
          <div className="info-card">
            <h3>💬 Counseling</h3>
            <p>Connect with trained counselors who understand your situation.</p>
            <button className="btn-primary">Talk Now</button>
          </div>
          
          <div className="info-card">
            <h3>📚 Resources</h3>
            <p>Access comprehensive information about your rights and support services.</p>
            <button className="btn-primary">View Resources</button>
          </div>
        </div>
      </section>

      <section className="safety-tips">
        <h2>Safety Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>🔒 Online Safety</h4>
            <p>Use private browsing mode and clear your history. Use the Quick Exit button if needed.</p>
          </div>
          <div className="tip-card">
            <h4>📱 Communication</h4>
            <p>Use a safe phone or computer that your abuser doesn't have access to.</p>
          </div>
          <div className="tip-card">
            <h4>🏃 Safety Plan</h4>
            <p>Create a safety plan with escape routes, emergency contacts, and important documents.</p>
          </div>
          <div className="tip-card">
            <h4>🤝 Support Network</h4>
            <p>Reach out to trusted friends, family, or professionals who can help you.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// About Page Component
function About() {
  return (
    <div className="page-container">
      <h1>About SafeSupport</h1>
      <p>SafeSupport is a gender-responsive platform dedicated to providing comprehensive, confidential, and accessible support for individuals experiencing domestic violence.</p>
      
      <h2>Our Mission</h2>
      <p>We believe in gender equality, human rights, and the fundamental right to live free from violence and abuse. Our mission is to empower survivors by providing information, resources, and support to make informed decisions.</p>
      
      <h2>Our Values</h2>
      <ul>
        <li><strong>Confidentiality:</strong> Your privacy and safety are our highest priorities.</li>
        <li><strong>Gender Equality:</strong> We provide inclusive support services for all genders.</li>
        <li><strong>Empowerment:</strong> We help you take control of your situation.</li>
        <li><strong>Compassion:</strong> We approach every individual with empathy and respect.</li>
      </ul>
      
      <h2>What We Offer</h2>
      <ul>
        <li>24/7 access to resources and support</li>
        <li>Legal support and advice</li>
        <li>Professional counseling services</li>
        <li>Safety planning tools</li>
        <li>Emergency contacts and shelters</li>
        <li>Health and medical support information</li>
      </ul>
    </div>
  );
}

// Contact Page Component
function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      
      <h2>Emergency Contacts</h2>
      <div className="contact-info">
        <p><strong>Police Emergency:</strong> <a href="tel:100">100</a></p>
        <p><strong>Women's Helpline:</strong> <a href="tel:181">181</a></p>
        <p><strong>National Domestic Violence Helpline:</strong> <a href="tel:1800XXXXXXX">1800-XXX-XXXX</a></p>
      </div>
      
      <h2>Get In Touch</h2>
      <p>For non-emergency support, questions, or additional information:</p>
      <div className="contact-info">
        <p><strong>Email:</strong> support@safesupport.org</p>
        <p><strong>Address:</strong> [Your Organization Address]</p>
      </div>
      
      <div className="contact-form">
        <h3>Send us a message</h3>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Your name (optional)" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea rows="5" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}

// Get Help Page Component
function GetHelp() {
  return (
    <div className="page-container">
      <h1>Get Help Now</h1>
      
      <div className="emergency-banner">
        <h2>⚠️ In Immediate Danger?</h2>
        <p>Call emergency services immediately</p>
        <a href="tel:100" className="btn-emergency-large">📞 Call 100 Now</a>
      </div>
      
      <h2>Available Support Services</h2>
      
      <div className="services-list">
        <div className="service-item">
          <h3>Emergency Shelter</h3>
          <p>Safe, confidential emergency accommodation available 24/7</p>
          <button className="btn-primary">Find Shelter</button>
        </div>
        
        <div className="service-item">
          <h3>Legal Consultation</h3>
          <p>Free legal advice from qualified legal advisors</p>
          <button className="btn-primary">Get Legal Help</button>
        </div>
        
        <div className="service-item">
          <h3>Counseling Services</h3>
          <p>Professional counseling and mental health support</p>
          <button className="btn-primary">Talk to a Counselor</button>
        </div>
        
        <div className="service-item">
          <h3>Safety Planning</h3>
          <p>Create a personalized safety plan for you and your children</p>
          <button className="btn-primary">Create Safety Plan</button>
        </div>
      </div>
      
      <div className="warning-signs">
        <h2>Warning Signs of Domestic Violence</h2>
        <div className="signs-grid">
          <div>
            <h4>Physical Abuse</h4>
            <ul>
              <li>Hitting, slapping, pushing</li>
              <li>Threatening with weapons</li>
              <li>Physical restraint</li>
            </ul>
          </div>
          <div>
            <h4>Emotional Abuse</h4>
            <ul>
              <li>Constant criticism</li>
              <li>Humiliation and insults</li>
              <li>Isolation from friends/family</li>
            </ul>
          </div>
          <div>
            <h4>Financial Abuse</h4>
            <ul>
              <li>Controlling all finances</li>
              <li>Preventing employment</li>
              <li>Withholding money</li>
            </ul>
          </div>
          <div>
            <h4>Sexual Abuse</h4>
            <ul>
              <li>Non-consensual acts</li>
              <li>Coercion and manipulation</li>
              <li>Reproductive control</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dashboard Component
function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome Back</h1>
        <p>Your Safe Space Dashboard</p>
      </div>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>📝 My Grievances</h3>
          <p>Track and manage your submitted grievances</p>
          <Link to="/grievances" className="btn-primary">View Grievances</Link>
        </div>
        
        <div className="dashboard-card">
          <h3>🔒 Safety Plan</h3>
          <p>Update and review your safety plan</p>
          <button className="btn-primary">View Plan</button>
        </div>
        
        <div className="dashboard-card">
          <h3>📞 Support Network</h3>
          <p>Manage your emergency contacts</p>
          <button className="btn-primary">View Contacts</button>
        </div>
        
        <div className="dashboard-card">
          <h3>📋 Resources</h3>
          <p>Access your saved resources</p>
          <button className="btn-primary">View Resources</button>
        </div>
      </div>
    </div>
  );
}

// Grievances Component
function Grievances() {
  const [grievances] = useState([
    { id: 1, title: 'Sample Grievance 1', status: 'Under Review', date: '2025-11-08' },
    { id: 2, title: 'Sample Grievance 2', status: 'Resolved', date: '2025-11-07' }
  ]);

  return (
    <div className="grievances-container">
      <div className="grievances-header">
        <h1>Grievances</h1>
        <button className="btn-primary">+ New Grievance</button>
      </div>

      <div className="grievances-list">
        <div className="grievance-filters">
          <select defaultValue="all">
            <option value="all">All Grievances</option>
            <option value="pending">Pending</option>
            <option value="review">Under Review</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>

        {grievances.map(grievance => (
          <div key={grievance.id} className="grievance-card">
            <div className="grievance-info">
              <h3>{grievance.title}</h3>
              <span className={`status-badge ${grievance.status.toLowerCase().replace(' ', '-')}`}>
                {grievance.status}
              </span>
            </div>
            <p>Submitted on: {grievance.date}</p>
            <button className="btn-secondary">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Login Component
function Login({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated login success - in real app, you'd verify credentials
    console.log('Login attempt:', formData);
    // Set login state and redirect to dashboard
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn-primary">Login</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

// SignUp Component
function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Add signup logic here
    console.log('Signup attempt:', formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

// Footer Component (defined inside this file)
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Emergency Contacts</h3>
          <p><strong>Police Emergency:</strong> 100</p>
          <p><strong>Women's Helpline:</strong> 181</p>
          <p><strong>National Helpline:</strong> 1800-XXX-XXXX</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/get-help">Get Help</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Safety Notice</h3>
          <p>Use the Quick Exit button (top right) or press Shift+Esc to quickly leave this site.</p>
          <p>Your safety is our priority.</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 SafeSupport. All rights reserved. This platform is committed to gender equality and safety.</p>
      </div>
    </footer>
  );
}

// End of components
