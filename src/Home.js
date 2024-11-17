import { useNavigate } from 'react-router-dom';



function  Home() {
    let n = useNavigate();

    const Gotoaddprofile = ()=>{
        n("/createprofile");
    };
    const Gotoprofile = ()=>{
        n("/Profiles");
    };
    
    return(
        <>
        
        <div  className="homediv" >
            <img className='img'   src='https://static.vecteezy.com/system/resources/previews/003/715/527/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg'/>
            <p> Welcome!</p>
            <button onClick={Gotoaddprofile} className='create'> Create Profile</button>
            <button onClick={Gotoprofile} className='explore' >Explore profiles</button>
            
            
        </div>
        
        </>
    )
    
}
export default Home;