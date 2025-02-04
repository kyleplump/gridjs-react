(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('gridjs'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'gridjs', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.gridjs = {}, global.React, global.gridjs, global.require$$0));
})(this, (function (exports, React, gridjs, require$$0) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var React__namespace = /*#__PURE__*/_interopNamespace(React);
    var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

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
            _this.wrapper = React.createRef();
            // Grid.js instance
            _this.instance = null;
            _this.instance = new gridjs.Grid(props || {});
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
            return React__namespace.createElement("div", { ref: this.wrapper });
        };
        return Grid;
    }(React.Component));

    var createRoot;

    var m = require$$0__default["default"];
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
            _this.ref = gridjs.createRef();
            return _this;
        }
        ReactWrapper.prototype.componentDidMount = function () {
            var root = createRoot(this.ref.current);
            root.render(this.props.element);
        };
        ReactWrapper.prototype.render = function () {
            return gridjs.h(this.props.parent, { ref: this.ref });
        };
        ReactWrapper.defaultProps = {
            parent: "div",
        };
        return ReactWrapper;
    }(gridjs.Component));
    function _(element, parent) {
        return gridjs.h(ReactWrapper, {
            element: element,
            parent: parent,
        });
    }

    exports.Grid = Grid;
    exports.ReactWrapper = ReactWrapper;
    exports._ = _;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=gridjs.development.js.map
