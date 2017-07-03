import * as d3 from 'd3'
import { appendCircle, appendLine, threePtArc } from './chartUtils'



const drawCourt = svg => {
  const width = 940;
  const height = 500;
  const halfcourt = width / 2
  const court = svg.append('rect')
    .attr('class', 'court')

  // Three Point arcs
  svg.append('path')
    .style('fill', 'black')
    .attr('d', threePtArc(239, 240, Math.PI / 7.7, Math.PI / 1.149))
    .attr('transform', 'translate(45,250)');

  svg.append('path')
    .style('fill', 'black')
    .attr('d', threePtArc(239, 240, 1.13 * Math.PI, 1.87 * Math.PI))
    .attr('transform', `translate(${900 - 5},250)`);

  appendCircle(svg, halfcourt, 250, 60)
  appendCircle(svg, halfcourt, 250, 20)
  appendLine(svg, halfcourt, 0, halfcourt, 500);

  // corner three straight lines
  appendLine(svg, 0, 30, 140, 30);
  appendLine(svg, 0, 500 - 30, 140, 500 - 30);
  appendLine(svg, 940 - 140, 30, 940, 30);
  appendLine(svg, 940 - 140, 500 - 30, 940, 500 - 30);

  // sideline ticks
  appendLine(svg, 280, 500, 280, 500 - 30);
  appendLine(svg, 280, 0, 280, 30);
  appendLine(svg, 940 - 280, 500, 940 - 280, 500 - 30);
  appendLine(svg, 940 - 280, 0, 940 - 280, 30);

  //freethrow lines
  // freethrow circle
  appendCircle(svg, 190, 250, 60)
  appendCircle(svg, 940 - 190, 250, 60)
  // side outer
  appendLine(svg, 0, 170, 190, 170);
  appendLine(svg, 0, 500 - 170, 190, 500 - 170);
  appendLine(svg, 940 - 190, 170, 940, 170);
  appendLine(svg, 940 - 190, 500 - 170, 940, 500 - 170);
  // side inner
  appendLine(svg, 0, 190, 190, 190);
  appendLine(svg, 0, 500 - 190, 190, 500 - 190);
  appendLine(svg, 940 - 190, 190, 940, 190);
  appendLine(svg, 940 - 190, 500 - 190, 940, 500 - 190);
  // freethrow line
  appendLine(svg, 190, 170, 190, 500 - 170);
  appendLine(svg, 940 - 190, 170, 940 - 190, 500 - 170);

}

export default drawCourt
