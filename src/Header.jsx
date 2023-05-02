import PropTypes from 'prop-types'
import './App.css'
const Header = ({ profileImg, username }) => {
  return (
    <>
      <img className='avater' src={profileImg} alt={username} />
      <h1>{username}</h1>
    </>
  )
}
Header.propTypes = {
  profileImg: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default Header
