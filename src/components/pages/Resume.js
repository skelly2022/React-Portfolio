import React from 'react';
import sk from '../../assets/resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <br></br>
      <br></br>
      <br></br>
<p>Download my resume by clicking the link below!</p>
    <a href={sk}>Link </a>
    </div>
  );
}
