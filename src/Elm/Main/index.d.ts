// WARNING: Do not manually modify this file. It was generated using:
// https://github.com/dillonkearns/elm-typescript-interop
// Type definitions for Elm ports

export namespace Elm {
  namespace Main {
    export interface App {
      ports: {
        updateCountInReact: {
          subscribe(callback: (data: number) => void): void
        }
      };
    }
    export function init(options: {
      node?: HTMLElement | null;
      flags: number;
    }): Elm.Main.App;
  }
}