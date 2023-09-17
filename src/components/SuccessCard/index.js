import './index.css'

const SuccessCard = props => {
  const {displayText, playAgainGame, ourImg, boatImg} = props

  const playAgainGameFor = () => {
    playAgainGame()
  }

  return (
    <div className="ashokDec">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1>YOU</h1>
          <img src={ourImg} alt="your choice" style={{height: '250px'}} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1>OPPONENT</h1>
          <img src={boatImg} alt="opponent choice" style={{height: '250px'}} />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          color: '#ffffff',
        }}
      >
        <h1>{displayText}</h1>
        <button type="button" onClick={playAgainGameFor} className="buttonOne">
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default SuccessCard
