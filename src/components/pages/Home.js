
   
import React from 'react';

export default function About() {
  return (
    <section  className="d-flex column justify-content-between portfolioSection about">
      <aside className="col-4">
        <div  className="col-4">
          <img src="https://i.postimg.cc/BZPFPmtx/1583277437374.jpg" className="aboutimage"  alt="developer"></img>
        </div>
      </aside>
      <div  className='d-flex row col-8 justify-content-center topp'>
        <p className="text-center">Thank you for viewing my page! My name is Stephen and I am currently residing in Austin, Texas. I have 4 years sales experiences working in both the sports and entertainment landscape and well in the technology sector. I decided to do a Web Development bootcamp so I can broaden my skills and work with more technical sales.
        </p>
        <p className="text-center">I am currently finishing up my last project for my course before graduation. I have learned many skills including HTML, CSS, NODE, JQuery, Bootstrap, among many more. My favorite part about developing so far has been writing the backend for my applications that you can view on my portfolio page!

        </p>
      </div>
    </section>
  );
}