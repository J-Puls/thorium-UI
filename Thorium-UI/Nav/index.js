import React from "react";
import Block from "../Block";

const Nav = props => {
  return (
    <Block
      all={props.all}
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      justify={props.justify}
      vertical={props.vertical}
      className={props.className}
      id={props.id}
    >
      {props.children}
    </Block>
  );
};

export default Nav;
