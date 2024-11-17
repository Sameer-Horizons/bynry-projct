// ProfileList.js
import React, { useState, useEffect } from 'react';

const profilesData = [
  {
    id: 1,
    name: 'John Doe',
    photo: 'https://assets.w3.tue.nl/w/fileadmin/_processed_/0/c/csm_0f87033c4be01a2469e7a9663669e4c2_6fc7507b7d.jpg',
    fulldescription:"Software Engineer with 10 years of experience in web development.He's an avid mountain biker and spends his weekends exploring new trails.",
    description: "Software Engineer ",
    addrees: '1234 Elm Street Springfield, IL 62704 USA',
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: 'https://pics.craiyon.com/2023-11-01/e63eb75c4460453cbe4cb4f09caa9247.webp',
    fulldescription:'Product Manager with a passion for user experience and design.He resides in Austin, Texas, and loves the vibrant music scene there.',
    description: 'Produt manager',
    addrees:'9101 Oak Street Metropolis, NY 10001 USA',
  },
  {
    id: 3,
    name: 'Harrison Gardiner,',
    photo: 'https://th.bing.com/th/id/OIP.e5dV5exUkPSff9BF6agFSwHaKX?rs=1&pid=ImgDetMain',
    addrees:'2345 Pine Lane Smallville, TX 75001 USA',
    fulldescription:'Gardiner is a 29-year-old civil engineer living in Seattle. He has a deep passion for sustainable construction and often works on projects that aim to reduce environmental impact.',
    description: 'Civil engineer living in Seattle',
  },
  {
    id: 4,
    name: 'Benjamin Miller',
    photo: 'https://www.uscareerinstitute.edu/images/accounting-AAS-outcomes.jpg',
    addrees:'6789 Cedar Road Rivertown, FL 33101 USA',
    fulldescription:'Miller is a 35-year-old software engineer who lives in San Francisco. Hes an avid mountain biker and spends his weekends exploring new trails.',
    description: "software engineer ",
  },
  {
    id: 5,
    name: 'John Chris Paine',
    addrees:'1234 Birch Court Lakeview, WA 98001 USA',
fulldescription:'John, a 28-year-old graphic designer, has a passion for creating stunning visual art. He resides in Austin, Texas.',
    photo: 'https://a.storyblok.com/f/52232/765x765/0759e92a3c/headshotsquare.jpg',
    description: 'Graphic designer ',
  },
  {
    id: 6,
    name: 'Kiran Singh',
    addrees:'24, M.G. Road Bangalore, Karnataka 560001 India',
fulldescription:'Is a 42-year-old chef who owns a popular restaurant in New York City. He specializes in fusion cuisine, blending flavors from different cultures.',
    photo: 'https://th.bing.com/th/id/OIP.ProsAms6MG2x4PYnft7AjgHaHZ?rs=1&pid=ImgDetMain',
    description: 'Chef',
  },
  {
    id: 7,
    name: 'Rohan Kumar',
    addrees:'Lajpat Nagar New Delhi, Delhi 110024 India',
fulldescription:'Rohan Kumar a 30-year-old fitness trainer, lives in Miami and enjoys the sunny beaches. He’s a fitness enthusiast who loves helping others achieve their health goals.',
    photo: 'https://th.bing.com/th/id/OIP.PM27Kg5ix0GHidpHDoQ0yQHaHa?w=2200&h=2200&rs=1&pid=ImgDetMain',
    description: 'Fitness trainer',
  },
  {
    id: 8,
    name: 'Sanjay Verma',
    addrees:'Park Street Kolkata, West Bengal 700016 India',
fulldescription:'a 38-year-old architect based in Seattle, is known for designing sustainable and innovative buildings. He loves nature and often incorporates eco-friendly elements into his designs.',
    photo: 'https://actasysinc.com/wp-content/uploads/2022/08/Syed-Walid.jpg',
    description: 'Architect ',
  }, {
    id: 9,
    name: 'Nisha Mehta',
    addrees:'12 Juhu Lane Mumbai, Maharashtra 400049 India',
    fulldescription:'s a 28-year-old fitness coach in New Delhi. He has a passion for health and wellness, and he runs a popular YouTube channel where he shares fitness tips and workout routines.',
    photo: 'https://explore-snu.netlify.app/images/Keshav.png',
    description: 'Fitness coach  ',
  }, {
    id: 10,
    addrees:'1234 Birch Court Lakeview, WA 98001 USA',
fulldescription:'s a 50-year-old high school history teacher in Chicago. He has a passion for educating young minds and making history come alive in his classroom',
    name: 'Olivia Wilson',
    photo: 'https://media-exp1.licdn.com/dms/image/D4E03AQHh6sWOzKJjeQ/profile-displayphoto-shrink_800_800/0/1665793658138?e=2147483647&v=beta&t=TXgGebxLJiXLSVRc_PRYzO3CxLFHNfqQFt9RGhQsoWc',
    description: ' History teacher ',
  },


];

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setProfiles(profilesData);
  }, []);
  


  return (
    <>
      <div>
        <div className='profiles'>
          <h2 >Profiles</h2>
        </div>
        <div className="profile-list">
          {profiles.map((profile) => (
            <div key={profile.id} className="profile-card">
              <img src={profile.photo} alt={profile.name} />
              <h3>{profile.name}</h3>
              <div style={{ display: "flex" }}>
                <p>{`.${profile.description}`}</p>
              </div>
              <details>
        <summary>Summary</summary>
        <p key={profile.fulldescription}>{profile.fulldescription}</p>
        <footer key={profile.addrees}>{`Address : ${profile.addrees}`} </footer>        
      </details>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default ProfileList;
