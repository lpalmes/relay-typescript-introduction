/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type Artist_artist = {
    readonly name: string;
    readonly id: string | null;
    readonly image: string | null;
    readonly albums: ReadonlyArray<({}) | null> | null;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Artist_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "image",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "albums",
      "storageKey": null,
      "args": null,
      "concreteType": "Album",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Album_album",
          "args": null
        },
        v0
      ]
    },
    v0
  ]
};
})();
(node as any).hash = '311396591727df7ca2e5dbc29c9aca97';
export default node;
