// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {id, name, imgUrl} = destinationDetails

  return (
    <li>
      <div>
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
