import React, { useState } from 'react';

export default function MyCustomWidget() {
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleScreenshotChange = (event) => {
    setScreenshot(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can implement the logic to handle the submitted feedback
    console.log(feedback, category, screenshot);
    setFeedback('');
    setCategory('');
    setScreenshot(null);
    setShowSuccess(true);
    setShowForm(false);
  };

  const handleWriteAgain = () => {
    setShowSuccess(false);
    setShowForm(true);
  };

  return (
    <div>
      <h2>Feedback Widget</h2>
      {showSuccess ? (
        <div>
          <div className="success-message">Thank you for your feedback!</div>
          <button onClick={handleWriteAgain}>Write Feedback Again</button>
        </div>
      ) : showForm ? (
        <form onSubmit={handleSubmit}>
          <label>
            Feedback Category:
            <select value={category} onChange={handleCategoryChange}>
              <option value="">Select a category</option>
              <option value="Bug Report">Bug Report</option>
              <option value="Feature Request">Feature Request</option>
              <option value="General Feedback">General Feedback</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />
          <label>
            Feedback:
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Enter your feedback"
              rows={4}
              cols={50}
            ></textarea>
          </label>
          <br />
          <label>
            Screenshot:
            <input type="file" accept="image/*" onChange={handleScreenshotChange} />
          </label>
          <br />
          {screenshot && (
            <div>
              <h3>Preview:</h3>
              <img
                src={URL.createObjectURL(screenshot)}
                alt="Screenshot preview"
                style={{ maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>
          )}
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : null}
    </div>
  );
}