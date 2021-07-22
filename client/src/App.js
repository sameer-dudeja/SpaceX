import './App.css'
// import { ApolloClient, InMemoryCache } from '@apollo/client'
// import { ApolloProvider } from '@apollo/client'
import logo from './logo.png'
import Launches from './components/Launches'

function App() {
  return (
    // <ApolloProvider client={client}>
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          alt='SpaceX Logo'
          style={{ width: 300, display: 'block', margin: 'auto' }}
        />
      </header>
      <Launches />
    </div>
    // </ApolloProvider>
  )
}

export default App
