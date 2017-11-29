import React, { Component } from 'react'
import { Icon, Menu, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default class Topbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon
        style={{
          width: "100%",
          position: "fixed",
          top: "0",
          backgroundColor: "#420040",
          zIndex: 1,
          borderRadius: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          maxHeight: "20px"

      }}
      >
        <Menu.Item style={{ marginLeft: "10%"}} name='account' active={activeItem === 'user circle'} onClick={this.handleItemClick}>
          <Link to="/login" style={{ color: "#00cd57", textDecoration: "none" }}>
          <Button style={{backgroundColor: "#420040",  color: "#00cd57"}} circular icon='user circle' />
          </Link>
        </Menu.Item>

        <Menu.Item onClick={this.handleItemClick}>
          <Link to="/" style={{ color: "#00cd57", textDecoration: "none"}}>
          Where To !!!
          </Link>
        </Menu.Item>

        <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
          <Link to="#" style={{ color: "#00cd57", textDecoration: "none" }}>
          <Button style={{backgroundColor: "#420040",  color: "#00cd57"}} circular icon='search' />
          </Link>
        </Menu.Item>

      </Menu>
    )
  }
}
