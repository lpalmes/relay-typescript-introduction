import * as React from "react";
import "./App.css";
import { QueryRenderer, graphql } from "react-relay";
import { AppQueryResponse } from "./__generated__/AppQuery.graphql";
import { Col, Row, Box } from "jsxstyle";

import environment from "./relay";
import Artist from "./Artist";

interface State {
  query: string;
  searchQuery: string;
}

class App extends React.Component<{}, State> {
  state = {
    query: "Aphex Twin",
    searchQuery: "Sufjan Stevens"
  };
  render() {
    return (
      <Col height="100%" width="100%">
        <Box>Search for an artist</Box>
        <Row>
          <input
            onChange={e => this.setState({ searchQuery: e.target.value })}
            value={this.state.searchQuery}
          />
          <button
            onClick={() => this.setState({ query: this.state.searchQuery })}
          >
            Buscar
          </button>
        </Row>
        <Col padding="16px">
          <QueryRenderer
            environment={environment}
            query={graphql`
              query AppQuery($query: String!) {
                queryArtists(byName: $query) {
                  ...Artist_artist
                }
              }
            `}
            variables={{
              query: this.state.query
            }}
            render={({
              error,
              props
            }: {
              error: Error | null;
              props: AppQueryResponse | null;
              retry?: () => void;
            }) => {
              if (error) {
                return <div>There was an error! :(</div>;
              }

              if (props && props.queryArtists) {
                return (
                  <Col height="100%" width="100%" flexWrap="wrap">
                    <Box fontSize="2em">Results for {this.state.query}</Box>
                    {props.queryArtists.map((artist, index) => {
                      if (artist) {
                        return <Artist key={index} artist={artist as any} />;
                      }
                      return null;
                    })}
                  </Col>
                );
              }

              return <div>Loading...</div>;
            }}
          />
        </Col>
      </Col>
    );
  }
}

export default App;
