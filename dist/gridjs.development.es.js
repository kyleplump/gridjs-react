import * as React from 'react';
import { createRef, Component } from 'react';
import { Grid as Grid$1, h, createRef as createRef$1, Component as Component$1 } from 'gridjs';
import require$$0 from 'react-dom';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(props) {
        var _this = _super.call(this, props) || this;
        _this.wrapper = createRef();
        // Grid.js instance
        _this.instance = null;
        _this.instance = new Grid$1(props || {});
        return _this;
    }
    Grid.prototype.getInstance = function () {
        return this.instance;
    };
    Grid.prototype.componentDidMount = function () {
        // prevent gridjs from complaining that the container is not empty
        if (this.wrapper.current.childNodes.length > 0) {
            this.wrapper.current.innerHTML = '';
        }
        this.instance.render(this.wrapper.current);
    };
    Grid.prototype.componentDidUpdate = function () {
        var _this = this;
        Promise.resolve(this.instance.config.plugin.remove("pagination")).then(function () {
            Promise.resolve(_this.instance.config.plugin.remove("search")).then(function () {
                _this.instance.updateConfig(_this.props).forceRender();
            });
        });
    };
    Grid.prototype.render = function () {
        return React.createElement("div", { ref: this.wrapper });
    };
    return Grid;
}(Component));

var createRoot;

var m = require$$0;
if (process.env.NODE_ENV === 'production') {
  createRoot = m.createRoot;
  m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

var ReactWrapper = /** @class */ (function (_super) {
    __extends(ReactWrapper, _super);
    function ReactWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = createRef$1();
        return _this;
    }
    ReactWrapper.prototype.componentDidMount = function () {
        var root = createRoot(this.ref.current);
        root.render(this.props.element);
    };
    ReactWrapper.prototype.render = function () {
        return h(this.props.parent, { ref: this.ref });
    };
    ReactWrapper.defaultProps = {
        parent: "div",
    };
    return ReactWrapper;
}(Component$1));
function _(element, parent) {
    return h(ReactWrapper, {
        element: element,
        parent: parent,
    });
}

export { Grid, ReactWrapper, _ };
//# sourceMappingURL=gridjs.development.es.js.map
