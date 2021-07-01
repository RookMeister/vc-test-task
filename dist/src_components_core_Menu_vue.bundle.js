(self["webpackChunkvc_test_task"] = self["webpackChunkvc_test_task"] || []).push([["src_components_core_Menu_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Menu.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Menu.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.kmtt-menu {\n  padding: 16px 0;\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  border-right: 1px solid #1d1f22;\n}\n.kmtt-menu > .title {\n  cursor: pointer;\n  padding: 16px;\n  border-bottom: 1px solid #1d1f22;\n  display: inline-flex;\n  color: #ffffff;\n}\n.kmtt-menu > .title > .chevron-icon {\n  margin-left: auto;\n  color: #585c62;\n}\n.kmtt-menu > .links {\n  padding: 12px  0;\n}\n.kmtt-menu > .links > .title {\n  padding: 12px 16px;\n  color: #585c62;\n}\n.kmtt-menu .link {\n  padding: 8px 16px;\n  display: block;\n}\n.kmtt-menu .link:hover {\n  background-color: #23252a;\n  cursor: pointer;\n}\n.kmtt-menu .link.last-link {\n  margin-top: auto;\n}\n.kmtt-menu .layers-icon {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/core/Menu.vue"],"names":[],"mappings":";AAmCA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,+BAAA;AACA;AACA;EACA,eAAA;EACA,aAAA;EACA,gCAAA;EACA,oBAAA;EACA,cAAA;AACA;AACA;EACA,iBAAA;EACA,cAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,kBAAA;EACA,cAAA;AACA;AACA;EACA,iBAAA;EACA,cAAA;AACA;AACA;EACA,yBAAA;EACA,eAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,sBAAA;EACA,iBAAA;AACA","sourcesContent":["<template>\n  <div class=\"kmtt-menu\" v-if=\"data\">\n    <div class=\"title\">{{ title }}<feather class=\"chevron-icon\" type=\"chevron-down\"/></div>\n    <div class=\"links\" v-for=\"item in data\" :key=\"item.title\">\n      <div v-if=\"item.title\" class=\"title\">{{ item.title.toUpperCase() }}</div>\n      <template v-if=\"item.links\">\n        <router-link\n          class=\"link\"\n          v-for=\"link in item.links\" :to=\"link.url || '/'\"\n          :key=\"link.name\"\n          @click.native=\"link.url && $emit('setTitle', { namePage: link.name, title: item.title })\"\n        >\n          {{ link.name }}\n        </router-link>\n      </template>\n    </div>\n    <router-link class=\"link last-link\" to=\"/\">\n      <feather class=\"layers-icon\" type=\"layers\"/>\n      Библиотека компонентов\n    </router-link>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { Vue, Component, Prop } from 'vue-property-decorator';\nimport { IMenu } from '@/interfaces/menu.interface';\n\n@Component\nexport default class Menu extends Vue {\n  @Prop() data: IMenu[] | undefined;\n  @Prop() title: String | undefined;\n}\n</script>\n\n<style>\n.kmtt-menu {\n  padding: 16px 0;\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  border-right: 1px solid #1d1f22;\n}\n.kmtt-menu > .title {\n  cursor: pointer;\n  padding: 16px;\n  border-bottom: 1px solid #1d1f22;\n  display: inline-flex;\n  color: #ffffff;\n}\n.kmtt-menu > .title > .chevron-icon {\n  margin-left: auto;\n  color: #585c62;\n}\n.kmtt-menu > .links {\n  padding: 12px  0;\n}\n.kmtt-menu > .links > .title {\n  padding: 12px 16px;\n  color: #585c62;\n}\n.kmtt-menu .link {\n  padding: 8px 16px;\n  display: block;\n}\n.kmtt-menu .link:hover {\n  background-color: #23252a;\n  cursor: pointer;\n}\n.kmtt-menu .link.last-link {\n  margin-top: auto;\n}\n.kmtt-menu .layers-icon {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Menu.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Menu.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Menu.vue?vue&type=style&index=0&lang=css&");

      
      
      
      
      
      
      

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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Menu.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Menu.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************************************/
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

var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)()
    ], Menu.prototype, "data", void 0);
    __decorate([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Prop)()
    ], Menu.prototype, "title", void 0);
    Menu = __decorate([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component
    ], Menu);
    return Menu;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Vue));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ "./src/components/core/Menu.vue":
/*!**************************************!*\
  !*** ./src/components/core/Menu.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menu_vue_vue_type_template_id_02e562e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=02e562e2& */ "./src/components/core/Menu.vue?vue&type=template&id=02e562e2&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=ts& */ "./src/components/core/Menu.vue?vue&type=script&lang=ts&");
/* harmony import */ var _Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.vue?vue&type=style&index=0&lang=css& */ "./src/components/core/Menu.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Menu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__.default,
  _Menu_vue_vue_type_template_id_02e562e2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Menu_vue_vue_type_template_id_02e562e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/core/Menu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/core/Menu.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./src/components/core/Menu.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Menu.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./src/components/core/Menu.vue?vue&type=script&lang=ts&":
/*!***************************************************************!*\
  !*** ./src/components/core/Menu.vue?vue&type=script&lang=ts& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Menu.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_2_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/core/Menu.vue?vue&type=template&id=02e562e2&":
/*!*********************************************************************!*\
  !*** ./src/components/core/Menu.vue?vue&type=template&id=02e562e2& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_02e562e2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_02e562e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_02e562e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=template&id=02e562e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Menu.vue?vue&type=template&id=02e562e2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Menu.vue?vue&type=template&id=02e562e2&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/core/Menu.vue?vue&type=template&id=02e562e2& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "div",
        { staticClass: "kmtt-menu" },
        [
          _c(
            "div",
            { staticClass: "title" },
            [
              _vm._v(_vm._s(_vm.title)),
              _c("feather", {
                staticClass: "chevron-icon",
                attrs: { type: "chevron-down" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.data, function(item) {
            return _c(
              "div",
              { key: item.title, staticClass: "links" },
              [
                item.title
                  ? _c("div", { staticClass: "title" }, [
                      _vm._v(_vm._s(item.title.toUpperCase()))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                item.links
                  ? _vm._l(item.links, function(link) {
                      return _c(
                        "router-link",
                        {
                          key: link.name,
                          staticClass: "link",
                          attrs: { to: link.url || "/" },
                          nativeOn: {
                            click: function($event) {
                              link.url &&
                                _vm.$emit("setTitle", {
                                  namePage: link.name,
                                  title: item.title
                                })
                            }
                          }
                        },
                        [_vm._v("\n        " + _vm._s(link.name) + "\n      ")]
                      )
                    })
                  : _vm._e()
              ],
              2
            )
          }),
          _vm._v(" "),
          _c(
            "router-link",
            { staticClass: "link last-link", attrs: { to: "/" } },
            [
              _c("feather", {
                staticClass: "layers-icon",
                attrs: { type: "layers" }
              }),
              _vm._v("\n    Библиотека компонентов\n  ")
            ],
            1
          )
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy10ZXN0LXRhc2svLi9zcmMvY29tcG9uZW50cy9jb3JlL01lbnUudnVlPzBhM2EiLCJ3ZWJwYWNrOi8vdmMtdGVzdC10YXNrLy4vc3JjL2NvbXBvbmVudHMvY29yZS9NZW51LnZ1ZT8xNjM4Iiwid2VicGFjazovL3ZjLXRlc3QtdGFzay8uL3NyYy9jb21wb25lbnRzL2NvcmUvTWVudS52dWU/YzZhNSIsIndlYnBhY2s6Ly92Yy10ZXN0LXRhc2svLi9zcmMvY29tcG9uZW50cy9jb3JlL01lbnUudnVlIiwid2VicGFjazovL3ZjLXRlc3QtdGFzay8uL3NyYy9jb21wb25lbnRzL2NvcmUvTWVudS52dWU/NzJlNSIsIndlYnBhY2s6Ly92Yy10ZXN0LXRhc2svLi9zcmMvY29tcG9uZW50cy9jb3JlL01lbnUudnVlP2U0MjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esd0RBQXdELG9CQUFvQixrQkFBa0IsMkJBQTJCLGlCQUFpQixvQ0FBb0MsR0FBRyx1QkFBdUIsb0JBQW9CLGtCQUFrQixxQ0FBcUMseUJBQXlCLG1CQUFtQixHQUFHLHVDQUF1QyxzQkFBc0IsbUJBQW1CLEdBQUcsdUJBQXVCLHFCQUFxQixHQUFHLGdDQUFnQyx1QkFBdUIsbUJBQW1CLEdBQUcsb0JBQW9CLHNCQUFzQixtQkFBbUIsR0FBRywwQkFBMEIsOEJBQThCLG9CQUFvQixHQUFHLDhCQUE4QixxQkFBcUIsR0FBRywyQkFBMkIsMkJBQTJCLHNCQUFzQixHQUFHLFNBQVMsMkZBQTJGLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUs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Q0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0NBQXdDLFVBQVUsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY29yZV9NZW51X3Z1ZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5rbXR0LW1lbnUge1xcbiAgcGFkZGluZzogMTZweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMWQxZjIyO1xcbn1cXG4ua210dC1tZW51ID4gLnRpdGxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFkMWYyMjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5rbXR0LW1lbnUgPiAudGl0bGUgPiAuY2hldnJvbi1pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgY29sb3I6ICM1ODVjNjI7XFxufVxcbi5rbXR0LW1lbnUgPiAubGlua3Mge1xcbiAgcGFkZGluZzogMTJweCAgMDtcXG59XFxuLmttdHQtbWVudSA+IC5saW5rcyA+IC50aXRsZSB7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICBjb2xvcjogIzU4NWM2MjtcXG59XFxuLmttdHQtbWVudSAubGluayB7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ua210dC1tZW51IC5saW5rOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI1MmE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5rbXR0LW1lbnUgLmxpbmsubGFzdC1saW5rIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbi5rbXR0LW1lbnUgLmxheWVycy1pY29uIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY29yZS9NZW51LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBbUNBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQUNBO0FBQ0E7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBQ0E7QUFDQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNBO0FBQ0E7RUFDQSxnQkFBQTtBQUNBO0FBQ0E7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDQTtBQUNBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUNBO0FBQ0E7RUFDQSxnQkFBQTtBQUNBO0FBQ0E7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwia210dC1tZW51XFxcIiB2LWlmPVxcXCJkYXRhXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGl0bGVcXFwiPnt7IHRpdGxlIH19PGZlYXRoZXIgY2xhc3M9XFxcImNoZXZyb24taWNvblxcXCIgdHlwZT1cXFwiY2hldnJvbi1kb3duXFxcIi8+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImxpbmtzXFxcIiB2LWZvcj1cXFwiaXRlbSBpbiBkYXRhXFxcIiA6a2V5PVxcXCJpdGVtLnRpdGxlXFxcIj5cXG4gICAgICA8ZGl2IHYtaWY9XFxcIml0ZW0udGl0bGVcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+e3sgaXRlbS50aXRsZS50b1VwcGVyQ2FzZSgpIH19PC9kaXY+XFxuICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcIml0ZW0ubGlua3NcXFwiPlxcbiAgICAgICAgPHJvdXRlci1saW5rXFxuICAgICAgICAgIGNsYXNzPVxcXCJsaW5rXFxcIlxcbiAgICAgICAgICB2LWZvcj1cXFwibGluayBpbiBpdGVtLmxpbmtzXFxcIiA6dG89XFxcImxpbmsudXJsIHx8ICcvJ1xcXCJcXG4gICAgICAgICAgOmtleT1cXFwibGluay5uYW1lXFxcIlxcbiAgICAgICAgICBAY2xpY2submF0aXZlPVxcXCJsaW5rLnVybCAmJiAkZW1pdCgnc2V0VGl0bGUnLCB7IG5hbWVQYWdlOiBsaW5rLm5hbWUsIHRpdGxlOiBpdGVtLnRpdGxlIH0pXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICB7eyBsaW5rLm5hbWUgfX1cXG4gICAgICAgIDwvcm91dGVyLWxpbms+XFxuICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgPC9kaXY+XFxuICAgIDxyb3V0ZXItbGluayBjbGFzcz1cXFwibGluayBsYXN0LWxpbmtcXFwiIHRvPVxcXCIvXFxcIj5cXG4gICAgICA8ZmVhdGhlciBjbGFzcz1cXFwibGF5ZXJzLWljb25cXFwiIHR5cGU9XFxcImxheWVyc1xcXCIvPlxcbiAgICAgINCR0LjQsdC70LjQvtGC0LXQutCwINC60L7QvNC/0L7QvdC10L3RgtC+0LJcXG4gICAgPC9yb3V0ZXItbGluaz5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdCBsYW5nPVxcXCJ0c1xcXCI+XFxuaW1wb3J0IHsgVnVlLCBDb21wb25lbnQsIFByb3AgfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcXG5pbXBvcnQgeyBJTWVudSB9IGZyb20gJ0AvaW50ZXJmYWNlcy9tZW51LmludGVyZmFjZSc7XFxuXFxuQENvbXBvbmVudFxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBWdWUge1xcbiAgQFByb3AoKSBkYXRhOiBJTWVudVtdIHwgdW5kZWZpbmVkO1xcbiAgQFByb3AoKSB0aXRsZTogU3RyaW5nIHwgdW5kZWZpbmVkO1xcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLmttdHQtbWVudSB7XFxuICBwYWRkaW5nOiAxNnB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxZDFmMjI7XFxufVxcbi5rbXR0LW1lbnUgPiAudGl0bGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWQxZjIyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLmttdHQtbWVudSA+IC50aXRsZSA+IC5jaGV2cm9uLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjb2xvcjogIzU4NWM2MjtcXG59XFxuLmttdHQtbWVudSA+IC5saW5rcyB7XFxuICBwYWRkaW5nOiAxMnB4ICAwO1xcbn1cXG4ua210dC1tZW51ID4gLmxpbmtzID4gLnRpdGxlIHtcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIGNvbG9yOiAjNTg1YzYyO1xcbn1cXG4ua210dC1tZW51IC5saW5rIHtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5rbXR0LW1lbnUgLmxpbms6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjUyYTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmttdHQtbWVudSAubGluay5sYXN0LWxpbmsge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuLmttdHQtbWVudSAubGF5ZXJzLWljb24ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IHsgVnVlLCBDb21wb25lbnQsIFByb3AgfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcbmltcG9ydCB7IElNZW51IH0gZnJvbSAnQC9pbnRlcmZhY2VzL21lbnUuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFZ1ZSB7XG4gIEBQcm9wKCkgZGF0YTogSU1lbnVbXSB8IHVuZGVmaW5lZDtcbiAgQFByb3AoKSB0aXRsZTogU3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmU1NjJlMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL0FydGVtNjUyNDYyL0RvY3VtZW50cy92Yy10ZXN0LXRhc2svbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDJlNTYyZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDJlNTYyZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDJlNTYyZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyZTU2MmUyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAyZTU2MmUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jb3JlL01lbnUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmRhdGFcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImttdHQtbWVudVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKSxcbiAgICAgICAgICAgICAgX2MoXCJmZWF0aGVyXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjaGV2cm9uLWljb25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZXZyb24tZG93blwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0uZGF0YSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGtleTogaXRlbS50aXRsZSwgc3RhdGljQ2xhc3M6IFwibGlua3NcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaXRlbS50aXRsZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50aXRsZS50b1VwcGVyQ2FzZSgpKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBpdGVtLmxpbmtzXG4gICAgICAgICAgICAgICAgICA/IF92bS5fbChpdGVtLmxpbmtzLCBmdW5jdGlvbihsaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGxpbmsubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogbGluay51cmwgfHwgXCIvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnVybCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJzZXRUaXRsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVBhZ2U6IGxpbmsubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKGxpbmsubmFtZSkgKyBcIlxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaW5rIGxhc3QtbGlua1wiLCBhdHRyczogeyB0bzogXCIvXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZlYXRoZXJcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheWVycy1pY29uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJsYXllcnNcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAg0JHQuNCx0LvQuNC+0YLQtdC60LAg0LrQvtC80L/QvtC90LXQvdGC0L7QslxcbiAgXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9