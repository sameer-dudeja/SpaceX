import React from 'react'
import { useQuery, gql } from '@apollo/client'
// import classNames from 'classnames'

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_date_local
      launch_success
      launch_year
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`
export default function Launch() {
  let { flight_number } = this.props.match.params
  flight_number = parseInt(flight_number)
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data)
  return (
    <>
      <h1>test</h1>
    </>
  )
}
