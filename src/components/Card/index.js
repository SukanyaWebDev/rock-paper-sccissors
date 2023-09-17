import './index.css'

const Card = props => {
  const {eachItem, receiveTheId} = props
  const {id} = eachItem
  const name = id.toLowerCase()
  const sendTheId = () => {
    receiveTheId(id)
    console.log(`${name}Button`)
  }
  return (
    <li key={eachItem.id} className="myJHKJDH">
      <button
        type="button"
        className="muyButton"
        onClick={sendTheId}
        data-testid={`${name}Button`}
      >
        <img src={eachItem.imageUrl} alt={eachItem.id} className="buttonCon" />
      </button>
    </li>
  )
}
export default Card
