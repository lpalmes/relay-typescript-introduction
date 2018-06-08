/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type Album_album = {
    readonly id: string | null;
    readonly name: string | null;
    readonly image: string | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "Album_album",
  "type": "Album",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "name",
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
      "kind": "ScalarField",
      "alias": "__id",
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '737a98d40b4e87d6f6e11b44bdf48297';
export default node;
