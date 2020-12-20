import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">ShehrVancouver</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-2">
              <NavLink href="/components/">Send Confession</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/components/">Jobs</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="https://github.com/reactstrap/reactstrap">
                About Us
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="mx-2">
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                {/* <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
