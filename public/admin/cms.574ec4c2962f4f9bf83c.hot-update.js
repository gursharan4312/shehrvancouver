webpackHotUpdate("cms",{

/***/ "./src/components/JobWidget/index.js":
/*!*******************************************!*\
  !*** ./src/components/JobWidget/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobWidgetControl; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_JobList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/JobList */ "./src/components/JobList.js");
/* harmony import */ var _components_AddNewJob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/AddNewJob */ "./src/components/AddNewJob.js");


var _jsxFileName = "/home/garry/projects/shehrvancouver/shehrvancouver/src/components/JobWidget/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var JobWidgetControl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(JobWidgetControl, _React$Component);

  function JobWidgetControl(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.onChange = function (event, editor) {//   const data = editor.getData();
      //   this.props.onChange(data);
    };

    _this.addNewJob = function (job) {
      _this.setState({
        jobs: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.jobs), [job])
      });
    };

    _this.editJob = function (newjob) {
      _this.setState({
        jobs: _this.state.jobs.map(function (job) {
          return job._id === newjob._id ? newjob : job;
        })
      });
    };

    _this.deleteJob = function (id) {
      console.log("delete");
    };

    _this.toggleAddNewJob = function () {
      _this.setState({
        addNewJob: !_this.state.addNewJob
      });
    };

    _this.state = {
      jobs: [],
      addNewJob: false
    };
    return _this;
  }

  var _proto = JobWidgetControl.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      jobs: [{
        name: "Job 1",
        description: "This is the description of first job",
        pay: 12,
        location: "surrey",
        email: "sample@example.com"
      }, {
        name: "Job 2",
        description: "This is the description of first job",
        pay: 12,
        location: "surrey",
        email: "sample@example.com"
      }, {
        name: "Job 3",
        description: "This is the description of first job This is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first jobThis is the description of first job",
        pay: 12,
        location: "surrey",
        email: "sample@example.com"
      }]
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
      rel: "stylesheet",
      href: "/admin/data/bootstrap.min.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
      rel: "stylesheet",
      href: "/admin/data/jobDetails.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      className: "py-5 position-relative",
      style: {
        minHeight: "80vh"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "d-flex justify-content-between align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, "List of jobs:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      color: "info",
      onClick: this.toggleAddNewJob,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, "Add new job")), this.state.jobs.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_JobList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      jobs: this.state.jobs,
      admin: true,
      editJob: this.editJob,
      deleteJob: this.deleteJob,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, "Sorry, no jobs found come back later"), this.state.addNewJob && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AddNewJob__WEBPACK_IMPORTED_MODULE_6__["default"], {
      addNewJob: this.addNewJob,
      toggleAddNewJob: this.toggleAddNewJob,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    })));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return JobWidgetControl;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(JobWidgetControl, "JobWidgetControl", "/home/garry/projects/shehrvancouver/shehrvancouver/src/components/JobWidget/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.574ec4c2962f4f9bf83c.hot-update.js.map