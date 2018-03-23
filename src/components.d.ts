/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';

import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';

import {
  SnApp as SnApp
} from './components/sn-app/sn-app';

declare global {
  interface HTMLSnAppElement extends SnApp, HTMLStencilElement {
  }
  var HTMLSnAppElement: {
    prototype: HTMLSnAppElement;
    new (): HTMLSnAppElement;
  };
  interface HTMLElementTagNameMap {
    "sn-app": HTMLSnAppElement;
  }
  interface ElementTagNameMap {
    "sn-app": HTMLSnAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "sn-app": JSXElements.SnAppAttributes;
    }
  }
  namespace JSXElements {
    export interface SnAppAttributes extends HTMLAttributes {
      
      
    }
  }
}


import {
  SnGame as SnGame
} from './components/sn-game/sn-game';

declare global {
  interface HTMLSnGameElement extends SnGame, HTMLStencilElement {
  }
  var HTMLSnGameElement: {
    prototype: HTMLSnGameElement;
    new (): HTMLSnGameElement;
  };
  interface HTMLElementTagNameMap {
    "sn-game": HTMLSnGameElement;
  }
  interface ElementTagNameMap {
    "sn-game": HTMLSnGameElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "sn-game": JSXElements.SnGameAttributes;
    }
  }
  namespace JSXElements {
    export interface SnGameAttributes extends HTMLAttributes {
      history?: RouterHistory;
      
    }
  }
}


import {
  SnGameboard as SnGameboard
} from './components/sn-gameboard/sn-gameboard';

declare global {
  interface HTMLSnGameboardElement extends SnGameboard, HTMLStencilElement {
  }
  var HTMLSnGameboardElement: {
    prototype: HTMLSnGameboardElement;
    new (): HTMLSnGameboardElement;
  };
  interface HTMLElementTagNameMap {
    "sn-gameboard": HTMLSnGameboardElement;
  }
  interface ElementTagNameMap {
    "sn-gameboard": HTMLSnGameboardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "sn-gameboard": JSXElements.SnGameboardAttributes;
    }
  }
  namespace JSXElements {
    export interface SnGameboardAttributes extends HTMLAttributes {
      animationPattern?: number[];
      onGamepadTouched?: (event: CustomEvent) => void;
    }
  }
}


import {
  SnGameover as SnGameover
} from './components/sn-gameover/sn-gameover';

declare global {
  interface HTMLSnGameoverElement extends SnGameover, HTMLStencilElement {
  }
  var HTMLSnGameoverElement: {
    prototype: HTMLSnGameoverElement;
    new (): HTMLSnGameoverElement;
  };
  interface HTMLElementTagNameMap {
    "sn-gameover": HTMLSnGameoverElement;
  }
  interface ElementTagNameMap {
    "sn-gameover": HTMLSnGameoverElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "sn-gameover": JSXElements.SnGameoverAttributes;
    }
  }
  namespace JSXElements {
    export interface SnGameoverAttributes extends HTMLAttributes {
      match?: MatchResults;
      
    }
  }
}


import {
  SimonMenu as SnMenu
} from './components/sn-menu/sn-menu';

declare global {
  interface HTMLSnMenuElement extends SnMenu, HTMLStencilElement {
  }
  var HTMLSnMenuElement: {
    prototype: HTMLSnMenuElement;
    new (): HTMLSnMenuElement;
  };
  interface HTMLElementTagNameMap {
    "sn-menu": HTMLSnMenuElement;
  }
  interface ElementTagNameMap {
    "sn-menu": HTMLSnMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "sn-menu": JSXElements.SnMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface SnMenuAttributes extends HTMLAttributes {
      
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }