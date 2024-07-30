"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/domelementtype";
exports.ids = ["vendor-chunks/domelementtype"];
exports.modules = {

/***/ "(rsc)/./node_modules/domelementtype/lib/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/domelementtype/lib/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CDATA: () => (/* binding */ CDATA),\n/* harmony export */   Comment: () => (/* binding */ Comment),\n/* harmony export */   Directive: () => (/* binding */ Directive),\n/* harmony export */   Doctype: () => (/* binding */ Doctype),\n/* harmony export */   ElementType: () => (/* binding */ ElementType),\n/* harmony export */   Root: () => (/* binding */ Root),\n/* harmony export */   Script: () => (/* binding */ Script),\n/* harmony export */   Style: () => (/* binding */ Style),\n/* harmony export */   Tag: () => (/* binding */ Tag),\n/* harmony export */   Text: () => (/* binding */ Text),\n/* harmony export */   isTag: () => (/* binding */ isTag)\n/* harmony export */ });\n/** Types of elements found in htmlparser2's DOM */\nvar ElementType;\n(function (ElementType) {\n    /** Type for the root element of a document */\n    ElementType[\"Root\"] = \"root\";\n    /** Type for Text */\n    ElementType[\"Text\"] = \"text\";\n    /** Type for <? ... ?> */\n    ElementType[\"Directive\"] = \"directive\";\n    /** Type for <!-- ... --> */\n    ElementType[\"Comment\"] = \"comment\";\n    /** Type for <script> tags */\n    ElementType[\"Script\"] = \"script\";\n    /** Type for <style> tags */\n    ElementType[\"Style\"] = \"style\";\n    /** Type for Any tag */\n    ElementType[\"Tag\"] = \"tag\";\n    /** Type for <![CDATA[ ... ]]> */\n    ElementType[\"CDATA\"] = \"cdata\";\n    /** Type for <!doctype ...> */\n    ElementType[\"Doctype\"] = \"doctype\";\n})(ElementType || (ElementType = {}));\n/**\n * Tests whether an element is a tag or not.\n *\n * @param elem Element to test\n */\nfunction isTag(elem) {\n    return (elem.type === ElementType.Tag ||\n        elem.type === ElementType.Script ||\n        elem.type === ElementType.Style);\n}\n// Exports for backwards compatibility\n/** Type for the root element of a document */\nconst Root = ElementType.Root;\n/** Type for Text */\nconst Text = ElementType.Text;\n/** Type for <? ... ?> */\nconst Directive = ElementType.Directive;\n/** Type for <!-- ... --> */\nconst Comment = ElementType.Comment;\n/** Type for <script> tags */\nconst Script = ElementType.Script;\n/** Type for <style> tags */\nconst Style = ElementType.Style;\n/** Type for Any tag */\nconst Tag = ElementType.Tag;\n/** Type for <![CDATA[ ... ]]> */\nconst CDATA = ElementType.CDATA;\n/** Type for <!doctype ...> */\nconst Doctype = ElementType.Doctype;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZG9tZWxlbWVudHR5cGUvbGliL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm9ueW1vdXMtbWVzc2FnZS8uL25vZGVfbW9kdWxlcy9kb21lbGVtZW50dHlwZS9saWIvZXNtL2luZGV4LmpzPzJmMTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIFR5cGVzIG9mIGVsZW1lbnRzIGZvdW5kIGluIGh0bWxwYXJzZXIyJ3MgRE9NICovXG5leHBvcnQgdmFyIEVsZW1lbnRUeXBlO1xuKGZ1bmN0aW9uIChFbGVtZW50VHlwZSkge1xuICAgIC8qKiBUeXBlIGZvciB0aGUgcm9vdCBlbGVtZW50IG9mIGEgZG9jdW1lbnQgKi9cbiAgICBFbGVtZW50VHlwZVtcIlJvb3RcIl0gPSBcInJvb3RcIjtcbiAgICAvKiogVHlwZSBmb3IgVGV4dCAqL1xuICAgIEVsZW1lbnRUeXBlW1wiVGV4dFwiXSA9IFwidGV4dFwiO1xuICAgIC8qKiBUeXBlIGZvciA8PyAuLi4gPz4gKi9cbiAgICBFbGVtZW50VHlwZVtcIkRpcmVjdGl2ZVwiXSA9IFwiZGlyZWN0aXZlXCI7XG4gICAgLyoqIFR5cGUgZm9yIDwhLS0gLi4uIC0tPiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiQ29tbWVudFwiXSA9IFwiY29tbWVudFwiO1xuICAgIC8qKiBUeXBlIGZvciA8c2NyaXB0PiB0YWdzICovXG4gICAgRWxlbWVudFR5cGVbXCJTY3JpcHRcIl0gPSBcInNjcmlwdFwiO1xuICAgIC8qKiBUeXBlIGZvciA8c3R5bGU+IHRhZ3MgKi9cbiAgICBFbGVtZW50VHlwZVtcIlN0eWxlXCJdID0gXCJzdHlsZVwiO1xuICAgIC8qKiBUeXBlIGZvciBBbnkgdGFnICovXG4gICAgRWxlbWVudFR5cGVbXCJUYWdcIl0gPSBcInRhZ1wiO1xuICAgIC8qKiBUeXBlIGZvciA8IVtDREFUQVsgLi4uIF1dPiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiQ0RBVEFcIl0gPSBcImNkYXRhXCI7XG4gICAgLyoqIFR5cGUgZm9yIDwhZG9jdHlwZSAuLi4+ICovXG4gICAgRWxlbWVudFR5cGVbXCJEb2N0eXBlXCJdID0gXCJkb2N0eXBlXCI7XG59KShFbGVtZW50VHlwZSB8fCAoRWxlbWVudFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYSB0YWcgb3Igbm90LlxuICpcbiAqIEBwYXJhbSBlbGVtIEVsZW1lbnQgdG8gdGVzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUYWcoZWxlbSkge1xuICAgIHJldHVybiAoZWxlbS50eXBlID09PSBFbGVtZW50VHlwZS5UYWcgfHxcbiAgICAgICAgZWxlbS50eXBlID09PSBFbGVtZW50VHlwZS5TY3JpcHQgfHxcbiAgICAgICAgZWxlbS50eXBlID09PSBFbGVtZW50VHlwZS5TdHlsZSk7XG59XG4vLyBFeHBvcnRzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuLyoqIFR5cGUgZm9yIHRoZSByb290IGVsZW1lbnQgb2YgYSBkb2N1bWVudCAqL1xuZXhwb3J0IGNvbnN0IFJvb3QgPSBFbGVtZW50VHlwZS5Sb290O1xuLyoqIFR5cGUgZm9yIFRleHQgKi9cbmV4cG9ydCBjb25zdCBUZXh0ID0gRWxlbWVudFR5cGUuVGV4dDtcbi8qKiBUeXBlIGZvciA8PyAuLi4gPz4gKi9cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmUgPSBFbGVtZW50VHlwZS5EaXJlY3RpdmU7XG4vKiogVHlwZSBmb3IgPCEtLSAuLi4gLS0+ICovXG5leHBvcnQgY29uc3QgQ29tbWVudCA9IEVsZW1lbnRUeXBlLkNvbW1lbnQ7XG4vKiogVHlwZSBmb3IgPHNjcmlwdD4gdGFncyAqL1xuZXhwb3J0IGNvbnN0IFNjcmlwdCA9IEVsZW1lbnRUeXBlLlNjcmlwdDtcbi8qKiBUeXBlIGZvciA8c3R5bGU+IHRhZ3MgKi9cbmV4cG9ydCBjb25zdCBTdHlsZSA9IEVsZW1lbnRUeXBlLlN0eWxlO1xuLyoqIFR5cGUgZm9yIEFueSB0YWcgKi9cbmV4cG9ydCBjb25zdCBUYWcgPSBFbGVtZW50VHlwZS5UYWc7XG4vKiogVHlwZSBmb3IgPCFbQ0RBVEFbIC4uLiBdXT4gKi9cbmV4cG9ydCBjb25zdCBDREFUQSA9IEVsZW1lbnRUeXBlLkNEQVRBO1xuLyoqIFR5cGUgZm9yIDwhZG9jdHlwZSAuLi4+ICovXG5leHBvcnQgY29uc3QgRG9jdHlwZSA9IEVsZW1lbnRUeXBlLkRvY3R5cGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/domelementtype/lib/esm/index.js\n");

/***/ })

};
;