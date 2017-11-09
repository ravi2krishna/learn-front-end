import {style, animate, transition, state, trigger} from '@angular/core';


export class AnimationService {
  static page = [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
      ]),
      transition('* => void',
        animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
          transform: 'translateX(100%)',
          opacity: 0
        }))
      )
    ])
  ];
  static host = {
      '[@routeAnimation]': 'true',
      '[style.top]': "'0'",
      '[style.left]': "'0'",
      '[style.right]': "'0'",
      '[style.bottom]': "'30px'",
      '[style.position]': "'fixed'",
   
      
   };
}
