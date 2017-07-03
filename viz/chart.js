import * as d3 from 'd3'
import {
  getPlayerEvents,
  replaceIdsWithNames,
  hydratePlayerEvents
} from './../data/utils'
import { det, atl } from './../data/players'
import events from './../data/events'

import drawCourt from './court'
import replaceScoreboard from './scoreboardUtils'
const max = events.moments.length - 1

// style configs
const colors = { det: 'blue', atl: 'red', ball: 'orange' };
const width = 940;
const height = 500;
const halfcourt = width / 2;

// scaling player position to svg size
const getRelativePosition = (c, dim) => c * dim / 100; 

const svg = d3.select('#chart').append('svg')
  .attr('id', 'viz')
  .attr('width', width)
  .attr('height', height);

drawCourt(svg);

const draw = i => {
  remove()
  const d = hydratePlayerEvents(getPlayerEvents(events.moments[i])).reverse();
  
  const nodes = svg
    .append('g')
    .attr('id', 'players')
    .selectAll('circle')
    .data(d)
    .enter()

  const playerNode = nodes.append('g')

  playerNode.append('circle')
    .attr('class', 'node')
    .attr('cx', d => d.x * 10)
    .attr('cy', d => d.y * 10)
    .on('mouseover', d => replaceScoreboard(d))
    .style('fill', d => colors[d.team]);

  playerNode.append('text')
      .attr('class', 'jersey')
      .attr('x', d => d.x * 10)
      .attr('y', d => (d.y * 10) + 6)
      .text(d => d.jersey)
      .attr('text-anchor', 'middle')
};

const remove = () => {
  svg.selectAll('#players')
    .remove()
}

draw(0)

export { max, draw }