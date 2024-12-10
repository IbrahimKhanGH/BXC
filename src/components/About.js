import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">About BXC Roofing</h2>
          <div className="text-lg text-gray-600 space-y-6">
            <p>
              BXC Roofing is locally owned and operated, serving East Texas and surrounding areas. 
              We provide pristine roofing services to both residential and commercial properties, 
              with great pride in our quality customer service.
            </p>
            <p>
              Throughout the years, BXC Roofing has seen growth and expansion, but our vision and 
              goals have stayed consistent – to ensure a 5-star customer service experience from 
              start to finish.
            </p>
            <p>
              Our team is equipped to handle all your roofing needs – residential, commercial, 
              emergency tarping, gutters, or just a simple repair.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 