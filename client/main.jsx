import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import '../imports/ui/js/jquery.js'
import '../imports/ui/js/bootstrap.min.js'
import AppContainer from "../imports/ui/App.jsx";

Meteor.startup(() => {
  render(<AppContainer />, document.getElementById("render-target"));
});
