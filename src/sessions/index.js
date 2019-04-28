import React, { memo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import _str from 'lodash/string'

const Sessions = props => {
  const { user, session } = props

  useEffect(() => {
    // Fetch sessions
    props.requests.sessions.all()
  }, [])

  /**
   * Filter out any players that match the current user's id
   *
   * @param player
   * @returns {boolean}
   */
  const filterPlayer = player => {
    return player.userId !== user.id
  }

  return (
    <div>
      <h3>Welcome, {_str.words(user.name)[0]}</h3>
      <h3>Sessions</h3>
      <ul>
        {session.all &&
          session.all.map(session => (
            <li key={`session-${session.id}`}>
              <Link to={`session/${session.code}`}>Original monopoly game</Link>{' '}
              created{' '}
              {moment
                .utc(session.createdAt)
                .local()
                .toNow()}{' '}
              against
              <ul>
                {session.players.filter(filterPlayer).map(player => (
                  <li key={`session-player-${player.id}`}>{player.name}</li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default memo(Sessions)
