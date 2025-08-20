import React, { useState, useRef } from "react";

const VerificationPage = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);

  // Handle input change
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // allow only digits
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Join code
  const verificationCode = code.join("");

  const handleVerify = () => {
    alert(`oops! your'e a Female`);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        
        {/* Logo/Icon */}
        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M4.1 5.2c0-.3.1-.6.3-.8.2-.2.5-.3.9-.3h13.7c.3 0 .6.1.8.3.2.2.3.5.3.8v2.3c0 .3-.1.6-.3.8-.2.2-.5.3-.8.3H5.3c-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.8V5.2zm0 6.9c0-.3.1-.6.3-.8.2-.2.5-.3.9-.3h6.9c.3 0 .6.1.8.3.2.2.3.5.3.8v6.9c0 .3-.1.6-.3.8-.2.2-.5.3-.8.3H5.3c-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.8v-6.9zm12.6-1.1c-.3 0-.6.1-.8.3-.2.2-.3.5-.3.8v6.9c0 .3.1.6.3.8.2.2.5.3.8.3h2.3c.3 0 .6-.1.8-.3.2-.2.3-.5.3-.8v-6.9c0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3h-2.3z"/>
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-slate-900 text-center mb-3">
          Enter Verification Code
        </h1>

        {/* Description */}
        <p className="text-slate-500 text-center text-base leading-6 mb-8 max-w-xs mx-auto">
          We’ve sent a 6-digit code to your email address. Enter it below to verify your identity.
        </p>

        {/* Code Input Fields */}
        <div className="flex gap-3 mb-6 justify-center">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-label={`Digit ${index + 1}`}
              className="w-12 h-12 text-center text-lg font-medium border border-slate-300 rounded-xl 
              bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ))}
        </div>

        {/* Resend Code Section */}
        <div className="text-center mb-7">
          <p className="text-slate-500 text-sm mb-2">Didn’t receive the code?</p>
          <button className="text-blue-500 text-sm font-medium hover:text-blue-600 cursor-pointer">
            Resend Code
          </button>
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={verificationCode.length < 6}
          className={`w-full h-12 rounded-xl flex items-center justify-center gap-2 mb-6 transition-colors 
            ${verificationCode.length === 6 ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-slate-300 text-white cursor-not-allowed"}`}
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 20 20">
            <path d="M16.7 5.3c.4.4.4 1.1 0 1.4l-8 8c-.4.4-1.1.4-1.4 0l-4-4c-.4-.4-.4-1.1 0-1.4.4-.4 1.1-.4 1.4 0L8 12.6l7.3-7.3c.4-.4 1.1-.4 1.4 0z"/>
          </svg>
          Verify Code
        </button>

        {/* Security Notice */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="12" height="12" fill="white" viewBox="0 0 12 12">
                <path d="M10 3L4.5 8.5 2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-slate-900 text-sm font-medium mb-1">Secure Verification</h3>
              <p className="text-slate-500 text-xs leading-4">
                Your code expires in 10 minutes for security. Keep this window open during verification.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 pt-4 text-center">
          <p className="text-slate-500 text-xs">
            Having trouble? Contact{" "}
            <a href="mailto:support@leadflow.com" className="text-blue-500 hover:text-blue-600">
              support@leadflow.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
