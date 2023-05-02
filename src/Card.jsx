import PropTypes from 'prop-types'
import Header from './Header'
import Body from './Body'

const Card = ({ commentObject }) => {
  return (
    <div>
      <Header
        profileImg={commentObject.profileImg}
        username={commentObject.username}
      />
      <Body comment={commentObject.comment} />
    </div>
  )
}
Card.propTypes = {
  commentObject: PropTypes.object.isRequired
}

export default Card
