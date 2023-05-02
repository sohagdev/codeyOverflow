import { comments } from './commonData'
import Card from './Card'

const App = () => {
  return (
    <>
      {comments.map((comment, index) => (
        <Card key={index} commentObject={comment} />
      ))}
    </>
  )
}

export default App
