import $ from 'jquery';

const replaceScoreboard = d => {
  // no time for css at the moment
  // const picture = $('<img></img>')
  // picture.attr({
  //   src: `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${d.playerid}.png`
  // })
  // $('#picture').empty().append(picture);
  $('#firstname').text(d.firstname)
  $('#lastname').text(d.lastname)
  $('#position').text(d.position)
}

export default replaceScoreboard;
