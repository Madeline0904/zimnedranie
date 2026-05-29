import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
  keyframes,
  AnimationReferenceMetadata,
  useAnimation,
  AnimationKeyframesSequenceMetadata,
  state,
} from '@angular/animations';

export const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}',
  }),
  animate('{{ time }}'),
]);

export const sharedStyles = {
  position: 'fixed',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
  //  transform: 'translate3d(0,0,0)'
};
export const moveFromLeftKeyframes: AnimationKeyframesSequenceMetadata =
  keyframes([
    style({ transform: 'translateX(-100%)', offset: 0, 'z-index': '9999' }),
    style({ transform: 'translateX(0%)', offset: 1 }),
  ]);

export const fadeFrames: AnimationKeyframesSequenceMetadata = keyframes([
  style({ opacity: '1', offset: 0 }),
  style({ opacity: '0.3', offset: 1 }),
]);
export const moveFromLeftFade: AnimationReferenceMetadata = animation(
  [
    query(':enter, :leave', style(sharedStyles), { optional: true }),
    group([
      query(
        ':enter',
        [animate('{{enterTiming}}s {{enterDelay}}s ease', fadeFrames)],
        { optional: true }
      ),

      query(
        ':leave',
        [animate('{{leaveTiming}}s {{leaveDelay}}s ease', fadeFrames)],
        { optional: true }
      ),
    ]),
  ],
  {
    params: {
      enterTiming: '.3',
      leaveTiming: '0.7',
      enterDelay: '0',
      leaveDelay: '0',
    },
  }
);

// Routable animations
export const slideInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1, position: 'relative' })),
      ],
      { optional: true }
    ),
  ]),
]);

/*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
