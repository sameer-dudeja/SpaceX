import './App.css'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
// import { Router, Route } from 'react-router-dom'
import logo from './logo.png'
import Launches from './components/Launches'
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Router> */}
      <div className='container'>
        <header className='App-header'>
          <img
            src={logo}
            alt='SpaceX Logo'
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
        </header>
        <Launches />
      </div>
      {/* </Router> */}
    </ApolloProvider>
  )
}

export default App
