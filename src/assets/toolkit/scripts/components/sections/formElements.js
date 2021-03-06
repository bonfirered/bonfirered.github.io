import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="formElements"]');
  const $card = $section.find('[data-card]');

  var controller = new ScrollMagic.Controller();

  // cards
  var card = new TweenMax.staggerTo($card, .2, { opacity: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: .15 }, 0.15);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(card)
    .triggerHook(.95)
    .reverse(false);
});
