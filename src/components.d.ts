/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SaButton {
        "disabled": boolean;
        "type": string;
        "variant": 'primary' | 'secondary';
    }
    interface SaCopy {
        "as": 'span' | 'p';
        "variant": 'small' | 'medium' | 'large';
    }
    interface SaHeading {
        "as": 'h1' | 'h2';
        "variant": 'small' | 'medium' | 'large' | 'title';
    }
    interface SaImage {
        "src": string;
    }
    interface SaProductTile {
        "img": string;
        "name": string;
        "price": number;
        "quantity": number;
        "units": string;
    }
    interface SaTextInput {
        "disabled": boolean;
        "type": 'text' | 'email';
        "value": string;
    }
    interface TwgOffCanvas {
        "close": () => Promise<void>;
        "heading": string;
        "isOpen": boolean;
        "open": () => Promise<void>;
    }
}
declare global {
    interface HTMLSaButtonElement extends Components.SaButton, HTMLStencilElement {
    }
    var HTMLSaButtonElement: {
        prototype: HTMLSaButtonElement;
        new (): HTMLSaButtonElement;
    };
    interface HTMLSaCopyElement extends Components.SaCopy, HTMLStencilElement {
    }
    var HTMLSaCopyElement: {
        prototype: HTMLSaCopyElement;
        new (): HTMLSaCopyElement;
    };
    interface HTMLSaHeadingElement extends Components.SaHeading, HTMLStencilElement {
    }
    var HTMLSaHeadingElement: {
        prototype: HTMLSaHeadingElement;
        new (): HTMLSaHeadingElement;
    };
    interface HTMLSaImageElement extends Components.SaImage, HTMLStencilElement {
    }
    var HTMLSaImageElement: {
        prototype: HTMLSaImageElement;
        new (): HTMLSaImageElement;
    };
    interface HTMLSaProductTileElement extends Components.SaProductTile, HTMLStencilElement {
    }
    var HTMLSaProductTileElement: {
        prototype: HTMLSaProductTileElement;
        new (): HTMLSaProductTileElement;
    };
    interface HTMLSaTextInputElement extends Components.SaTextInput, HTMLStencilElement {
    }
    var HTMLSaTextInputElement: {
        prototype: HTMLSaTextInputElement;
        new (): HTMLSaTextInputElement;
    };
    interface HTMLTwgOffCanvasElement extends Components.TwgOffCanvas, HTMLStencilElement {
    }
    var HTMLTwgOffCanvasElement: {
        prototype: HTMLTwgOffCanvasElement;
        new (): HTMLTwgOffCanvasElement;
    };
    interface HTMLElementTagNameMap {
        "sa-button": HTMLSaButtonElement;
        "sa-copy": HTMLSaCopyElement;
        "sa-heading": HTMLSaHeadingElement;
        "sa-image": HTMLSaImageElement;
        "sa-product-tile": HTMLSaProductTileElement;
        "sa-text-input": HTMLSaTextInputElement;
        "twg-off-canvas": HTMLTwgOffCanvasElement;
    }
}
declare namespace LocalJSX {
    interface SaButton {
        "disabled"?: boolean;
        "type"?: string;
        "variant"?: 'primary' | 'secondary';
    }
    interface SaCopy {
        "as"?: 'span' | 'p';
        "variant"?: 'small' | 'medium' | 'large';
    }
    interface SaHeading {
        "as"?: 'h1' | 'h2';
        "variant"?: 'small' | 'medium' | 'large' | 'title';
    }
    interface SaImage {
        "src"?: string;
    }
    interface SaProductTile {
        "img"?: string;
        "name"?: string;
        "price"?: number;
        "quantity"?: number;
        "units"?: string;
    }
    interface SaTextInput {
        "disabled"?: boolean;
        "onSaInput"?: (event: CustomEvent<any>) => void;
        "type"?: 'text' | 'email';
        "value"?: string;
    }
    interface TwgOffCanvas {
        "heading"?: string;
        "isOpen"?: boolean;
    }
    interface IntrinsicElements {
        "sa-button": SaButton;
        "sa-copy": SaCopy;
        "sa-heading": SaHeading;
        "sa-image": SaImage;
        "sa-product-tile": SaProductTile;
        "sa-text-input": SaTextInput;
        "twg-off-canvas": TwgOffCanvas;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sa-button": LocalJSX.SaButton & JSXBase.HTMLAttributes<HTMLSaButtonElement>;
            "sa-copy": LocalJSX.SaCopy & JSXBase.HTMLAttributes<HTMLSaCopyElement>;
            "sa-heading": LocalJSX.SaHeading & JSXBase.HTMLAttributes<HTMLSaHeadingElement>;
            "sa-image": LocalJSX.SaImage & JSXBase.HTMLAttributes<HTMLSaImageElement>;
            "sa-product-tile": LocalJSX.SaProductTile & JSXBase.HTMLAttributes<HTMLSaProductTileElement>;
            "sa-text-input": LocalJSX.SaTextInput & JSXBase.HTMLAttributes<HTMLSaTextInputElement>;
            "twg-off-canvas": LocalJSX.TwgOffCanvas & JSXBase.HTMLAttributes<HTMLTwgOffCanvasElement>;
        }
    }
}
