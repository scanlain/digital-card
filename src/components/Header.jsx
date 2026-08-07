import '../App.css'
import photo from "../assets/profile-photo.jpg"

const Header = () => {
  return (
    <div className='header'>
        <div className="profile-pic-wrapper">
          <img className="profile-pic" src={photo} alt="Profile Pic" />
        </div>
        <div className="about">
            <span className="card-owner-name">Mohd Saqlain Kazi</span>
            <div className='role'>
              <span className="card-owner-role">Full Stack Developer</span>
              <p className="card-owner-stack">React | .NET Core</p>
            </div>
        </div>
    </div>
  )
}

export default Header