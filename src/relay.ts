import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestNode,
  Variables,
  CacheConfig,
  UploadableMap
} from "relay-runtime";
// @ts-ignore
import RelayQueryResponseCache from "relay-runtime/lib/RelayQueryResponseCache";

const baseUrl = "https://spotify-graphql-server.herokuapp.com/graphql";

const cache = new RelayQueryResponseCache({ size: 250, ttl: 60 * 5 * 1000 });

function fetchQuery(
  operation: RequestNode,
  variables: Variables,
  cacheConfig: CacheConfig,
  uploadables: UploadableMap | undefined
) {
  const text = operation.text;
  const isQuery = operation.operationKind === "query";

  if (isQuery && !cacheConfig.force) {
    const fromCache = cache.get(text, variables);
    if (fromCache) {
      return fromCache;
    }
  }

  return fetch(baseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  })
    .then(response => {
      return response.json();
    })
    .then(json => {
      if (json && isQuery) {
        cache.set(text, variables, json);
      } else if (!isQuery) {
        cache.clear();
      }
      return json;
    });
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);

const source = new RecordSource();
const relayStore = new Store(source);

const environment = new Environment({
  network,
  store: relayStore
});

export default environment;
