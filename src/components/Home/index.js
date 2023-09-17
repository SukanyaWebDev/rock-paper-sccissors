import {Component, React} from 'react'
import Popup from 'reactjs-popup'
import './index.css'
import Card from '../Card/index'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    disPlayBased: true,
    count: 0,
    thisClickedId: '',
    ourImg: '',
    boatImg: '',
    displayText: '',
  }

  receiveTheId = id => {
    const {count} = this.state

    const winImgIndex = choicesList.findIndex(eachItem => eachItem.id === id)
    const ourImgOne = choicesList[winImgIndex].imageUrl
    let add = 0
    const randNum = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    const dealingObj = choicesList[randNum].id
    const boatImgOne = choicesList[randNum].imageUrl
    let displayTextOne = 0
    const caseOne = id === 'PAPER' && dealingObj === 'ROCK'
    const case2 = id === 'SCISSORS' && dealingObj === 'ROCK'
    const case3 = id === 'ROCK' && dealingObj === 'PAPER'
    const case4 = id === 'SCISSORS' && dealingObj === 'PAPER'
    const case5 = id === 'ROCK' && dealingObj === 'SCISSORS'
    const case6 = id === 'PAPER' && dealingObj === 'SCISSORS'
    const main = dealingObj === id
    if (main) {
      displayTextOne = 'IT IS DRAW'
      add = add + count + 0
    } else if (caseOne) {
      displayTextOne = 'YOU WON'
      add = add + count + 1
    } else if (case2) {
      displayTextOne = 'YOU LOSE'
      add = add + count - 1
    } else if (case3) {
      displayTextOne = 'YOU LOSE'
      add = add + count - 1
    } else if (case4) {
      displayTextOne = 'YOU WON'
      add = add + count + 1
    } else if (case5) {
      displayTextOne = 'YOU WON'
      add = add + count + 1
    } else if (case6) {
      // eslint-disable-next-line no-unused-vars
      displayTextOne = 'YOU LOSE'
      add = add + count - 1
    }
    this.setState({
      count: add,
      ourImg: ourImgOne,
      boatImg: boatImgOne,
      disPlayBased: false,
      displayText: displayTextOne,
    })
  }

  playAgainGame = () => {
    this.setState({disPlayBased: true})
  }

  renderSuccessCard = () => {
    const {displayText, ourImg, boatImg} = this.state

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
            <img
              src={boatImg}
              alt="opponent choice"
              style={{height: '250px'}}
            />
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
          <p>{displayText}</p>
          <button
            type="button"
            onClick={this.playAgainGame}
            className="buttonOne"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {disPlayBased, count} = this.state
    return (
      <div className="mainDiv">
        <div className="hed">
          <div>
            <h1>Rock Paper Scissors</h1>
          </div>
          <div className="scoreDis">
            <p>Score</p>
            <p style={{fontFamily: 'Roboto'}}>{count}</p>
          </div>
        </div>
        <div className="myListOne">
          {disPlayBased ? (
            <ul className="myList">
              {choicesList.map(eachItem => (
                <Card
                  eachItem={eachItem}
                  key={eachItem.id}
                  receiveTheId={this.receiveTheId}
                />
              ))}
            </ul>
          ) : (
            this.renderSuccessCard()
          )}
        </div>

        <div className="popBut">
          <Popup
            trigger={
              <button className="buttonOne" type="button">
                Rules
              </button>
            }
            modal
            nested
            position="top center"
            className="myStyle"
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close} type="button">
                  &times;
                </button>

                <div className=" myStyle">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    style={{height: '500px'}}
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}
export default Home
