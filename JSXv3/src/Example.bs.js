

import * as React from "react";

function use(param) {
  return React.useCallback((function (action) {
                if (action) {
                  return action.hello;
                } else {
                  return "Foo";
                }
              }), []);
}

export {
  use ,
}
/* react Not a pure module */
