// SignupForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert('Please verify your mobile number');
      return;
    }
    const user = { username, email, password, mobile };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful! You can now log in.');
  };

  const sendVerificationCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random code
    setGeneratedCode(code);
    alert(`Verification code sent: ${code}`);
  };

  const verifyCode = () => {
    if (parseInt(verificationCode) === generatedCode) {
      setIsVerified(true);
      alert('Mobile number verified successfully!');
    } else {
      alert('Incorrect verification code. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSignup}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <Button
          variant="secondary"
          onClick={sendVerificationCode}
          disabled={isVerified || !mobile}
          className="mt-2 w-100"
        >
          Send Verification Code
        </Button>
      </Form.Group>
      {generatedCode && (
        <Form.Group className="mb-3">
          <Form.Label>Enter Verification Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
          <Button
            variant="secondary"
            onClick={verifyCode}
            disabled={isVerified}
            className="mt-2 w-100"
          >
            Verify Code
          </Button>
        </Form.Group>
      )}
      <Button variant="primary" type="submit" className="w-100" disabled={!isVerified}>
        Sign up
      </Button>
    </Form>
  );
};

export default SignupForm;
