import * as d3 from 'd3'

const appendCircle = (el, cx, cy, r) => el
  .append('circle')
  .attr('class', 'lines')
  .attr('cx', cx)
  .attr('cy', cy)
  .attr('r', r)
  .attr('fill', null);

const appendLine = (el, x1, y1, x2, y2) => el
  .append('line')
  .attr('class', 'lines')
  .attr('x1', x1)
  .attr('y1', y1)
  .attr('x2', x2)
  .attr('y2', y2);

const threePtArc = (ir, or, s, e) => d3.arc()
  .innerRadius(ir)
  .outerRadius(or)
  .startAngle(s)
  .endAngle(e);

export { appendCircle, appendLine, threePtArc };