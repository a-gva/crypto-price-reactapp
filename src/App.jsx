import { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import Coin from './components/Coin'
import './App.css'

// VIDEO: https://www.youtube.com/watch?v=cgG2_tBDWjE

function App() {

  // States declaration of mutable items
  const [listOfCoins, setListOfCoins] = useState([])
  const [searchWord, setSearchWord] = useState('')

  // useEffect / Axios for fetching data from API 
  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&').then(
      (response) => {
        setListOfCoins(response.data.coins)
      }
    )
  }, [])

  // declaring filteredCoins
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase())
  })

  return <div className='App'>
    <div className='cryptoHeader'>
      <input type="text" placeholder='Bitcoin...'
        onChange={
          (event) => {
            setSearchWord(event.target.value)
          }
        }
      />
    </div>
    <div className='cryptoDisplay'>
      {filteredCoins.map((coin) => {
        return <Coin name={coin.name} icon={coin.icon} price={coin.price.toFixed(2)} symbol={coin.symbol} />
      })}</div>
  </div>
}

export default App