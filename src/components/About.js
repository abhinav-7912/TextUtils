import React from 'react';

function About({ mode }) {
  return (
    <div style={{ backgroundColor: mode === 'dark' ? '#042743' : 'white', color: mode === 'dark' ? 'white' : 'black' }} className="container my-5">
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze Your Text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This section allows users to input their text and perform various analyses. Users can count words, characters, and sentences, check for readability, and even detect the frequency of specific words. It’s a powerful tool for anyone looking to gain insights into their writing, whether for academic, professional, or personal purposes.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free to Use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>TextUtils is completely free to use, making it accessible to everyone. There are no hidden fees or subscription requirements. Users can take advantage of all the features without any cost, ensuring that everyone can improve their text without financial barriers.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatibility
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>The website is designed to be compatible with all modern web browsers. Whether you’re using Chrome, Firefox, Safari, or Edge, TextUtils will work seamlessly. This ensures that users can access the tool from any device, be it a desktop, laptop, tablet, or smartphone, without worrying about compatibility issues.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
