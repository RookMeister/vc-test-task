(self["webpackChunkvc_test_task"] = self["webpackChunkvc_test_task"] || []).push([["src_components_core_Popover_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Popover.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Popover.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.kmtt-popover {\n  position: relative;\n  cursor: pointer;\n}\n.kmtt-popover .body {\n  position: absolute;\n  z-index: 1;\n  right: 0;\n  width: 100%;\n  background-color: #17191c;\n  box-shadow: 0 3px 24px rgba(0,0,0,.4);\n}\n.popover-enter, .popover-leave-to  {\n  opacity: 0;\n  transition: opacity 0.1s linear;\n}\n.popover-enter-active, .popover-leave-active {\n  transition: opacity 0.1s linear;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/components/core/Popover.vue"],"names":[],"mappings":";AAgDA;EACA,kBAAA;EACA,eAAA;AACA;AAEA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,WAAA;EACA,yBAAA;EACA,qCAAA;AACA;AAEA;EACA,UAAA;EACA,+BAAA;AACA;AAEA;EACA,+BAAA;AACA","sourcesContent":["<template>\n  <div class=\"kmtt-popover\" ref=\"popover\">\n    <div @click=\"handleOpenPopover\">\n      <slot></slot>\n    </div>\n    <transition name=\"popover\">\n      <div v-show=\"visible\" class=\"body\">\n        <slot name=\"content\"></slot>\n      </div>\n    </transition>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { Vue, Component } from 'vue-property-decorator';\n\n@Component\nexport default class Popover extends Vue {\n  visible = false;\n\n  mounted() {\n    window.addEventListener('click', (e) => this.onOutsideClicked(e))\n  }\n\n  onOutsideClicked(e: MouseEvent) {\n    if ((this.$refs['popover'] as Element).contains(e.target as Element)) {\n      return;\n    }\n\n    this.handleClosePopover();\n  }\n\n  handleOpenPopover() {\n    this.visible = true;\n  }\n\n  handleClosePopover() {\n    this.visible = false;\n  }\n\n  beforeDestroy() {\n    window.removeEventListener('click', (e) => this.onOutsideClicked(e))\n  }\n\n}\n</script>\n\n<style>\n.kmtt-popover {\n  position: relative;\n  cursor: pointer;\n}\n\n.kmtt-popover .body {\n  position: absolute;\n  z-index: 1;\n  right: 0;\n  width: 100%;\n  background-color: #17191c;\n  box-shadow: 0 3px 24px rgba(0,0,0,.4);\n}\n\n.popover-enter, .popover-leave-to  {\n  opacity: 0;\n  transition: opacity 0.1s linear;\n}\n\n.popover-enter-active, .popover-leave-active {\n  transition: opacity 0.1s linear;\n}\n\n\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Popover.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Popover.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Popover.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Popover.vue?vue&type=style&index=0&lang=css&");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Popover.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Popover.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Popover = /** @class */ (function (_super) {
    __extends(Popover, _super);
    function Popover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visible = false;
        return _this;
    }
    Popover.prototype.mounted = function () {
        var _this = this;
        window.addEventListener('click', function (e) { return _this.onOutsideClicked(e); });
    };
    Popover.prototype.onOutsideClicked = function (e) {
        if (this.$refs['popover'].contains(e.target)) {
            return;
        }
        this.handleClosePopover();
    };
    Popover.prototype.handleOpenPopover = function () {
        this.visible = true;
    };
    Popover.prototype.handleClosePopover = function () {
        this.visible = false;
    };
    Popover.prototype.beforeDestroy = function () {
        var _this = this;
        window.removeEventListener('click', function (e) { return _this.onOutsideClicked(e); });
    };
    Popover = __decorate([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component
    ], Popover);
    return Popover;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popover);


/***/ }),

/***/ "./src/components/core/Popover.vue":
/*!*****************************************!*\
  !*** ./src/components/core/Popover.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popover_vue_vue_type_template_id_445411a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popover.vue?vue&type=template&id=445411a5& */ "./src/components/core/Popover.vue?vue&type=template&id=445411a5&");
/* harmony import */ var _Popover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popover.vue?vue&type=script&lang=ts& */ "./src/components/core/Popover.vue?vue&type=script&lang=ts&");
/* harmony import */ var _Popover_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popover.vue?vue&type=style&index=0&lang=css& */ "./src/components/core/Popover.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Popover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _Popover_vue_vue_type_template_id_445411a5___WEBPACK_IMPORTED_MODULE_0__.render,
  _Popover_vue_vue_type_template_id_445411a5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/core/Popover.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/core/Popover.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./src/components/core/Popover.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Popover.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Popover.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./src/components/core/Popover.vue?vue&type=script&lang=ts&":
/*!******************************************************************!*\
  !*** ./src/components/core/Popover.vue?vue&type=script&lang=ts& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Popover.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Popover.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_2_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/core/Popover.vue?vue&type=template&id=445411a5&":
/*!************************************************************************!*\
  !*** ./src/components/core/Popover.vue?vue&type=template&id=445411a5& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_template_id_445411a5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_template_id_445411a5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_template_id_445411a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Popover.vue?vue&type=template&id=445411a5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Popover.vue?vue&type=template&id=445411a5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Popover.vue?vue&type=template&id=445411a5&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Popover.vue?vue&type=template&id=445411a5& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "popover", staticClass: "kmtt-popover" },
    [
      _c(
        "div",
        { on: { click: _vm.handleOpenPopover } },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "popover" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.visible,
                expression: "visible"
              }
            ],
            staticClass: "body"
          },
          [_vm._t("content")],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy10ZXN0LXRhc2svLi9zcmMvY29tcG9uZW50cy9jb3JlL1BvcG92ZXIudnVlP2Y1NzEiLCJ3ZWJwYWNrOi8vdmMtdGVzdC10YXNrLy4vc3JjL2NvbXBvbmVudHMvY29yZS9Qb3BvdmVyLnZ1ZT8zYjhhIiwid2VicGFjazovL3ZjLXRlc3QtdGFzay8uL3NyYy9jb21wb25lbnRzL2NvcmUvUG9wb3Zlci52dWU/NmYxNyIsIndlYnBhY2s6Ly92Yy10ZXN0LXRhc2svLi9zcmMvY29tcG9uZW50cy9jb3JlL1BvcG92ZXIudnVlIiwid2VicGFjazovL3ZjLXRlc3QtdGFzay8uL3NyYy9jb21wb25lbnRzL2NvcmUvUG9wb3Zlci52dWU/ZGQ2MiIsIndlYnBhY2s6Ly92Yy10ZXN0LXRhc2svLi9zcmMvY29tcG9uZW50cy9jb3JlL1BvcG92ZXIudnVlPzA1MjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsMkRBQTJELHVCQUF1QixvQkFBb0IsR0FBRyx1QkFBdUIsdUJBQXVCLGVBQWUsYUFBYSxnQkFBZ0IsOEJBQThCLDBDQUEwQyxHQUFHLHNDQUFzQyxlQUFlLG9DQUFvQyxHQUFHLGdEQUFnRCxvQ0FBb0MsR0FBRyxhQUFhLDhGQUE4RixNQUFNLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxnWEFBZ1gsaUJBQWlCLCtCQUErQiwwREFBMEQsb0JBQW9CLGlCQUFpQiw0RUFBNEUsdUNBQXVDLDZFQUE2RSxlQUFlLE9BQU8sa0NBQWtDLEtBQUssMkJBQTJCLDBCQUEwQixLQUFLLDRCQUE0QiwyQkFBMkIsS0FBSyx1QkFBdUIsK0VBQStFLEtBQUssdUNBQXVDLHVCQUF1QixvQkFBb0IsR0FBRyx5QkFBeUIs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19jb3JlX1BvcG92ZXJfdnVlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmttdHQtcG9wb3ZlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5rbXR0LXBvcG92ZXIgLmJvZHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTFjO1xcbiAgYm94LXNoYWRvdzogMCAzcHggMjRweCByZ2JhKDAsMCwwLC40KTtcXG59XFxuLnBvcG92ZXItZW50ZXIsIC5wb3BvdmVyLWxlYXZlLXRvICB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhcjtcXG59XFxuLnBvcG92ZXItZW50ZXItYWN0aXZlLCAucG9wb3Zlci1sZWF2ZS1hY3RpdmUge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhcjtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY29yZS9Qb3BvdmVyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ0RBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0E7QUFFQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtBQUNBO0FBRUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUFDQTtBQUVBO0VBQ0EsK0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJrbXR0LXBvcG92ZXJcXFwiIHJlZj1cXFwicG9wb3ZlclxcXCI+XFxuICAgIDxkaXYgQGNsaWNrPVxcXCJoYW5kbGVPcGVuUG9wb3ZlclxcXCI+XFxuICAgICAgPHNsb3Q+PC9zbG90PlxcbiAgICA8L2Rpdj5cXG4gICAgPHRyYW5zaXRpb24gbmFtZT1cXFwicG9wb3ZlclxcXCI+XFxuICAgICAgPGRpdiB2LXNob3c9XFxcInZpc2libGVcXFwiIGNsYXNzPVxcXCJib2R5XFxcIj5cXG4gICAgICAgIDxzbG90IG5hbWU9XFxcImNvbnRlbnRcXFwiPjwvc2xvdD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC90cmFuc2l0aW9uPlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0IGxhbmc9XFxcInRzXFxcIj5cXG5pbXBvcnQgeyBWdWUsIENvbXBvbmVudCB9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xcblxcbkBDb21wb25lbnRcXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdmVyIGV4dGVuZHMgVnVlIHtcXG4gIHZpc2libGUgPSBmYWxzZTtcXG5cXG4gIG1vdW50ZWQoKSB7XFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLm9uT3V0c2lkZUNsaWNrZWQoZSkpXFxuICB9XFxuXFxuICBvbk91dHNpZGVDbGlja2VkKGU6IE1vdXNlRXZlbnQpIHtcXG4gICAgaWYgKCh0aGlzLiRyZWZzWydwb3BvdmVyJ10gYXMgRWxlbWVudCkuY29udGFpbnMoZS50YXJnZXQgYXMgRWxlbWVudCkpIHtcXG4gICAgICByZXR1cm47XFxuICAgIH1cXG5cXG4gICAgdGhpcy5oYW5kbGVDbG9zZVBvcG92ZXIoKTtcXG4gIH1cXG5cXG4gIGhhbmRsZU9wZW5Qb3BvdmVyKCkge1xcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xcbiAgfVxcblxcbiAgaGFuZGxlQ2xvc2VQb3BvdmVyKCkge1xcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcXG4gIH1cXG5cXG4gIGJlZm9yZURlc3Ryb3koKSB7XFxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLm9uT3V0c2lkZUNsaWNrZWQoZSkpXFxuICB9XFxuXFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4ua210dC1wb3BvdmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmttdHQtcG9wb3ZlciAuYm9keSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5MWM7XFxuICBib3gtc2hhZG93OiAwIDNweCAyNHB4IHJnYmEoMCwwLDAsLjQpO1xcbn1cXG5cXG4ucG9wb3Zlci1lbnRlciwgLnBvcG92ZXItbGVhdmUtdG8gIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xcbn1cXG5cXG4ucG9wb3Zlci1lbnRlci1hY3RpdmUsIC5wb3BvdmVyLWxlYXZlLWFjdGl2ZSB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xcbn1cXG5cXG5cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9wb3Zlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BvcG92ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50IH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBWdWUge1xuICB2aXNpYmxlID0gZmFsc2U7XG5cbiAgbW91bnRlZCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5vbk91dHNpZGVDbGlja2VkKGUpKVxuICB9XG5cbiAgb25PdXRzaWRlQ2xpY2tlZChlOiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCh0aGlzLiRyZWZzWydwb3BvdmVyJ10gYXMgRWxlbWVudCkuY29udGFpbnMoZS50YXJnZXQgYXMgRWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUNsb3NlUG9wb3ZlcigpO1xuICB9XG5cbiAgaGFuZGxlT3BlblBvcG92ZXIoKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGhhbmRsZUNsb3NlUG9wb3ZlcigpIHtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgfVxuXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMub25PdXRzaWRlQ2xpY2tlZChlKSlcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BvcG92ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0NTQxMWE1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BvcG92ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qb3BvdmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Qb3BvdmVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvQXJ0ZW02NTI0NjIvRG9jdW1lbnRzL3ZjLXRlc3QtdGFzay9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NDU0MTFhNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NDU0MTFhNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NDU0MTFhNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUG9wb3Zlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDQ1NDExYTUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDQ1NDExYTUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2NvcmUvUG9wb3Zlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BvcG92ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BvcG92ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgcmVmOiBcInBvcG92ZXJcIiwgc3RhdGljQ2xhc3M6IFwia210dC1wb3BvdmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBvbjogeyBjbGljazogX3ZtLmhhbmRsZU9wZW5Qb3BvdmVyIH0gfSxcbiAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwicG9wb3ZlclwiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS52aXNpYmxlLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmlzaWJsZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2R5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3QoXCJjb250ZW50XCIpXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9