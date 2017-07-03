import { det, atl } from './players'

const getPlayerEvents = event => event[5]

const getPlayerById = (team, id) => team.players.filter(p => p.playerid === id)[0]

const replaceIdsWithNames = p => {
  const coordinates = { x: p[2], y: p[3] };
  if (p[0] === - 1) {
    return {
      team: 'ball',
      radius: p[4],
      ...coordinates
    };
  }
  if (p[0] === det.teamid) {
    const playerInfo = getPlayerById(det, p[1]);
    return {
      team: 'det',
      ...coordinates,
      ...playerInfo
    };
  }

  const playerInfo = getPlayerById(atl, p[1]);
  return {
    team: 'atl',
    ...coordinates,
    ...playerInfo
  };

}

const hydratePlayerEvents = playerEvents => playerEvents.map(replaceIdsWithNames)

export {
  getPlayerEvents,
  replaceIdsWithNames,
  hydratePlayerEvents
}