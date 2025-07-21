import React from 'react';
import './WhyChooseBranding.css';
import v1 from '../../assets/v1.jpg'
import v2 from '../../assets/v2.jpg'
import v3 from '../../assets/v3.jpg'
import v4 from '../../assets/v4.jpg'
import v5 from '../../assets/v5.jpg'

const VideoGraphy = () => {
  const features = [
 
  {
    id: 1,
    title: "Product Videography",
    subtitle: "Make Every Angle Speak for Your Brand",
    description: "From sleek unboxings to cinematic product demos, videography transforms your product into an experience. Whether it's a tech gadget, beauty item, or lifestyle essential, we craft visuals that highlight function, beauty, and uniqueness — building desire and trust with every frame.",
    image: v1, // replace with your video thumb or image
    imageAlt: "Product showcase video still",
    layout: "left"
  },
  {
    id: 2,
    title: "School & Educational Films",
    subtitle: "Capture Learning, Growth, and Legacy",
    description: "Educational videography brings institutions to life. From annual day highlights to admission promos, we document moments that reflect school spirit, student achievements, and a nurturing environment. These videos serve as powerful tools for branding, admissions, and memories that last a lifetime.",
    image: v3,
    imageAlt: "School event videography",
    layout: "right"
  },
  {
    id: 3,
    title: "Jewelry Videography",
    subtitle: "Craft Elegance in Motion",
    description: "Jewelry is all about detail, sparkle, and emotion — and our videography captures that magic. Using macro lenses, smooth motion, and dramatic lighting, we create luxury visuals that highlight every cut, shimmer, and story behind your designs. Perfect for catalogs, ads, and social media.",
    image: v4,
    imageAlt: "Jewelry macro videography still",
    layout: "left"
  },
  {
    id: 4,
    title: "Cargo & Logistics Videography",
    subtitle: "Visualize Scale, Speed, and Reliability",
    description: "In the logistics world, operations speak louder than words. Our cargo videography showcases efficiency, infrastructure, and global reach — from warehouse shots and freight loading to fleet operations. Ideal for company profiles, investor decks, and marketing assets that build trust and authority.",
    image: v5,
    imageAlt: "Cargo and transport drone shot",
    layout: "right"
  }


  ];

  return (
    <div className="branding-page-container">
      {/* Hero Section */}
      <div className="branding-container">
        <div className="branding-overlay"></div>
        <div className="branding-content">
          <div className="branding-left">
            <div className="branding-badge">Videography</div>
            <h1 className="branding-title">Photography</h1>
            <h1 className="branding-subtitle">is</h1>
            <h1 className="branding-highlight">impact</h1>
            <p className="branding-description">Is your story just recorded or powerfully delivered?
</p>
          </div>
          <div className="branding-right">
            <div className="branding-image-container">
              <img src={v2} alt="Neon sign" className="branding-image" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Branding Section */}
      <div className="why-choose-branding">
        <div className="why-choose-header">
       <h2 className="why-choose-title">Why Do Brands Trust Our Videography?</h2>
    <p className="why-choose-description">
      We don’t just film — we direct compelling visual stories. With cinematic quality, strategic editing, and brand-focused storytelling, our videos don’t just play — they perform and persuade.
    </p>
        </div>

        <div className="why-choose-features">
          {features.map((feature) => (
            <div key={feature.id} className={`feature-item ${feature.layout}`}>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <h4 className="feature-subtitle">{feature.subtitle}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-image-container">
                <img src={feature.image} alt={feature.imageAlt} className="feature-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGraphy;
