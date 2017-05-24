import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import '../imports/assets/plugins/jquery-1.11.3.min.js'
import AppContainer from "../imports/ui/App.jsx";

Meteor.startup(() => {
  render(<AppContainer />, document.getElementById("render-target"));
});
