import React, { Component } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
import LaunchItem from './LaunchItem'
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_succes
    }
  }
`
function LaunchesQ() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data)
  return (
    <>
      {data.launches.map((launch) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </>
  )
}
export class Launches extends Component {
  render() {
    return (
      <>
        <ApolloProvider client={client}>
          <h1 className='display-4 my-3'>Launches</h1>
          <LaunchesQ />
        </ApolloProvider>
      </>
    )
  }
}

export default Launches
