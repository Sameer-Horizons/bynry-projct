import React, { useState, useEffect } from 'react';
import ProfileList from "./ProfileList";

const Person1Data = [
  {
    id: 1,
    name: 'John Doe',
    photo: 'https://assets.w3.tue.nl/w/fileadmin/_processed_/0/c/csm_0f87033c4be01a2469e7a9663669e4c2_6fc7507b7d.jpg',
    description: "Software Engineer with 10 years of experience in web development.He's an avid mountain biker and spends his weekends exploring new trails.",
    addrees: {
      name: 'city',
      place: 'hyderabad'
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: 'https://pics.craiyon.com/2023-11-01/e63eb75c4460453cbe4cb4f09caa9247.webp',
    description: 'Product Manager with a passion for user experience and design.He resides in Austin, Texas, and loves the vibrant music scene there.',
  },
  {
    id: 3,
    name: 'Harrison Gardiner,',
    photo: 'https://th.bing.com/th/id/OIP.e5dV5exUkPSff9BF6agFSwHaKX?rs=1&pid=ImgDetMain',
    description: 'Gardiner is a 29-year-old civil engineer living in Seattle. He has a deep passion for sustainable construction and often works on projects that aim to reduce environmental impact.',
  },
  {
    id: 4,
    name: 'Benjamin Miller',
    photo: 'https://www.uscareerinstitute.edu/images/accounting-AAS-outcomes.jpg',
    description: "Miller is a 35-year-old software engineer who lives in San Francisco. He's an avid mountain biker and spends his weekends exploring new trails.",
  },
  {
    id: 5,
    name: 'John Chris Paine',
    photo: 'https://a.storyblok.com/f/52232/765x765/0759e92a3c/headshotsquare.jpg',
    description: 'John, a 28-year-old graphic designer, has a passion for creating stunning visual art. He resides in Austin, Texas.',
  },
  {
    id: 6,
    name: 'Kiran Singh',
    photo: 'https://th.bing.com/th/id/OIP.ProsAms6MG2x4PYnft7AjgHaHZ?rs=1&pid=ImgDetMain',
    description: 'is a 42-year-old chef who owns a popular restaurant in New York City. He specializes in fusion cuisine, blending flavors from different cultures.',
  },
  {
    id: 7,
    name: 'Rohan Kumar',
    photo: 'https://th.bing.com/th/id/OIP.PM27Kg5ix0GHidpHDoQ0yQHaHa?w=2200&h=2200&rs=1&pid=ImgDetMain',
    description: 'Rohan Kumar a 30-year-old fitness trainer, lives in Miami and enjoys the sunny beaches. He’s a fitness enthusiast who loves helping others achieve their health goals.',
  },
  {
    id: 8,
    name: 'Sanjay Verma',
    photo: 'https://actasysinc.com/wp-content/uploads/2022/08/Syed-Walid.jpg',
    description: 'a 38-year-old architect based in Seattle, is known for designing sustainable and innovative buildings. He loves nature and often incorporates eco-friendly elements into his designs.',
  }, {
    id: 9,
    name: 'Nisha Mehta',
    photo: 'https://explore-snu.netlify.app/images/Keshav.png',
    description: 's a 28-year-old fitness coach in New Delhi. He has a passion for health and wellness, and he runs a popular YouTube channel where he shares fitness tips and workout routines.',
  }, {
    id: 10,
    name: 'Olivia Wilson',
    photo: 'https://media-exp1.licdn.com/dms/image/D4E03AQHh6sWOzKJjeQ/profile-displayphoto-shrink_800_800/0/1665793658138?e=2147483647&v=beta&t=TXgGebxLJiXLSVRc_PRYzO3CxLFHNfqQFt9RGhQsoWc',
    description: 'is a 50-year-old high school history teacher in Chicago. He has a passion for educating young minds and making history come alive in his classroom.',
  },


];


function Person1() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    setProfiles(Person1Data);
  }, []);

  return (
    <>
      <div className="summaryprofile">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img src={profile.photo} alt={profile.name} />
            <h3>{profile.name}</h3>
            <div style={{ display: "flex" }}>
              <p>{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}
export default Person1;