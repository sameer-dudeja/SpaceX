import React, { Component } from 'react'
import { useQuery, gql } from '@apollo/client'
import classNames from 'classnames'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

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
function Launchp({ flight_number }) {
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const {
    mission_name,
    launch_date_local,
    launch_success,
    launch_year,
    rocket: { rocket_id, rocket_name, rocket_type },
  } = data.launch

  console.log(data)
  return (
    <>
      <div className='card card-body mt-5'>
        <h1 className='display-4'>
          Mission:
          <span
            className={classNames({
              'text-success': launch_success,
              'text-danger': !launch_success,
            })}
          >
            {mission_name}
          </span>
        </h1>
        <h4 className='mb-3'>Launch Details</h4>
        <ul className='list-group'>
          <li className='list-group-item'> Flight Number : {flight_number}</li>
          <li className='list-group-item'> Launch Year : {launch_year}</li>
          <li className='list-group-item'>
            Launch Date:
            <Moment format=' YYYY-MM-DD HH:mm'>{launch_date_local}</Moment>
          </li>
          <li className='list-group-item'>
            Launch Succes :
            <span
              className={classNames({
                'text-success': launch_success,
                'text-danger': !launch_success,
              })}
            >
              {launch_success ? ' Yes' : ' No'}
            </span>
          </li>
        </ul>
        <h4 className='my-3'>Rocket Details</h4>
        <ul className='list-group'>
          <li className='list-group-item'>Rocket ID: {rocket_id}</li>
          <li className='list-group-item'>Rocket Name: {rocket_name}</li>
          <li className='list-group-item'>Rocket Type: {rocket_type}</li>
        </ul>
        <Link to='/' className='btn btn-secondary'>
          Back
        </Link>
      </div>
    </>
  )
}

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params
    flight_number = parseInt(flight_number)
    return (
      <>
        <Launchp flight_number={flight_number} />
      </>
    )
  }
}

export default Launch
