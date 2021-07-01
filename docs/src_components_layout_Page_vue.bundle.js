(self["webpackChunkvc_test_task"] = self["webpackChunkvc_test_task"] || []).push([["src_components_layout_Page_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/layout/Page.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/layout/Page.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.kmtt-page {\n  padding: 32px;\n  width: 100%;\n}\n.kmtt-page > .components {\n  margin-top: 24px;\n}\n.kmtt-page > h2 {\n  font-size: bold;\n  color: #bbbcc1;\n  margin: 8px 0;\n  /* margin-bottom: 32px; */\n}\n", "",{"version":3,"sources":["webpack://./src/components/layout/Page.vue"],"names":[],"mappings":";AAqCA;EACA,aAAA;EACA,WAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,eAAA;EACA,cAAA;EACA,aAAA;EACA,yBAAA;AACA","sourcesContent":["<template>\n  <div class=\"kmtt-page\">\n    <div>{{ title }}</div>\n    <h2>{{ namePage }}</h2>\n    <component v-for=\"item in componentsPage\" :key=\"item.name\" class=\"components\" :is=\"item.component\" v-bind=\"item.props\"></component>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { Vue, Component, Prop, Watch } from 'vue-property-decorator';\nimport { IComponent, IComponentProps } from '@/interfaces/component.interface';\nconst SearchComponent = () => import('../core/Search.vue');\n\n@Component({\n  components: {\n    SearchComponent\n  }\n})\nexport default class Page extends Vue {\n  @Prop() title: String | undefined;\n  @Prop() namePage: String | undefined;\n  @Prop() components: IComponentProps[] | undefined;\n\n  componentsPage: IComponent[] = [];\n\n  @Watch('components', {immediate: true})\n  wathedPropsComponnmets(val: IComponentProps[]) {\n    if (val) {\n      this.components && this.components.forEach((el: IComponentProps) => {\n        import('../core/'+ el.name).then(b => (this.componentsPage.push({component: b.default, props: el.props})) )\n      });\n    }\n  }\n}\n</script>\n\n<style>\n.kmtt-page {\n  padding: 32px;\n  width: 100%;\n}\n.kmtt-page > .components {\n  margin-top: 24px;\n}\n.kmtt-page > h2 {\n  font-size: bold;\n  color: #bbbcc1;\n  margin: 8px 0;\n  /* margin-bottom: 32px; */\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/layout/Page.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/layout/Page.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/layout/Page.vue?vue&type=style&index=0&lang=css&");

      
      
      
      
      
      
      

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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/layout/Page.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/layout/Page.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************************************/
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

var SearchComponent = function () { return __webpack_require__.e(/*! import() */ "src_components_core_Search_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../core/Search.vue */ "./src/components/core/Search.vue")); };
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentsPage = [];
        return _this;
    }
    Page.prototype.wathedPropsComponnmets = function (val) {
        var _this = this;
        if (val) {
            this.components && this.components.forEach(function (el) {
                __webpack_require__("./src/components/core lazy recursive ^\\.\\/.*$")("./" + el.name).then(function (b) { return (_this.componentsPage.push({ component: b.default, props: el.props })); });
            });
        }
    };
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)()
    ], Page.prototype, "title", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)()
    ], Page.prototype, "namePage", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)()
    ], Page.prototype, "components", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Watch)('components', { immediate: true })
    ], Page.prototype, "wathedPropsComponnmets", null);
    Page = __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
            components: {
                SearchComponent: SearchComponent
            }
        })
    ], Page);
    return Page;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ "./src/components/layout/Page.vue":
/*!****************************************!*\
  !*** ./src/components/layout/Page.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Page_vue_vue_type_template_id_2aa47ad8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page.vue?vue&type=template&id=2aa47ad8& */ "./src/components/layout/Page.vue?vue&type=template&id=2aa47ad8&");
/* harmony import */ var _Page_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page.vue?vue&type=script&lang=ts& */ "./src/components/layout/Page.vue?vue&type=script&lang=ts&");
/* harmony import */ var _Page_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page.vue?vue&type=style&index=0&lang=css& */ "./src/components/layout/Page.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Page_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _Page_vue_vue_type_template_id_2aa47ad8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Page_vue_vue_type_template_id_2aa47ad8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/layout/Page.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/layout/Page.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./src/components/layout/Page.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/layout/Page.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./src/components/layout/Page.vue?vue&type=script&lang=ts&":
/*!*****************************************************************!*\
  !*** ./src/components/layout/Page.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/layout/Page.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_2_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/layout/Page.vue?vue&type=template&id=2aa47ad8&":
/*!***********************************************************************!*\
  !*** ./src/components/layout/Page.vue?vue&type=template&id=2aa47ad8& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_template_id_2aa47ad8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_template_id_2aa47ad8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_template_id_2aa47ad8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page.vue?vue&type=template&id=2aa47ad8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/layout/Page.vue?vue&type=template&id=2aa47ad8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/layout/Page.vue?vue&type=template&id=2aa47ad8&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/layout/Page.vue?vue&type=template&id=2aa47ad8& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    { staticClass: "kmtt-page" },
    [
      _c("div", [_vm._v(_vm._s(_vm.title))]),
      _vm._v(" "),
      _c("h2", [_vm._v(_vm._s(_vm.namePage))]),
      _vm._v(" "),
      _vm._l(_vm.componentsPage, function(item) {
        return _c(
          item.component,
          _vm._b(
            { key: item.name, tag: "component", staticClass: "components" },
            "component",
            item.props,
            false
          )
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/core lazy recursive ^\\.\\/.*$":
/*!*************************************************************!*\
  !*** ./src/components/core/ lazy ^\.\/.*$ namespace object ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Button.vue": [
		"./src/components/core/Button.vue",
		"src_components_core_Button_vue"
	],
	"./Menu.vue": [
		"./src/components/core/Menu.vue",
		"src_components_core_Menu_vue"
	],
	"./Search.vue": [
		"./src/components/core/Search.vue",
		"src_components_core_Search_vue"
	],
	"./Table.vue": [
		"./src/components/core/Table.vue",
		"src_components_core_Table_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/components/core lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy10ZXN0LXRhc2svLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvUGFnZS52dWU/MmFlNyIsIndlYnBhY2s6Ly92Yy10ZXN0LXRhc2svLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvUGFnZS52dWU/ZDEyOSIsIndlYnBhY2s6Ly92Yy10ZXN0LXRhc2svLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvUGFnZS52dWU/MjFiYSIsIndlYnBhY2s6Ly92Yy10ZXN0LXRhc2svLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvUGFnZS52dWUiLCJ3ZWJwYWNrOi8vdmMtdGVzdC10YXNrLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L1BhZ2UudnVlP2ExMGQiLCJ3ZWJwYWNrOi8vdmMtdGVzdC10YXNrLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L1BhZ2UudnVlP2M0OGQiLCJ3ZWJwYWNrOi8vdmMtdGVzdC10YXNrLy4vc3JjL2NvbXBvbmVudHMvY29yZXxsYXp5fC9eXFwuXFwvLiokL3xncm91cE9wdGlvbnM6IHt9fG5hbWVzcGFjZSBvYmplY3QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esd0RBQXdELGtCQUFrQixnQkFBZ0IsR0FBRyw0QkFBNEIscUJBQXFCLEdBQUcsbUJBQW1CLG9CQUFvQixtQkFBbUIsa0JBQWtCLDJCQUEyQixNQUFNLFNBQVMsNkZBQTZGLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLDZFQUE2RSxTQUFTLGtCQUFrQixZQUFZLGlOQUFpTiw4QkFBOEIsK0JBQStCLFVBQVUsOEJBQThCLHlDQUF5Qyw2REFBNkQsZ0JBQWdCLGlCQUFpQiwwQkFBMEIsR0FBRywwQ0FBMEMsc0NBQXNDLHlDQUF5QyxzREFBc0Qsd0NBQXdDLDRCQUE0QixnQkFBZ0Is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QTtBQUNBLGFBQWEsOERBQThEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxxQyIsImZpbGUiOiJzcmNfY29tcG9uZW50c19sYXlvdXRfUGFnZV92dWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ua210dC1wYWdlIHtcXG4gIHBhZGRpbmc6IDMycHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmttdHQtcGFnZSA+IC5jb21wb25lbnRzIHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcbi5rbXR0LXBhZ2UgPiBoMiB7XFxuICBmb250LXNpemU6IGJvbGQ7XFxuICBjb2xvcjogI2JiYmNjMTtcXG4gIG1hcmdpbjogOHB4IDA7XFxuICAvKiBtYXJnaW4tYm90dG9tOiAzMnB4OyAqL1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvUGFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXFDQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0E7QUFDQTtFQUNBLGdCQUFBO0FBQ0E7QUFDQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwia210dC1wYWdlXFxcIj5cXG4gICAgPGRpdj57eyB0aXRsZSB9fTwvZGl2PlxcbiAgICA8aDI+e3sgbmFtZVBhZ2UgfX08L2gyPlxcbiAgICA8Y29tcG9uZW50IHYtZm9yPVxcXCJpdGVtIGluIGNvbXBvbmVudHNQYWdlXFxcIiA6a2V5PVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJjb21wb25lbnRzXFxcIiA6aXM9XFxcIml0ZW0uY29tcG9uZW50XFxcIiB2LWJpbmQ9XFxcIml0ZW0ucHJvcHNcXFwiPjwvY29tcG9uZW50PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0IGxhbmc9XFxcInRzXFxcIj5cXG5pbXBvcnQgeyBWdWUsIENvbXBvbmVudCwgUHJvcCwgV2F0Y2ggfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcXG5pbXBvcnQgeyBJQ29tcG9uZW50LCBJQ29tcG9uZW50UHJvcHMgfSBmcm9tICdAL2ludGVyZmFjZXMvY29tcG9uZW50LmludGVyZmFjZSc7XFxuY29uc3QgU2VhcmNoQ29tcG9uZW50ID0gKCkgPT4gaW1wb3J0KCcuLi9jb3JlL1NlYXJjaC52dWUnKTtcXG5cXG5AQ29tcG9uZW50KHtcXG4gIGNvbXBvbmVudHM6IHtcXG4gICAgU2VhcmNoQ29tcG9uZW50XFxuICB9XFxufSlcXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgVnVlIHtcXG4gIEBQcm9wKCkgdGl0bGU6IFN0cmluZyB8IHVuZGVmaW5lZDtcXG4gIEBQcm9wKCkgbmFtZVBhZ2U6IFN0cmluZyB8IHVuZGVmaW5lZDtcXG4gIEBQcm9wKCkgY29tcG9uZW50czogSUNvbXBvbmVudFByb3BzW10gfCB1bmRlZmluZWQ7XFxuXFxuICBjb21wb25lbnRzUGFnZTogSUNvbXBvbmVudFtdID0gW107XFxuXFxuICBAV2F0Y2goJ2NvbXBvbmVudHMnLCB7aW1tZWRpYXRlOiB0cnVlfSlcXG4gIHdhdGhlZFByb3BzQ29tcG9ubm1ldHModmFsOiBJQ29tcG9uZW50UHJvcHNbXSkge1xcbiAgICBpZiAodmFsKSB7XFxuICAgICAgdGhpcy5jb21wb25lbnRzICYmIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChlbDogSUNvbXBvbmVudFByb3BzKSA9PiB7XFxuICAgICAgICBpbXBvcnQoJy4uL2NvcmUvJysgZWwubmFtZSkudGhlbihiID0+ICh0aGlzLmNvbXBvbmVudHNQYWdlLnB1c2goe2NvbXBvbmVudDogYi5kZWZhdWx0LCBwcm9wczogZWwucHJvcHN9KSkgKVxcbiAgICAgIH0pO1xcbiAgICB9XFxuICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4ua210dC1wYWdlIHtcXG4gIHBhZGRpbmc6IDMycHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmttdHQtcGFnZSA+IC5jb21wb25lbnRzIHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcbi5rbXR0LXBhZ2UgPiBoMiB7XFxuICBmb250LXNpemU6IGJvbGQ7XFxuICBjb2xvcjogI2JiYmNjMTtcXG4gIG1hcmdpbjogOHB4IDA7XFxuICAvKiBtYXJnaW4tYm90dG9tOiAzMnB4OyAqL1xcbn1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IHsgVnVlLCBDb21wb25lbnQsIFByb3AsIFdhdGNoIH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XG5pbXBvcnQgeyBJQ29tcG9uZW50LCBJQ29tcG9uZW50UHJvcHMgfSBmcm9tICdAL2ludGVyZmFjZXMvY29tcG9uZW50LmludGVyZmFjZSc7XG5jb25zdCBTZWFyY2hDb21wb25lbnQgPSAoKSA9PiBpbXBvcnQoJy4uL2NvcmUvU2VhcmNoLnZ1ZScpO1xuXG5AQ29tcG9uZW50KHtcbiAgY29tcG9uZW50czoge1xuICAgIFNlYXJjaENvbXBvbmVudFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIFZ1ZSB7XG4gIEBQcm9wKCkgdGl0bGU6IFN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQFByb3AoKSBuYW1lUGFnZTogU3RyaW5nIHwgdW5kZWZpbmVkO1xuICBAUHJvcCgpIGNvbXBvbmVudHM6IElDb21wb25lbnRQcm9wc1tdIHwgdW5kZWZpbmVkO1xuXG4gIGNvbXBvbmVudHNQYWdlOiBJQ29tcG9uZW50W10gPSBbXTtcblxuICBAV2F0Y2goJ2NvbXBvbmVudHMnLCB7aW1tZWRpYXRlOiB0cnVlfSlcbiAgd2F0aGVkUHJvcHNDb21wb25ubWV0cyh2YWw6IElDb21wb25lbnRQcm9wc1tdKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5jb21wb25lbnRzICYmIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChlbDogSUNvbXBvbmVudFByb3BzKSA9PiB7XG4gICAgICAgIGltcG9ydCgnLi4vY29yZS8nKyBlbC5uYW1lKS50aGVuKGIgPT4gKHRoaXMuY29tcG9uZW50c1BhZ2UucHVzaCh7Y29tcG9uZW50OiBiLmRlZmF1bHQsIHByb3BzOiBlbC5wcm9wc30pKSApXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmFhNDdhZDgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9BcnRlbTY1MjQ2Mi9Eb2N1bWVudHMvdmMtdGVzdC10YXNrL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJhYTQ3YWQ4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJhYTQ3YWQ4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJhYTQ3YWQ4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYWE0N2FkOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyYWE0N2FkOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvbGF5b3V0L1BhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImttdHQtcGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5uYW1lUGFnZSkpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5jb21wb25lbnRzUGFnZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgaXRlbS5jb21wb25lbnQsXG4gICAgICAgICAgX3ZtLl9iKFxuICAgICAgICAgICAgeyBrZXk6IGl0ZW0ubmFtZSwgdGFnOiBcImNvbXBvbmVudFwiLCBzdGF0aWNDbGFzczogXCJjb21wb25lbnRzXCIgfSxcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICBpdGVtLnByb3BzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vQnV0dG9uLnZ1ZVwiOiBbXG5cdFx0XCIuL3NyYy9jb21wb25lbnRzL2NvcmUvQnV0dG9uLnZ1ZVwiLFxuXHRcdFwic3JjX2NvbXBvbmVudHNfY29yZV9CdXR0b25fdnVlXCJcblx0XSxcblx0XCIuL01lbnUudnVlXCI6IFtcblx0XHRcIi4vc3JjL2NvbXBvbmVudHMvY29yZS9NZW51LnZ1ZVwiLFxuXHRcdFwic3JjX2NvbXBvbmVudHNfY29yZV9NZW51X3Z1ZVwiXG5cdF0sXG5cdFwiLi9TZWFyY2gudnVlXCI6IFtcblx0XHRcIi4vc3JjL2NvbXBvbmVudHMvY29yZS9TZWFyY2gudnVlXCIsXG5cdFx0XCJzcmNfY29tcG9uZW50c19jb3JlX1NlYXJjaF92dWVcIlxuXHRdLFxuXHRcIi4vVGFibGUudnVlXCI6IFtcblx0XHRcIi4vc3JjL2NvbXBvbmVudHMvY29yZS9UYWJsZS52dWVcIixcblx0XHRcInNyY19jb21wb25lbnRzX2NvcmVfVGFibGVfdnVlXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cy9jb3JlIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==