/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type AppQueryVariables = {
    readonly query: string;
};
export type AppQueryResponse = {
    readonly queryArtists: ReadonlyArray<({}) | null> | null;
};



/*
query AppQuery(
  $query: String!
) {
  queryArtists(byName: $query) {
    ...Artist_artist
    __id: id
  }
}

fragment Artist_artist on Artist {
  name
  id
  image
  albums {
    ...Album_album
    __id: id
  }
  __id: id
}

fragment Album_album on Album {
  id
  name
  image
  __id: id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "byName",
    "variableName": "query",
    "type": "String"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery(\n  $query: String!\n) {\n  queryArtists(byName: $query) {\n    ...Artist_artist\n    __id: id\n  }\n}\n\nfragment Artist_artist on Artist {\n  name\n  id\n  image\n  albums {\n    ...Album_album\n    __id: id\n  }\n  __id: id\n}\n\nfragment Album_album on Album {\n  id\n  name\n  image\n  __id: id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "queryArtists",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artist",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Artist_artist",
            "args": null
          },
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "queryArtists",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artist",
        "plural": true,
        "selections": [
          v3,
          v4,
          v5,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "albums",
            "storageKey": null,
            "args": null,
            "concreteType": "Album",
            "plural": true,
            "selections": [
              v4,
              v3,
              v5,
              v2
            ]
          },
          v2
        ]
      }
    ]
  }
};
})();
(node as any).hash = 'b7948c182ed7ba142758d353ca71db6f';
export default node;
