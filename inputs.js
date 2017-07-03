import $ from 'jquery'

import { max, draw } from './viz/chart'

const $timeline = $('#timeline');
const $viz = $('#viz');
// determine scroll direction
const delta = e => {
  if (e.type === 'DOMMouseScroll') {
    return e.originalEvent.detail * -40;
  }
  return e.originalEvent.wheelDelta;
};

const initalizeListeners = () => {
  $viz.on('mousewheel DOMMouseScroll', e => {
    e.preventDefault()
    const val = +$timeline.val();
    const scrollingUp = delta(e) > 0;

    if (scrollingUp) {
      $timeline.val(val + 1).change()
    } else {
      $timeline.val(val - 1).change()
    }
  });

  $timeline.attr({ min: 0, max }).on(
    'input change',
    e => draw(+e.target.value)
  )
}

export default initalizeListeners;
