import PropTypes from 'prop-types'
const Body = ({ comment }) => {
  return <p>{comment}</p>
}
Body.propTypes = {
  comment: PropTypes.string.isRequired
}
export default Body
