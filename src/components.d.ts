/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface AeDevlistComponent {

    }
  }

  interface HTMLAeDevlistComponentElement extends StencilComponents.AeDevlistComponent, HTMLStencilElement {}

  var HTMLAeDevlistComponentElement: {
    prototype: HTMLAeDevlistComponentElement;
    new (): HTMLAeDevlistComponentElement;
  };
  interface HTMLElementTagNameMap {
    'ae-devlist-component': HTMLAeDevlistComponentElement;
  }
  interface ElementTagNameMap {
    'ae-devlist-component': HTMLAeDevlistComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ae-devlist-component': JSXElements.AeDevlistComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface AeDevlistComponentAttributes extends HTMLAttributes {
      'onOnToggle'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AeLogoComponent {
      'firstcolor': string;
      'secondcolor': string;
    }
  }

  interface HTMLAeLogoComponentElement extends StencilComponents.AeLogoComponent, HTMLStencilElement {}

  var HTMLAeLogoComponentElement: {
    prototype: HTMLAeLogoComponentElement;
    new (): HTMLAeLogoComponentElement;
  };
  interface HTMLElementTagNameMap {
    'ae-logo-component': HTMLAeLogoComponentElement;
  }
  interface ElementTagNameMap {
    'ae-logo-component': HTMLAeLogoComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ae-logo-component': JSXElements.AeLogoComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface AeLogoComponentAttributes extends HTMLAttributes {
      'firstcolor'?: string;
      'secondcolor'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AeSvgComponent {
      'aegreen': string;
      'aered': string;
    }
  }

  interface HTMLAeSvgComponentElement extends StencilComponents.AeSvgComponent, HTMLStencilElement {}

  var HTMLAeSvgComponentElement: {
    prototype: HTMLAeSvgComponentElement;
    new (): HTMLAeSvgComponentElement;
  };
  interface HTMLElementTagNameMap {
    'ae-svg-component': HTMLAeSvgComponentElement;
  }
  interface ElementTagNameMap {
    'ae-svg-component': HTMLAeSvgComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ae-svg-component': JSXElements.AeSvgComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface AeSvgComponentAttributes extends HTMLAttributes {
      'aegreen'?: string;
      'aered'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;