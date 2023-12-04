import React, {Component} from 'react';
import './Application.sass';
import {IndexPage} from "@src/pages/index.page";

export class Application extends Component<{}> {

  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render() {
    return <IndexPage/>
  }
}