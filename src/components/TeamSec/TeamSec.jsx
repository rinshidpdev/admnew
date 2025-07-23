// import React from 'react';
// import './TeamSec.css';
// import ani from '../../assets/1.jpg'
// import akhila from '../../assets/Akhila-SMM.jpg'
// import cristan from '../../assets/christo-paul.jpg'
// import prashanth from '../../assets/5.jpg'
// import vishnav from '../../assets/vyshnav.jpg'
// import lakshmi from '../../assets/Muthu-Lakshmi.jpg'
// import ashwin from '../../assets/4-1.jpg'
// import sufana from '../../assets/Sufana.jpg'
// import shamna from '../../assets/Shamna.jpg'
// const TeamSec = () => {
//   const teamMembers = [
//     {
//       name: "ANISHA MUKIL",
//       role: "CEO & Founder | Anisha Group of Companies",
//       image: ani
//     },
//     {
//       name: "AKHILA M NAIR",
//       role: "Social Media Manager",
//       image: akhila
//     },
//     {
//       name: "CHRISTO PAUL",
//       role: "Digital Marketing Team Lead",
//       image: cristan
//     },
//     {
//       name: "PRASANTH A K",
//       role: "Senior Graphic Designer",
//       image: prashanth
//     },
//     {
//       name: "VYSHNAV K PRAKASH",
//       role: "Business Development Officer",
//       image: vishnav
//     },
//     {
//       name: "MUTHULAKSHMY K",
//       role: "SEO Specialist",
//       image: lakshmi
//     },
//     {
//       name: "ASWIN P K",
//       role: "Video Editor",
//       image: ashwin
//     },
//     {
//       name: "SUFANA SALIM",
//       role: "Web & SEO Specialist",
//       image: sufana
//     },
//     {
//       name: "SHAMNA M A",
//       role: "Social Media Marketer",
//       image: shamna
//     }
//   ];

//   return (
//     <div className="team-section">
//       <div className="team-container">
//         {/* Header */}
//         <div className="team-header">
//           <h1 className="team-title">
//             Meet The <span className="italic">Professionals</span>
//           </h1>
//         </div>

//         {/* Team Grid */}
//         <div className="team-grid">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="team-card">
//               <div className="card-inner">
//                 {/* Image Container */}
//                 <div className="image-container">
//                   <img 
//                     src={member.image} 
//                     alt={member.name}
//                     className="member-image"
//                   />
//                 </div>
                
//                 {/* Content Overlay */}
//                 <div className="card-content">
//                   <div className="text-section">
//                     <h3 className="member-name">{member.name}</h3>
//                     <p className="member-role">{member.role}</p>
//                   </div>
                  
//                   {/* Arrow Icon */}
//                   <div className="arrow-container">
//                     <div className="arrow-circle">
//                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                         <path d="M5 12h14M12 5l7 7-7 7"/>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSec;


// when render new page will show new image
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamSec.css';

// Grid images (current ones)
import ani from '../../assets/1.jpg'
import akhila from '../../assets/Akhila-SMM.jpg'
import cristan from '../../assets/christo-paul.jpg'
import prashanth from '../../assets/5.jpg'
import vishnav from '../../assets/vyshnav.jpg'
import lakshmi from '../../assets/Muthu-Lakshmi.jpg'
import ashwin from '../../assets/4-1.jpg'
import sufana from '../../assets/Sufana.jpg'
import shamna from '../../assets/Shamna.jpg'

// Detail page images (new ones for detail page)
// import aniDetail from '../../assets/1-detail.jpg'
import akhilaDetail from '../../assets/akhilaai.png'
// import cristanDetail from '../../assets/christo-paul-detail.jpg'
import prashanthDetail from '../../assets/prashanthai.png'
// import vishnavDetail from '../../assets/vyshnav-detail.jpg'
// import lakshmiDetail from '../../assets/Muthu-Lakshmi-detail.jpg'
// import ashwinDetail from '../../assets/4-1-detail.jpg'
// import sufanaDetail from '../../assets/Sufana-detail.jpg'
// import shamnaDetail from '../../assets/Shamna-detail.jpg'

const TeamSec = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      id: 1,
      name: "ANISHA MUKIL",
      role: "CEO & Founder | Anisha Group of Companies",
      image: ani,
      detailImage: ani,
      experience: "8+ Years",
      about: "Visionary leader with extensive experience in building successful businesses and leading diverse teams. Anisha has transformed the digital marketing landscape with her innovative approaches and strategic thinking.",
      skills: ["Leadership", "Strategic Planning", "Business Development", "Team Management"],
      email: "anisha@anishagroup.com",
      linkedin: "#"
    },
    {
      id: 2,
      name: "AKHILA M NAIR",
      role: "Social Media Manager",
      image: akhila,
      detailImage: akhilaDetail,
      experience: "4+ Years",
      about: "Creative social media strategist who excels at building brand presence and engaging communities. Akhila specializes in crafting compelling content that drives meaningful interactions and brand loyalty.",
      skills: ["Social Media Strategy", "Content Creation", "Community Management", "Brand Building"],
      // email: "akhila@anishagroup.com",
      // linkedin: "#"
    },
    {
      id: 3,
      name: "CHRISTO PAUL",
      role: "Digital Marketing Team Lead",
      image: cristan,
      detailImage: cristan,
      experience: "6+ Years",
      about: "Results-driven digital marketing expert with a proven track record of delivering successful campaigns. Christo combines analytical thinking with creative execution to maximize ROI and drive business growth.",
      skills: ["Digital Marketing", "Campaign Management", "Analytics", "Team Leadership"],
      // email: "christo@anishagroup.com",
      // linkedin: "#"
    },
    {
      id: 4,
      name: "PRASANTH A K",
      role: "Senior Graphic Designer",
      image: prashanth,
      detailImage: prashanthDetail,
      experience: "5+ Years",
      about: "Talented visual storyteller who brings brands to life through compelling design. Prasanth's creative expertise spans across digital and print media, creating memorable visual experiences.",
      skills: ["Graphic Design", "Brand Identity", "UI/UX Design", "Creative Direction"],
      // email: "prasanth@anishagroup.com",
      // linkedin: "#"
    },
    {
      id: 5,
      name: "VYSHNAV K PRAKASH",
      role: "Business Development Officer",
      image: vishnav,
      detailImage: vishnav,
      experience: "3+ Years",
      about: "Dynamic business development professional focused on identifying growth opportunities and building strategic partnerships. Vyshnav excels at nurturing client relationships and driving revenue growth.",
      skills: ["Business Development", "Client Relations", "Strategic Partnerships", "Sales Strategy"],
      // email: "vyshnav@anishagroup.com",
      // linkedin: "#"
    },
    {
      id: 6,
      name: "MUTHULAKSHMY K",
      role: "SEO Specialist",
      image: lakshmi,
      detailImage: lakshmi,
      experience: "1.5+ Years",
      about: "Technical SEO expert who helps businesses achieve top search rankings. Muthulakshmy combines technical expertise with content strategy to deliver sustainable organic growth.",
      skills: ["SEO Optimization", "Technical SEO", "Content Strategy", "Analytics"],
      // email: "lakshmi@anishagroup.com",
      // linkedin: "#"
    },
    {
      id: 7,
      name: "ASWIN P K",
      role: "Video Editor",
      image: ashwin,
      detailImage: ashwin,
      experience: "3+ Years",
      about: "Creative video editor who transforms raw footage into compelling visual stories. Aswin's expertise in post-production and motion graphics brings brands to life through engaging video content.",
      skills: ["Video Editing", "Motion Graphics", "Post Production", "Creative Storytelling"],
      // email: "aswin@anishagroup.com",
      // linkedin: "#"
    },
    {
      id: 8,
      name: "SUFANA SALIM",
      role: "Web & SEO Specialist",
      image: sufana,
      detailImage: sufana,
      experience: "4+ Years",
      about: "Full-stack digital specialist combining web development with SEO expertise. Sufana creates optimized websites that not only look great but also perform exceptionally in search rankings.",
      skills: ["Web Development", "SEO", "Frontend Development", "Performance Optimization"],
      // email: "sufana@anishagroup.com",
      // linkedin: "#"
    },
    {
      id: 9,
      name: "SHAMNA M A",
      role: "Social Media Marketer",
      image: shamna,
      detailImage: shamna,
      experience: "2+ Years",
      about: "Passionate social media marketer who understands the pulse of digital communities. Shamna creates engaging campaigns that resonate with target audiences and drive meaningful engagement.",
      skills: ["Social Media Marketing", "Content Planning", "Audience Engagement", "Trend Analysis"],
      // email: "shamna@anishagroup.com",
      // linkedin: "#"
    }
  ];

  const handleMemberClick = (member) => {
    console.log("Navigating to member:", member);
    navigate(`/team-member/${member.id}`, { state: { member } });
  };

  return (
    <div className="team-section">
      <div className="team-container">
        {/* Header */}
        <div className="team-header">
          <h1 className="team-title">
            Meet The <span className="italic">Professionals</span>
          </h1>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="card-inner">
                {/* Image Container */}
                <div className="image-container" onClick={() => handleMemberClick(member)}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="member-image"
                  />
                </div>
                
                {/* Content Overlay */}
                <div className="card-content">
                  <div className="text-section">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="arrow-container" onClick={() => handleMemberClick(member)}>
                    <div className="arrow-circle">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSec;
