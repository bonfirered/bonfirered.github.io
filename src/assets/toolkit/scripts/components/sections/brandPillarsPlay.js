import $ from 'jQuery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';

$(document).ready(() => {
  const $section = $('[data-anchor="brandPillarsPlay"]');
  const $copy = $section.find('[data-copy]');
  const $diamond = $section.find('[data-diamond]');

  var controller = new ScrollMagic.Controller();

  // title
  var mySplitText = new SplitText($('#brandPillarsPlayTitle'), { type: 'words, chars' });
  var title = new TimelineMax().staggerFrom(mySplitText.words, 0.4, { opacity: 0, ease: Linear.easeIn, delay: .5 }, 0.25);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(title)
    .triggerHook(.95)
    .reverse(false);

  // diamonds
  var diamond = new TweenMax.staggerTo($diamond, .2, { opacity: '1', autoAlpha: 1, yoyo: true, ease: Linear.easeIn, delay: 1.5 }, 0.25);

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(diamond)
    .triggerHook(.95)
    .reverse(false);

  // copy
  var copy = new TimelineMax().fromTo($copy, .2, { opacity: '0' }, { opacity: '1', ease: Linear.easeIn, delay: 2.5 });

  new ScrollMagic.Scene({ triggerElement: $section.get(0) })
    .addTo(controller)
    .setTween(copy)
    .triggerHook(.95)
    .reverse(false);
});