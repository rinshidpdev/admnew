import React, { useState, useEffect, useRef } from 'react';
import cl1 from '../../assets/client1.png';
import cl2 from '../../assets/client2.png';
import cl3 from '../../assets/client3.png';
import cl4 from '../../assets/client4.png';
import cl5 from '../../assets/client5.png';
import cl6 from '../../assets/client6.png';
import cl7 from '../../assets/client7.png';
import cl8 from '../../assets/client8.png';
import cl9 from '../../assets/client9.png';
import cl10 from '../../assets/client10.png';
import cl11 from '../../assets/client11.png';


const Clients = () => {
  const allClients = [
    { id: 1, name: 'Berkeley', logo: cl1 },
    { id: 2, name: 'Bin Hendi', logo: cl2 },
    { id: 3, name: 'Al Fattan', logo: cl3 },
    { id: 4, name: 'Al Ghurair', logo: cl4 },
   
    { id: 6, name: 'Client 6', logo: cl5 },
    { id: 6, name: 'Client 6', logo: cl6 },
    { id: 6, name: 'Client 6', logo: cl7 },
    { id: 6, name: 'Client 6', logo: cl8 },
    { id: 6, name: 'Client 6', logo: cl9 },
    { id: 6, name: 'Client 6', logo: cl10 },
    { id: 6, name: 'Client 6', logo: cl11 },
  ];

  const [expanded, setExpanded] = useState(false);
  const sliderRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const handleViewAllClients = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (!expanded && sliderRef.current) {
      let position = 0;
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

      const scroll = () => {
        if (!sliderRef.current) return;
        position += 1.5;
        if (position >= maxScroll) {
          position = 0;
        }
        sliderRef.current.scrollTo({
          left: position,
          behavior: 'smooth',
        });
      };

      scrollIntervalRef.current = setInterval(scroll, 30);

      return () => clearInterval(scrollIntervalRef.current);
    }
  }, [expanded]);

  const displayedClients = expanded ? allClients : allClients.slice(0, 5);

  return (
    <div
      className="clients-container"
      style={{
       
        padding: '40px 15px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {!expanded ? (
        <div
          ref={sliderRef}
          className="clients-carousel"
          style={{
            display: 'flex',
            gap: '16px',
            width: '100%',
            maxWidth: '1200px',
            overflowX: 'hidden',
            marginBottom: '30px',
            padding: '5px',
          }}
        >
          {[...allClients, ...allClients].map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="client-box"
              style={{
                minWidth: '130px',
                height: '70px',
              
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                flexShrink: 0,
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="clients-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '16px',
            width: '100%',
            maxWidth: '1000px',
            marginBottom: '30px',
          }}
        >
          {displayedClients.map((client) => (
            <div
              key={client.id}
              className="client-box"
              style={{
                height: '60px',
               
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      )}

      <button
        style={{
          display: 'none', // keep hidden unless needed
          
          border: '1px solid #fff',
          color: '#fff',
          padding: '8px 20px',
          cursor: 'pointer',
          fontSize: '14px',
          borderRadius: '5px',
        }}
        onClick={handleViewAllClients}
      >
        {expanded ? 'View Less' : 'View All Clients'}
      </button>
    </div>
  );
};

export default Clients;
