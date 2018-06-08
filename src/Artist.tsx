import * as React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Col, Row, Box } from "jsxstyle";
import { Artist_artist } from "./__generated__/Artist_artist.graphql";
import Album from "./Album";
interface Props {
  artist: Artist_artist;
}

class Artist extends React.Component<Props> {
  render() {
    const { artist } = this.props;
    return (
      <Col padding="16px">
        <Row justifyContent="space-around" alignItems="center" padding="8px">
          <Box fontSize="2em">{artist.name}</Box>
          {artist.image ? (
            <Box
              component="img"
              props={{ src: artist.image }}
              width="300px"
              maxHeight="300px"
            />
          ) : null}
        </Row>
        <Col>
          {artist.albums
            ? artist.albums.map((album, index) => {
                if (album) {
                  return <Album key={index} album={album as any} />;
                }
                return null;
              })
            : null}
        </Col>
      </Col>
    );
  }
}

export default createFragmentContainer(
  Artist,
  graphql`
    fragment Artist_artist on Artist {
      id
      name
      image
      albums {
        ...Album_album
      }
    }
  `
);
