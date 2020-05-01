export namespace Elm {
  namespace Main {
    export interface App {
      ports: {};
    }
    export function init(options: {
      node?: HTMLElement | null;
      flags: null;
    }): Elm.Main.App;
  }
}
