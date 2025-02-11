(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_global_102435._.js", {

"[project]/src/app/global/datas/menus.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>getMenus),
    "menus": (()=>menus)
});
const menus = {
    member: [
        {
            code: 'list',
            name: '회원관리',
            url: '/member/list'
        },
        {
            code: 'configList',
            name: '회원 목록',
            url: '/memer/config/list'
        }
    ],
    board: [
        {
            code: 'configList',
            name: '게시판 목록',
            url: '/board/config/list'
        },
        {
            code: 'configWrite',
            name: '게시판 등록',
            url: '/board/config/write'
        },
        {
            code: 'list',
            name: '게시글 관리',
            url: '/board/list'
        }
    ]
};
function getMenus(menuCode) {
    return menus[menuCode] ?? [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/global/components/SubMenus.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$global$2f$contexts$2f$CommonContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/global/contexts/CommonContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$global$2f$datas$2f$menus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/global/datas/menus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$global$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/global/styles/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$global$2f$styles$2f$sizes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/global/styles/sizes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
const { dark, white } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$global$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const { medium } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$global$2f$styles$2f$sizes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const StyledMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "SubMenus__StyledMenu",
    componentId: "sc-cef5ac07-0"
})`
  box-shadow: 2px 2px 5px ${dark};
  display: flex;
  border-radius: 3px;
  height: 45px;
  margin-bottom: 40px;

  a {
    color: ${dark};
    line-height: 45px;
    font-size: ${medium};
    padding: 0 35px;

    &.on {
      color: ${white};
      background: ${dark};
    }
  }
`;
_c = StyledMenu;
const SubMenus = ()=>{
    _s();
    const [menus, setMenus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const { state: { menuCode, subMenuCode } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$global$2f$contexts$2f$CommonContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubMenus.useEffect": ()=>{
            setMenus({
                "SubMenus.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$global$2f$datas$2f$menus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(menuCode)
            }["SubMenus.useEffect"]);
        }
    }["SubMenus.useEffect"], [
        menuCode
    ]);
    return menus && menus.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledMenu, {
        children: menus.map(({ code, name, url })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: url,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('menu', {
                    on: code === subMenuCode
                }),
                children: name
            }, 'submenu_' + url, false, {
                fileName: "[project]/src/app/global/components/SubMenus.tsx",
                lineNumber: 48,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/global/components/SubMenus.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
};
_s(SubMenus, "25SeVdhQe7/Zbl8qGCXOOlWV0QU=");
_c1 = SubMenus;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(SubMenus);
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "StyledMenu");
__turbopack_refresh__.register(_c1, "SubMenus");
__turbopack_refresh__.register(_c2, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_global_102435._.js.map