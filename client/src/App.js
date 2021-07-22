import './App.css'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.png'
import Launches from './components/Launches'
import Launch from './components/Launch'
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className='container'>
          <header className='App-header'>
            <img
              src={logo}
              alt='SpaceX Logo'
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
          </header>
          <Route exact path='/' component={Launches} />
          <Route exact path='/lauches/:flight_number' component={Launch} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
