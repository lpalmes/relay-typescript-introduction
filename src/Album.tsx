import * as React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Row, Box } from "jsxstyle";
import { Album_album } from "./__generated__/Album_album.graphql";
interface Props {
  album: Album_album;
}

class Album extends React.Component<Props> {
  render() {
    const { album } = this.props;
    return (
      <Row paddingTop="8px" paddingBottom="8px" alignItems="center">
        <Box
          component="img"
          props={{
            src: album.image
              ? album.image
              : "https://s.mxmcdn.net/site/images/album-placeholder.png"
          }}
          maxWidth="50px"
          height="50px"
        />
        <Box marginLeft="8px">{album.name}</Box>
      </Row>
    );
  }
}

export default createFragmentContainer(
  Album,
  graphql`
    fragment Album_album on Album {
      id
      name
      image
    }
  `
);
