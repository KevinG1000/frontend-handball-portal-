import React from 'react';
import './WhereToPlay.css';

const WhereToPlay = () => {
    const courts = [
        {
            name: "Grand St Handball Courts",
            address: "Sara D. Roosevelt Park, 6 Forsyth St, New York, NY 10002",
            image: "https://i.ibb.co/sp0JQKR8/image.png",
            description: "Classic Manhattan courts with multiple walls"
        },
        {
            name: "161 Street Courts",
            address: "E. 157 St &, W 161st St, Bronx, NY 10451",
            image: "https://static.nycgovparks.org/images/photo_gallery/full_size/20703.jpg",
            description: "Courts near Yankee Stadium"
        },
        {
            name: "Piers 2 Handball Courts",
            address: "146 Furman St, Brooklyn, NY 11201",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Brooklyn_Bridge_Park_td_%282019-08-23%29_128_-_Pier_2%2C_Handball_Courts.jpg",
            description: "Modern waterfront courts with stunning views"
        },
        {
            name: "Coney Island Courts",
            address: "Coney Island Handball Courts, Surf Ave &, W 5th St, Brooklyn, NY 11224",
            image: "https://live.staticflickr.com/3448/3900422822_d74355fe74_b.jpg",
            description: "Historic courts near the beach"
        },
        {
            name: "Zerega Indoor Handball Courts",
            address: "ZEREGA INDOORS HANDBALL/PADDLEBALL/RACKETBALL, 2365 Newbold Ave, Bronx, NY 10462",
            image: "https://i.ibb.co/v6qQrPW1/image.png",
            description: "Indoor handball facility offering year-round play regardless of weather."
        },
        {
            name: "Van Cortlandt Park",
            address: "US-9, Bronx, NY 10471",
            image: "https://kermitproject.org/newdeal/vancortlandt/vcparkhandball.jpg",
            description: "Historic park featuring multiple handball courts in a beautiful outdoor setting."
        }
    ];

    const getGoogleMapsLink = (address) => {
        return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    };

    return (
        <div className="where-to-play">
            <h2 className="page-title">Where To Play</h2>
            <div className="courts-grid">
                {courts.map((court, index) => (
                    <div key={index} className="court-card">
                        <div className="court-image-container">
                            <img
                                src={court.image}
                                alt={court.name}
                                className="court-image"
                            />
                        </div>
                        <div className="court-info">
                            <h3 className="court-title">{court.name}</h3>
                            {court.address && (
                                <a
                                    href={getGoogleMapsLink(court.address)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="court-address"
                                >
                                    📍 {court.address}
                                </a>
                            )}
                            <p className="court-description">{court.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhereToPlay; 