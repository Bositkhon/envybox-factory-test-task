(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: {},
      isError: null,
      form: {
        full_name: "",
        phone: "",
        content: ""
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.$axios.post("feedbacks", this.form).then(function (response) {
        _this.isError = false;
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
        _this.isError = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    [
      _c(
        "b-row",
        {
          ref: "form",
          staticClass: "justify-content-center align-items-center vh-100"
        },
        [
          _c(
            "b-col",
            { attrs: { lg: "6", sm: "12", md: "12" } },
            [
              _c(
                "b-alert",
                {
                  attrs: {
                    show: _vm.isError === false,
                    variant: "success",
                    dismissible: ""
                  }
                },
                [
                  _c("h4", { staticClass: "alert-heading" }, [
                    _vm._v("Thank you!")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("The feedback has been sent!")])
                ]
              ),
              _vm._v(" "),
              _c(
                "b-alert",
                {
                  attrs: {
                    show: _vm.isError === true,
                    variant: "danger",
                    dismissible: ""
                  }
                },
                [
                  _c("h4", { staticClass: "alert-heading" }, [
                    _vm._v("Something went wrong!")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.errors, function(messages, field) {
                    return _c(
                      "div",
                      { key: field },
                      _vm._l(messages, function(message) {
                        return _c("p", { key: message }, [
                          _vm._v(
                            "\n            " + _vm._s(message) + "\n          "
                          )
                        ])
                      }),
                      0
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "b-card",
                [
                  _c(
                    "b-card-body",
                    [
                      _c(
                        "b-form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.submit($event)
                            }
                          }
                        },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { "label-for": "full_name" } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "full_name",
                                  placeholder: "Full name"
                                },
                                model: {
                                  value: _vm.form.full_name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "full_name", $$v)
                                  },
                                  expression: "form.full_name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { "label-for": "phone" } },
                            [
                              _c("b-form-input", {
                                attrs: { id: "phone", placeholder: "Phone" },
                                model: {
                                  value: _vm.form.phone,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "phone", $$v)
                                  },
                                  expression: "form.phone"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            [
                              _c("b-form-textarea", {
                                attrs: {
                                  placeholder: "Enter something...",
                                  rows: "3",
                                  "max-rows": "6"
                                },
                                model: {
                                  value: _vm.form.content,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "content", $$v)
                                  },
                                  expression: "form.content"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: {
                                block: "",
                                type: "submit",
                                variant: "primary"
                              }
                            },
                            [_vm._v("Submit")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);