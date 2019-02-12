import React, { Component } from "react";
import { Segment, Header, Icon, Input } from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

export class MessagesHeader extends Component {
  render() {
    return (
      <Segment clearing>
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span>
            Channel
            <Icon name="star outline" color="black" />
          </span>
          <HeaderSubHeader>2 Users</HeaderSubHeader>
        </Header>
        <Header floated="right">
          <Input
            size="mini"
            icon="search"
            name="searchItem"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;
