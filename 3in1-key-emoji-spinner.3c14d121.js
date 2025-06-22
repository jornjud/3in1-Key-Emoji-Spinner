// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"n0fw4":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5e0263af3c14d121";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"kTBnD":[function(require,module,exports,__globalThis) {
/*******************************************************
  script.js - Main Application Logic
  - Handles UI interactions, encoding/decoding, and modals.
********************************************************/ // เพิ่มบนสุดเลย
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _promptpayQr = require("promptpay-qr");
var _promptpayQrDefault = parcelHelpers.interopDefault(_promptpayQr);
var _qrcode = require("qrcode");
var _qrcodeDefault = parcelHelpers.interopDefault(_qrcode);
// ======== Element References ========
const xorModeBtn = document.getElementById('xorModeBtn');
const wordSpinnerModeBtn = document.getElementById('wordSpinnerModeBtn');
const emojiModeBtn = document.getElementById('emojiModeBtn');
const keywordSection = document.getElementById('keywordSection');
const keywordInput = document.getElementById('keywordInput');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const copyButton = document.getElementById('copyButton');
const clearButton = document.getElementById('clearButton');
// Help Modal Elements
const helpBtn = document.getElementById('helpBtn');
const helpModal = document.getElementById('helpModal');
const closeBtn = helpModal.querySelector('.close-btn');
const helpContent = document.getElementById('helpContent');
// NEW: Donate Modal Elements
const supportTrigger = document.getElementById('supportTrigger');
const donateModal = document.getElementById('donateModal');
const donateCloseBtn = document.getElementById('donateCloseBtn');
const generateQrBtn = document.getElementById('generateQrBtn');
const donateAmountInput = document.getElementById('donateAmount');
const qrResultArea = document.getElementById('qrResultArea');
const qrInstruction = document.getElementById('qrInstruction');
const qrImage = document.getElementById('promptpayQrImage');
const qrAmountDisplay = document.getElementById('qrAmountDisplay');
let currentMode = null;
let toastTimeout = null;
// ======== Toast Notification Function ========
function showToast(message, duration = 3000, isError = false) {
    // Clear existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        clearTimeout(toastTimeout);
        existingToast.remove();
    }
    // Create new toast
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = 'toast-notification';
    if (isError) {
        toast.classList.add('error-toast'); // Use class for styling errors
        toast.style.backgroundColor = 'rgba(244, 67, 54, 0.85)';
    }
    document.body.appendChild(toast);
    // Animation timeout
    toastTimeout = setTimeout(()=>{
        toast.style.opacity = '0';
        setTimeout(()=>{
            if (toast.parentElement) toast.remove();
        }, 300);
    }, duration - 300);
}
// ######################################################################
// ########   CORE ENCRYPTION/DECRYPTION LOGIC (UNCHANGED)        ########
// ######################################################################
const ALLOWED_CHARS = "\u0E01\u0E02\u0E04\u0E06\u0E07\u0E08\u0E09\u0E0A\u0E0B\u0E0C\u0E0D\u0E0E\u0E0F\u0E10\u0E11\u0E12\u0E13\u0E14\u0E15\u0E16\u0E17\u0E18\u0E19\u0E1A\u0E1B\u0E1C\u0E1D\u0E1E\u0E1F\u0E20\u0E21\u0E22\u0E23\u0E25\u0E27\u0E28\u0E29\u0E2A\u0E2B\u0E2C\u0E2D\u0E2E\u0E24\u0E46\u0E30\u0E31\u0E32\u0E34\u0E35\u0E36\u0E37\u0E38\u0E39\u0E47\u0E40\u0E41\u0E42\u0E43\u0E44\u0E45\u0E33\u0E48\u0E49\u0E4A\u0E4BabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,./<>?\u0E50\u03B1\u03B2\u03B3\u03B4\u03B5\u03B6\u03B7\u03B8\u03B9\u03BA\u03BB\u03BC\u03BD\u03BE\u03BF\u03C0\u03C1\u03C3\u03C4\u03C5\u03C6\u03C7\u03C8\u03C9\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039A\u039B\u039C\u039D\u039E\u039F\u03A0\u03A1\u03A3\u03A4\u03A5\u03A6\u03A7\u03A8\u03A9";
const DEFAULT_KEYWORD = 'jornjud';
const DEFAULT_PREFIX = '~';
const SEED_LENGTH = 4;
function generateShortSeed() {
    return Math.random().toString(36).slice(-SEED_LENGTH).padStart(SEED_LENGTH, '0');
}
function createPRNG(seed) {
    const seedHash = [
        ...seed
    ].reduce((hash, ch)=>hash * 31 + ch.charCodeAt(0) & 0x7fffffff, 0);
    let state = seedHash;
    return ()=>{
        state = state * 1103515245 + 12345 & 0x7fffffff;
        return state / 0x80000000;
    };
}
const pigpenEmojis = [
    "\uD83D\uDE00",
    "\uD83D\uDE01",
    "\uD83D\uDE02",
    "\uD83E\uDD23",
    "\uD83D\uDE03",
    "\uD83D\uDE04",
    "\uD83D\uDE05",
    "\uD83D\uDE06",
    "\uD83D\uDE09",
    "\uD83D\uDE0A",
    "\uD83D\uDE0B",
    "\uD83D\uDE0E",
    "\uD83D\uDE0D",
    "\uD83D\uDE18",
    "\uD83D\uDE17",
    "\uD83D\uDE19",
    "\uD83D\uDE1A",
    "\uD83D\uDE42",
    "\uD83E\uDD17",
    "\uD83E\uDD29",
    "\uD83E\uDD14",
    "\uD83E\uDD28",
    "\uD83D\uDE10",
    "\uD83D\uDE11",
    "\uD83D\uDE36",
    "\uD83D\uDE44",
    "\uD83D\uDE0F",
    "\uD83D\uDE23",
    "\uD83D\uDE25",
    "\uD83D\uDE2E",
    "\uD83E\uDD10",
    "\uD83D\uDE2F",
    "\uD83D\uDE2A",
    "\uD83D\uDE2B",
    "\uD83D\uDE34",
    "\uD83D\uDE0C",
    "\uD83D\uDE1B",
    "\uD83D\uDE1C",
    "\uD83D\uDE1D",
    "\uD83E\uDD24",
    "\uD83D\uDE12",
    "\uD83D\uDE13",
    "\uD83D\uDE14",
    "\uD83D\uDE15",
    "\uD83D\uDE43",
    "\uD83E\uDD11",
    "\uD83D\uDE32",
    "\u2639\uFE0F",
    "\uD83D\uDE41",
    "\uD83D\uDE16",
    "\uD83D\uDE1E",
    "\uD83D\uDE1F",
    "\uD83D\uDE24",
    "\uD83D\uDE22",
    "\uD83D\uDE2D",
    "\uD83D\uDE26",
    "\uD83D\uDE27",
    "\uD83D\uDE28",
    "\uD83D\uDE29",
    "\uD83E\uDD2F",
    "\uD83D\uDE2C",
    "\uD83D\uDE30",
    "\uD83D\uDE31",
    "\uD83E\uDD75",
    "\uD83E\uDD76",
    "\uD83D\uDE33",
    "\uD83E\uDD2A",
    "\uD83D\uDE35",
    "\uD83D\uDE21",
    "\uD83D\uDE20",
    "\uD83E\uDD2C",
    "\uD83D\uDE37",
    "\uD83E\uDD12",
    "\uD83E\uDD15",
    "\uD83E\uDD22",
    "\uD83E\uDD2E",
    "\uD83E\uDD27",
    "\uD83D\uDE07",
    "\uD83E\uDD70",
    "\uD83E\uDD20",
    "\uD83E\uDD21",
    "\uD83E\uDD73",
    "\uD83E\uDD74",
    "\uD83E\uDD7A",
    "\uD83E\uDD25",
    "\uD83E\uDD2B",
    "\uD83E\uDD2D",
    "\uD83E\uDDD0",
    "\uD83E\uDD13",
    "\uD83D\uDE08",
    "\uD83D\uDC7F",
    "\uD83D\uDC79",
    "\uD83D\uDC7A",
    "\uD83D\uDC80",
    "\uD83D\uDC7B",
    "\uD83D\uDC7D",
    "\uD83E\uDD16",
    "\uD83D\uDCA9",
    "\uD83D\uDE3A",
    "\uD83D\uDE38",
    "\uD83D\uDE39",
    "\uD83D\uDE3B",
    "\uD83D\uDE3C",
    "\uD83D\uDE3D",
    "\uD83D\uDE40",
    "\uD83D\uDE3F",
    "\uD83D\uDE3E",
    "\uD83D\uDC36",
    "\uD83D\uDC31",
    "\uD83D\uDC2D",
    "\uD83D\uDC39",
    "\uD83D\uDC30",
    "\uD83E\uDD8A",
    "\uD83D\uDC3B",
    "\uD83D\uDC3C",
    "\uD83D\uDC28",
    "\uD83D\uDC2F",
    "\uD83E\uDD81",
    "\uD83D\uDC2E",
    "\uD83D\uDC37",
    "\uD83D\uDC3D",
    "\uD83D\uDC38",
    "\uD83D\uDC35",
    "\uD83D\uDE48",
    "\uD83D\uDE49",
    "\uD83D\uDE4A",
    "\uD83D\uDC12",
    "\uD83D\uDC14",
    "\uD83D\uDC27",
    "\uD83D\uDC26",
    "\uD83D\uDC24",
    "\uD83D\uDC23",
    "\uD83D\uDC25",
    "\uD83E\uDD86",
    "\uD83E\uDD85",
    "\uD83E\uDD89",
    "\uD83E\uDD87",
    "\uD83D\uDC3A",
    "\uD83D\uDC17",
    "\uD83D\uDC34",
    "\uD83E\uDD84",
    "\uD83D\uDC1D",
    "\uD83D\uDC1B",
    "\uD83E\uDD8B",
    "\uD83D\uDC0C",
    "\uD83D\uDC1E",
    "\uD83D\uDC1C",
    "\uD83E\uDD97",
    "\uD83D\uDD77",
    "\uD83D\uDD78",
    "\uD83E\uDD82",
    "\uD83D\uDC22",
    "\uD83D\uDC0D",
    "\uD83E\uDD8E",
    "\uD83E\uDD96",
    "\uD83E\uDD95",
    "\uD83D\uDC19",
    "\uD83E\uDD91",
    "\uD83E\uDD90",
    "\uD83E\uDD80",
    "\uD83D\uDC21",
    "\uD83D\uDC20",
    "\uD83D\uDC1F",
    "\uD83D\uDC2C",
    "\uD83D\uDC33",
    "\uD83D\uDC0B",
    "\uD83E\uDD88",
    "\uD83D\uDC0A",
    "\uD83D\uDC05",
    "\uD83D\uDC06",
    "\uD83E\uDD93",
    "\uD83E\uDD8D",
    "\uD83D\uDC18",
    "\uD83E\uDD8F",
    "\uD83D\uDC2A",
    "\uD83D\uDC2B",
    "\uD83E\uDD92",
    "\uD83E\uDD98",
    "\uD83D\uDC03",
    "\uD83D\uDC02",
    "\uD83D\uDC04",
    "\uD83D\uDC0E",
    "\uD83D\uDC16",
    "\uD83D\uDC0F",
    "\uD83D\uDC11",
    "\uD83D\uDC10",
    "\uD83D\uDC13",
    "\uD83E\uDD83",
    "\uD83D\uDD4A",
    "\uD83D\uDC07",
    "\uD83D\uDC01",
    "\uD83D\uDC00",
    "\uD83D\uDC3F",
    "\uD83E\uDD94",
    "\uD83D\uDC3E",
    "\uD83D\uDC09",
    "\uD83D\uDC32",
    "\uD83C\uDF35",
    "\uD83C\uDF84",
    "\uD83C\uDF32",
    "\uD83C\uDF33",
    "\uD83C\uDF34",
    "\uD83C\uDF31",
    "\uD83C\uDF3F",
    "\u2618\uFE0F",
    "\uD83C\uDF40",
    "\uD83C\uDF8D",
    "\uD83C\uDF8B",
    "\uD83C\uDF43",
    "\uD83C\uDF42",
    "\uD83C\uDF41",
    "\uD83C\uDF44",
    "\uD83C\uDF3E",
    "\uD83D\uDC90",
    "\uD83C\uDF37",
    "\uD83C\uDF39",
    "\uD83E\uDD40",
    "\uD83C\uDF3A",
    "\uD83C\uDF38",
    "\uD83C\uDF3C",
    "\uD83C\uDF3B",
    "\uD83C\uDF1E",
    "\uD83C\uDF1D",
    "\uD83C\uDF1B",
    "\uD83C\uDF1A",
    "\uD83C\uDF1C",
    "\uD83C\uDF19",
    "\u2B50",
    "\uD83C\uDF1F",
    "\uD83D\uDCAB",
    "\u2728",
    "\u26A1",
    "\u2604\uFE0F",
    "\uD83D\uDCA5",
    "\uD83D\uDD25",
    "\uD83C\uDF2A",
    "\uD83C\uDF08",
    "\u2600\uFE0F",
    "\uD83C\uDF24",
    "\u26C5",
    "\uD83C\uDF25",
    "\u2601\uFE0F",
    "\uD83C\uDF26",
    "\uD83C\uDF27",
    "\u26C8",
    "\uD83C\uDF29",
    "\uD83C\uDF28",
    "\u2744\uFE0F",
    "\u2603\uFE0F",
    "\u26C4",
    "\uD83C\uDF2C",
    "\uD83D\uDCA8",
    "\uD83D\uDCA7",
    "\uD83D\uDCA6",
    "\u2614",
    "\u2602\uFE0F",
    "\uD83C\uDF0A",
    "\uD83C\uDF2B",
    "\uD83C\uDF4F",
    "\uD83C\uDF4E",
    "\uD83C\uDF50",
    "\uD83C\uDF4A",
    "\uD83C\uDF4B",
    "\uD83C\uDF4C",
    "\uD83C\uDF49",
    "\uD83C\uDF47",
    "\uD83C\uDF53",
    "\uD83C\uDF48",
    "\uD83C\uDF52",
    "\uD83C\uDF51",
    "\uD83E\uDD6D",
    "\uD83C\uDF4D",
    "\uD83E\uDD65",
    "\uD83E\uDD5D",
    "\uD83C\uDF45",
    "\uD83C\uDF46",
    "\uD83E\uDD51",
    "\uD83E\uDD66",
    "\uD83E\uDD6C",
    "\uD83E\uDD52",
    "\uD83C\uDF36",
    "\uD83C\uDF3D",
    "\uD83E\uDD55",
    "\uD83E\uDD54",
    "\uD83C\uDF60",
    "\uD83E\uDD50",
    "\uD83C\uDF5E",
    "\uD83E\uDD56",
    "\uD83E\uDD68",
    "\uD83E\uDDC0",
    "\uD83E\uDD5A",
    "\uD83C\uDF73",
    "\uD83E\uDD5E",
    "\uD83E\uDD53",
    "\uD83E\uDD69",
    "\uD83C\uDF57",
    "\uD83C\uDF56",
    "\uD83C\uDF2D",
    "\uD83C\uDF54",
    "\uD83C\uDF5F",
    "\uD83C\uDF55",
    "\uD83E\uDD6A",
    "\uD83E\uDD59",
    "\uD83C\uDF2E",
    "\uD83C\uDF2F",
    "\uD83E\uDD57",
    "\uD83E\uDD58",
    "\uD83C\uDF5D",
    "\uD83C\uDF5C",
    "\uD83C\uDF72",
    "\uD83C\uDF65",
    "\uD83E\uDD60",
    "\uD83C\uDF63",
    "\uD83C\uDF71",
    "\uD83C\uDF5B",
    "\uD83C\uDF5A",
    "\uD83C\uDF59",
    "\uD83C\uDF58",
    "\uD83C\uDF62",
    "\uD83C\uDF61",
    "\uD83C\uDF67",
    "\uD83C\uDF68",
    "\uD83C\uDF66",
    "\uD83E\uDD67",
    "\uD83E\uDDC1",
    "\uD83C\uDF70",
    "\uD83C\uDF82",
    "\uD83C\uDF6E",
    "\uD83C\uDF6D",
    "\uD83C\uDF6C",
    "\uD83C\uDF6B",
    "\uD83C\uDF7F",
    "\uD83C\uDF69",
    "\uD83C\uDF6A",
    "\uD83C\uDF30",
    "\uD83E\uDD5C",
    "\uD83C\uDF6F",
    "\uD83E\uDD5B",
    "\uD83C\uDF7C",
    "\u2615",
    "\uD83C\uDF75",
    "\uD83E\uDD64",
    "\uD83C\uDF76",
    "\uD83C\uDF7A",
    "\uD83C\uDF7B",
    "\uD83E\uDD42",
    "\uD83C\uDF77",
    "\uD83E\uDD43",
    "\uD83C\uDF78",
    "\uD83C\uDF79",
    "\uD83C\uDF7E",
    "\uD83E\uDD44",
    "\uD83C\uDF74",
    "\uD83C\uDF7D",
    "\uD83E\uDD63",
    "\uD83E\uDD61",
    "\uD83E\uDD62",
    "\uD83D\uDE97",
    "\uD83D\uDE95",
    "\uD83D\uDE99",
    "\uD83D\uDE8C",
    "\uD83D\uDE8E",
    "\uD83C\uDFCE",
    "\uD83D\uDE93",
    "\uD83D\uDE91",
    "\uD83D\uDE92",
    "\uD83D\uDE90",
    "\uD83D\uDE9A",
    "\uD83D\uDE9B",
    "\uD83D\uDE9C",
    "\uD83D\uDEF4",
    "\uD83D\uDEB2",
    "\uD83D\uDEF5",
    "\uD83C\uDFCD",
    "\uD83D\uDEA8",
    "\uD83D\uDE94",
    "\uD83D\uDE8D",
    "\uD83D\uDE98",
    "\uD83D\uDE96",
    "\uD83D\uDEA1",
    "\uD83D\uDEA0",
    "\uD83D\uDE9F",
    "\uD83D\uDE83",
    "\uD83D\uDE8B",
    "\uD83D\uDE9E",
    "\uD83D\uDE9D",
    "\uD83D\uDE84",
    "\uD83D\uDE85",
    "\uD83D\uDE88",
    "\uD83D\uDE82",
    "\uD83D\uDE86",
    "\uD83D\uDE87",
    "\uD83D\uDE8A",
    "\uD83D\uDE89",
    "\u2708\uFE0F",
    "\uD83D\uDEEB",
    "\uD83D\uDEEC",
    "\uD83D\uDEE9",
    "\uD83D\uDCBA",
    "\uD83D\uDEF0",
    "\uD83D\uDE80",
    "\uD83D\uDEF8",
    "\uD83D\uDE81",
    "\uD83D\uDEF6",
    "\u26F5",
    "\uD83D\uDEA4",
    "\uD83D\uDEE5",
    "\uD83D\uDEF3",
    "\u26F4",
    "\uD83D\uDEA2",
    "\u2693",
    "\uD83D\uDEA7",
    "\u26FD",
    "\uD83D\uDE8F",
    "\uD83D\uDEA6",
    "\uD83D\uDEA5",
    "\uD83D\uDDFA",
    "\uD83D\uDDFF",
    "\uD83D\uDDFD",
    "\u26F2",
    "\uD83D\uDDFC",
    "\uD83C\uDFF0",
    "\uD83C\uDFEF",
    "\uD83C\uDFA1",
    "\uD83C\uDFA2",
    "\uD83C\uDFA0",
    "\u26F1",
    "\uD83C\uDFD6",
    "\uD83C\uDFDD",
    "\uD83C\uDF0B",
    "\u26F0",
    "\uD83C\uDFD4",
    "\uD83D\uDDFB",
    "\uD83C\uDFD5",
    "\u26FA",
    "\uD83C\uDFE0",
    "\uD83C\uDFE1",
    "\uD83C\uDFD8",
    "\uD83C\uDFDA",
    "\uD83C\uDFD7",
    "\uD83C\uDFED",
    "\uD83C\uDFE2",
    "\uD83C\uDFEC",
    "\uD83C\uDFE3",
    "\uD83C\uDFE4",
    "\uD83C\uDFE5",
    "\uD83C\uDFE6",
    "\uD83C\uDFE8",
    "\uD83C\uDFEA",
    "\uD83C\uDFEB",
    "\uD83C\uDFE9",
    "\uD83D\uDC92",
    "\uD83C\uDFDB",
    "\u26EA",
    "\uD83D\uDD4C",
    "\uD83D\uDD4D",
    "\uD83D\uDD4B",
    "\u26E9",
    "\uD83D\uDEE4",
    "\uD83D\uDEE3",
    "\uD83D\uDDFE",
    "\uD83C\uDF91",
    "\uD83C\uDFDE",
    "\uD83C\uDF05",
    "\uD83C\uDF04",
    "\uD83C\uDF20",
    "\uD83C\uDF87",
    "\uD83C\uDF86",
    "\uD83C\uDF07",
    "\uD83C\uDF06",
    "\uD83C\uDFD9",
    "\uD83C\uDF03",
    "\uD83C\uDF0C",
    "\uD83C\uDF09",
    "\uD83C\uDF01"
];
const charToEmoji = new Map();
const emojiToChar = new Map();
for(let i = 0; i < ALLOWED_CHARS.length && i < pigpenEmojis.length; i++){
    charToEmoji.set(ALLOWED_CHARS[i], pigpenEmojis[i]);
    emojiToChar.set(pigpenEmojis[i], ALLOWED_CHARS[i]);
}
function encodeEmoji(text) {
    return [
        ...text
    ].map((ch)=>charToEmoji.get(ch) || ch).join('');
}
function decodeEmoji(text) {
    const emojiArray = Array.from(text);
    return emojiArray.map((emoji)=>emojiToChar.get(emoji) || emoji).join('');
}
function isAllEmoji(str) {
    const emojiArray = Array.from(str);
    return emojiArray.every((emoji)=>emojiToChar.has(emoji) || /\s/.test(emoji));
}
function encodeWordspinner(text) {
    const chars = [
        ...text
    ];
    const seed = generateShortSeed();
    const prng = createPRNG(seed);
    const positions = chars.map((_, i)=>i).sort(()=>prng() - 0.5);
    const shuffledText = positions.map((pos)=>chars[pos]).join('');
    return `${DEFAULT_PREFIX}${seed}${shuffledText}`;
}
function decodeWordspinner(text) {
    if (!text.startsWith(DEFAULT_PREFIX) || text.length < DEFAULT_PREFIX.length + SEED_LENGTH) return text;
    const seed = text.slice(DEFAULT_PREFIX.length, DEFAULT_PREFIX.length + SEED_LENGTH);
    const cipherText = text.slice(DEFAULT_PREFIX.length + SEED_LENGTH);
    if (cipherText.length === 0) return '';
    const prng = createPRNG(seed);
    const positions = [
        ...Array(cipherText.length).keys()
    ].sort(()=>prng() - 0.5);
    const reversePositions = new Array(cipherText.length);
    positions.forEach((shuffledIndex, originalIndex)=>{
        reversePositions[shuffledIndex] = originalIndex;
    });
    return reversePositions.map((pos)=>cipherText[pos]).join('');
}
function isLikelyWordspinner(text) {
    return text.startsWith(DEFAULT_PREFIX) && text.length >= DEFAULT_PREFIX.length + SEED_LENGTH;
}
function encodeThaiEng(text, keyword) {
    const seed = generateShortSeed();
    const prng = createPRNG(seed + keyword);
    return seed + [
        ...text
    ].map((ch)=>{
        const idx = ALLOWED_CHARS.indexOf(ch);
        if (idx === -1) return ch;
        const randOffset = Math.floor(prng() * ALLOWED_CHARS.length);
        return ALLOWED_CHARS[(idx + randOffset) % ALLOWED_CHARS.length];
    }).join('');
}
function decodeThaiEng(encText, keyword) {
    if (!encText || encText.length < SEED_LENGTH) return encText;
    const seed = encText.slice(0, SEED_LENGTH);
    const cipherText = encText.slice(SEED_LENGTH);
    if (cipherText.length === 0) return '';
    const prng = createPRNG(seed + keyword);
    return [
        ...cipherText
    ].map((ch)=>{
        const idx = ALLOWED_CHARS.indexOf(ch);
        if (idx === -1) return ch;
        const randOffset = Math.floor(prng() * ALLOWED_CHARS.length);
        return ALLOWED_CHARS[(idx - randOffset % ALLOWED_CHARS.length + ALLOWED_CHARS.length) % ALLOWED_CHARS.length];
    }).join('');
}
function isLikelyEncoded(text) {
    return /^[a-z0-9]{4}/.test(text) && text.length > SEED_LENGTH;
}
// ######################################################################
function updateUI() {
    if (keywordSection) keywordSection.style.display = currentMode === 'xor' ? 'flex' : 'none';
}
function processCurrentMode() {
    const text = inputText.value;
    let result = '';
    let action = '';
    if (text.trim() === '') {
        if (outputText) outputText.value = '';
        return;
    }
    if (!currentMode) {
        if (outputText) outputText.value = "\u26A0\uFE0F \u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E2B\u0E21\u0E14\u0E01\u0E48\u0E2D\u0E19";
        showToast("\u26A0\uFE0F \u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E2B\u0E21\u0E14\u0E01\u0E48\u0E2D\u0E19", 3000);
        return;
    }
    try {
        if (currentMode === 'xor') {
            let key = keywordInput.value.trim() || DEFAULT_KEYWORD;
            action = isLikelyEncoded(text) ? "\uD83D\uDD11 \u0E01\u0E33\u0E25\u0E31\u0E07\u0E16\u0E2D\u0E14\u0E23\u0E2B\u0E31\u0E2A (Key)..." : "\uD83D\uDD12 \u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E02\u0E49\u0E32\u0E23\u0E2B\u0E31\u0E2A (Key)...";
            showToast(action);
            result = isLikelyEncoded(text) ? decodeThaiEng(text, key) : encodeThaiEng(text.trim(), key);
        } else if (currentMode === 'wordspinner') {
            action = isLikelyWordspinner(text) ? "\uD83D\uDD04 \u0E01\u0E33\u0E25\u0E31\u0E07\u0E16\u0E2D\u0E14\u0E23\u0E2B\u0E31\u0E2A (Spinner)..." : "\u2728 \u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E02\u0E49\u0E32\u0E23\u0E2B\u0E31\u0E2A (Spinner)...";
            showToast(action);
            result = isLikelyWordspinner(text) ? decodeWordspinner(text) : encodeWordspinner(text.trim());
        } else if (currentMode === 'emoji') {
            action = isAllEmoji(text) ? "\uD83D\uDE03 \u0E01\u0E33\u0E25\u0E31\u0E07\u0E16\u0E2D\u0E14\u0E23\u0E2B\u0E31\u0E2A (Emoji)..." : "\uD83E\uDD2A \u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E02\u0E49\u0E32\u0E23\u0E2B\u0E31\u0E2A (Emoji)...";
            showToast(action);
            result = isAllEmoji(text) ? decodeEmoji(text) : encodeEmoji(text.trim());
        }
        if (outputText) outputText.value = result;
    } catch (error) {
        console.error("Processing Error:", error);
        showToast(`\u{274C} \u{E40}\u{E01}\u{E34}\u{E14}\u{E02}\u{E49}\u{E2D}\u{E1C}\u{E34}\u{E14}\u{E1E}\u{E25}\u{E32}\u{E14}: ${error.message}`, 4000, true);
        if (outputText) outputText.value = "\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14!";
    }
}
// Event Listeners for mode buttons
[
    xorModeBtn,
    wordSpinnerModeBtn,
    emojiModeBtn
].forEach((btn)=>{
    if (!btn) return;
    btn.addEventListener('click', ()=>{
        const newMode = btn.id.replace('ModeBtn', '').toLowerCase();
        if (currentMode === newMode) return;
        currentMode = newMode;
        document.querySelectorAll('.mode-btn').forEach((b)=>b.classList.remove('active'));
        btn.classList.add('active');
        updateUI();
        processCurrentMode();
        let modeName = btn.textContent.trim();
        showToast(`\u{2705} \u{E40}\u{E1B}\u{E25}\u{E35}\u{E48}\u{E22}\u{E19}\u{E40}\u{E1B}\u{E47}\u{E19}\u{E42}\u{E2B}\u{E21}\u{E14} ${modeName}`);
    });
});
if (inputText) inputText.addEventListener('input', processCurrentMode);
if (keywordInput) keywordInput.addEventListener('input', ()=>{
    if (currentMode === 'xor') processCurrentMode();
});
// Action Buttons
if (copyButton) copyButton.addEventListener('click', ()=>{
    if (!outputText || !outputText.value) {
        showToast("\u2753 \u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E2B\u0E49\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01", 2000);
        return;
    }
    navigator.clipboard.writeText(outputText.value).then(()=>{
        showToast("\uD83D\uDCCB \u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E04\u0E25\u0E34\u0E1B\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E41\u0E25\u0E49\u0E27");
    }).catch((err)=>{
        showToast("\u274C \u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08", 3000, true);
        console.error('Clipboard API failed: ', err);
    });
});
if (clearButton) clearButton.addEventListener('click', ()=>{
    if (inputText) inputText.value = '';
    if (outputText) outputText.value = '';
    showToast("\uD83E\uDDF9 \u0E25\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E25\u0E49\u0E27");
    if (inputText) inputText.focus();
});
// ======== Modal Logic (Help & Donate) ========
// --- Help Modal ---
function showHelp() {
    if (!helpContent) return;
    helpContent.innerHTML = `
        <div><h3><i class="fas fa-key"></i> Key Translator Mode</h3><p>\u{E43}\u{E2A}\u{E48}\u{E02}\u{E49}\u{E2D}\u{E04}\u{E27}\u{E32}\u{E21}\u{E41}\u{E25}\u{E30} Keyword (\u{E2B}\u{E32}\u{E01}\u{E40}\u{E27}\u{E49}\u{E19}\u{E27}\u{E48}\u{E32}\u{E07}\u{E08}\u{E30}\u{E43}\u{E0A}\u{E49}\u{E04}\u{E48}\u{E32}\u{E40}\u{E23}\u{E34}\u{E48}\u{E21}\u{E15}\u{E49}\u{E19} <code>${DEFAULT_KEYWORD}</code>) \u{E23}\u{E30}\u{E1A}\u{E1A}\u{E08}\u{E30}\u{E40}\u{E02}\u{E49}\u{E32}\u{E23}\u{E2B}\u{E31}\u{E2A} \u{E2B}\u{E32}\u{E01}\u{E02}\u{E49}\u{E2D}\u{E04}\u{E27}\u{E32}\u{E21}\u{E17}\u{E35}\u{E48}\u{E1B}\u{E49}\u{E2D}\u{E19}\u{E14}\u{E39}\u{E40}\u{E2B}\u{E21}\u{E37}\u{E2D}\u{E19}\u{E16}\u{E39}\u{E01}\u{E40}\u{E02}\u{E49}\u{E32}\u{E23}\u{E2B}\u{E31}\u{E2A}\u{E41}\u{E25}\u{E49}\u{E27} \u{E23}\u{E30}\u{E1A}\u{E1A}\u{E08}\u{E30}\u{E1E}\u{E22}\u{E32}\u{E22}\u{E32}\u{E21}\u{E16}\u{E2D}\u{E14}\u{E23}\u{E2B}\u{E31}\u{E2A}\u{E14}\u{E49}\u{E27}\u{E22} Keyword \u{E40}\u{E14}\u{E35}\u{E22}\u{E27}\u{E01}\u{E31}\u{E19}</p></div>
        <div><h3><i class="fas fa-smile"></i> Emoji Code Mode</h3><p>\u{E41}\u{E1B}\u{E25}\u{E07}\u{E15}\u{E31}\u{E27}\u{E2D}\u{E31}\u{E01}\u{E29}\u{E23} (\u{E44}\u{E17}\u{E22}, \u{E2D}\u{E31}\u{E07}\u{E01}\u{E24}\u{E29}, \u{E15}\u{E31}\u{E27}\u{E40}\u{E25}\u{E02}, \u{E2A}\u{E31}\u{E0D}\u{E25}\u{E31}\u{E01}\u{E29}\u{E13}\u{E4C}\u{E1A}\u{E32}\u{E07}\u{E15}\u{E31}\u{E27}) \u{E40}\u{E1B}\u{E47}\u{E19} Emoji \u{E2B}\u{E23}\u{E37}\u{E2D}\u{E41}\u{E1B}\u{E25}\u{E07} Emoji \u{E01}\u{E25}\u{E31}\u{E1A}\u{E40}\u{E1B}\u{E47}\u{E19}\u{E02}\u{E49}\u{E2D}\u{E04}\u{E27}\u{E32}\u{E21}\u{E40}\u{E14}\u{E34}\u{E21} \u{E23}\u{E30}\u{E1A}\u{E1A}\u{E08}\u{E30}\u{E04}\u{E32}\u{E14}\u{E40}\u{E14}\u{E32}\u{E42}\u{E14}\u{E22}\u{E2D}\u{E31}\u{E15}\u{E42}\u{E19}\u{E21}\u{E31}\u{E15}\u{E34}\u{E27}\u{E48}\u{E32}\u{E04}\u{E27}\u{E23}\u{E40}\u{E02}\u{E49}\u{E32}\u{E23}\u{E2B}\u{E31}\u{E2A}\u{E2B}\u{E23}\u{E37}\u{E2D}\u{E16}\u{E2D}\u{E14}\u{E23}\u{E2B}\u{E31}\u{E2A}</p></div>
        <div><h3><i class="fas fa-sync-alt"></i> Word Spinner Mode</h3><p>\u{E2A}\u{E25}\u{E31}\u{E1A}\u{E15}\u{E33}\u{E41}\u{E2B}\u{E19}\u{E48}\u{E07}\u{E15}\u{E31}\u{E27}\u{E2D}\u{E31}\u{E01}\u{E29}\u{E23}\u{E17}\u{E31}\u{E49}\u{E07}\u{E2B}\u{E21}\u{E14}\u{E43}\u{E19}\u{E02}\u{E49}\u{E2D}\u{E04}\u{E27}\u{E32}\u{E21}\u{E41}\u{E1A}\u{E1A}\u{E2A}\u{E38}\u{E48}\u{E21} \u{E1E}\u{E23}\u{E49}\u{E2D}\u{E21}\u{E40}\u{E1E}\u{E34}\u{E48}\u{E21} Prefix <code>${DEFAULT_PREFIX}</code> \u{E41}\u{E25}\u{E30}\u{E23}\u{E2B}\u{E31}\u{E2A} Seed 4 \u{E15}\u{E31}\u{E27}\u{E17}\u{E35}\u{E48}\u{E14}\u{E49}\u{E32}\u{E19}\u{E2B}\u{E19}\u{E49}\u{E32} \u{E2B}\u{E32}\u{E01}\u{E02}\u{E49}\u{E2D}\u{E04}\u{E27}\u{E32}\u{E21}\u{E17}\u{E35}\u{E48}\u{E1B}\u{E49}\u{E2D}\u{E19}\u{E02}\u{E36}\u{E49}\u{E19}\u{E15}\u{E49}\u{E19}\u{E14}\u{E49}\u{E27}\u{E22} Prefix \u{E41}\u{E25}\u{E30} Seed \u{E23}\u{E30}\u{E1A}\u{E1A}\u{E08}\u{E30}\u{E16}\u{E2D}\u{E14}\u{E23}\u{E2B}\u{E31}\u{E2A}\u{E01}\u{E25}\u{E31}\u{E1A}\u{E40}\u{E1B}\u{E47}\u{E19}\u{E02}\u{E49}\u{E2D}\u{E04}\u{E27}\u{E32}\u{E21}\u{E40}\u{E14}\u{E34}\u{E21}</p></div>
        <hr>
        <p style="font-size: 0.9em; color: #777;">\u{E43}\u{E0A}\u{E49}\u{E07}\u{E32}\u{E19}\u{E44}\u{E14}\u{E49}\u{E40}\u{E25}\u{E22} \u{E44}\u{E21}\u{E48}\u{E15}\u{E49}\u{E2D}\u{E07}\u{E25}\u{E47}\u{E2D}\u{E01}\u{E2D}\u{E34}\u{E19} \u{1F609}</p>`;
    if (helpModal) helpModal.style.display = 'block';
}
if (helpBtn) helpBtn.addEventListener('click', showHelp);
if (closeBtn) closeBtn.addEventListener('click', ()=>{
    helpModal.style.display = 'none';
});
// --- NEW: Donate Modal ---
function showDonateModal() {
    if (donateModal) {
        // Reset modal to initial state every time it's opened
        if (qrResultArea) qrResultArea.classList.add('hidden');
        if (qrInstruction) qrInstruction.classList.remove('hidden');
        if (donateAmountInput) donateAmountInput.value = '20'; // Reset to default amount
        donateModal.style.display = 'block';
    }
}
function closeDonateModal() {
    if (donateModal) donateModal.style.display = 'none';
}
if (supportTrigger) supportTrigger.addEventListener('click', showDonateModal);
if (donateCloseBtn) donateCloseBtn.addEventListener('click', closeDonateModal);
// Close modals when clicking outside
window.addEventListener('click', (event)=>{
    if (event.target === helpModal) {
        if (helpModal) helpModal.style.display = 'none';
    }
    if (event.target === donateModal) closeDonateModal();
});
// --- NEW: Logic for creating QR Code (inside the modal) ---
const myPromptpayId = '0616164179';
async function updateQrCode() {
    if (!donateAmountInput || !qrImage || !qrAmountDisplay || !qrResultArea || !qrInstruction) {
        console.error("QR Code modal elements not found!");
        return;
    }
    const amount = parseFloat(donateAmountInput.value);
    if (isNaN(amount) || amount <= 0) {
        showToast("\u0E40\u0E2E\u0E49\u0E22\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19! \u0E43\u0E2A\u0E48\u0E22\u0E2D\u0E14\u0E40\u0E07\u0E34\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E14\u0E34 \uD83E\uDD23", 3000, true);
        return;
    }
    // --- ส่วนที่เปลี่ยนคือตรงนี้ ---
    try {
        // 1. สร้างชุดข้อความด้วย promptpay-qr
        const payload = (0, _promptpayQrDefault.default)(myPromptpayId, {
            amount
        });
        // 2. วาดรูป QR Code จากชุดข้อความด้วย qrcode
        const qrDataURL = await (0, _qrcodeDefault.default).toDataURL(payload);
        // 3. เอารูปไปโชว์ในแท็ก img
        qrImage.src = qrDataURL;
        // --- จบส่วนที่เปลี่ยน ---
        qrAmountDisplay.textContent = `${amount.toFixed(2)} \u{E1A}\u{E32}\u{E17}`;
        qrResultArea.classList.remove('hidden');
        qrInstruction.classList.add('hidden');
        showToast(`\u{2705} QR \u{E2A}\u{E33}\u{E2B}\u{E23}\u{E31}\u{E1A} ${amount} \u{E1A}\u{E32}\u{E17}\u{E21}\u{E32}\u{E41}\u{E25}\u{E49}\u{E27}! \u{E02}\u{E2D}\u{E1A}\u{E43}\u{E08}\u{E19}\u{E30}\u{E40}\u{E1E}\u{E37}\u{E48}\u{E2D}\u{E19} \u{1F44A}`, 3500);
    } catch (err) {
        console.error("Failed to generate QR Code:", err);
        showToast("\u274C \u0E42\u0E2D\u0E49\u0E22! \u0E2A\u0E23\u0E49\u0E32\u0E07 QR Code \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E27\u0E48\u0E30!", 4000, true);
    }
}
if (generateQrBtn) generateQrBtn.addEventListener('click', updateQrCode);
if (donateAmountInput) donateAmountInput.addEventListener('keydown', (event)=>{
    if (event.key === 'Enter') {
        event.preventDefault();
        updateQrCode();
    }
});
// Initial UI setup
updateUI();
console.log("\u0E2A\u0E04\u0E23\u0E34\u0E1B\u0E15\u0E4C\u0E2B\u0E25\u0E31\u0E01\u0E42\u0E2B\u0E25\u0E14\u0E41\u0E25\u0E30\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19");
// Service Worker registration
if ('serviceWorker' in navigator) window.addEventListener('load', ()=>{
    navigator.serviceWorker.register(require("f501c539fc9fcbea")).then((reg)=>console.log('Service Worker registered:', reg.scope)).catch((err)=>console.error('Service Worker registration failed:', err));
});

},{"promptpay-qr":"e5Yne","f501c539fc9fcbea":"iSs9O","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","qrcode":"9Qtts"}],"e5Yne":[function(require,module,exports,__globalThis) {
/*!
 * promptpay-qr
 * JavaScript library to generate PromptPay QR code
 * <https://github.com/dtinth/promptpay-qr>
 *
 * Refs:
 * - https://www.blognone.com/node/95133
 * - https://www.emvco.com/emv-technologies/qrcodes/
 *
 * @license MIT
 */ var crc = require("4005461067853d40");
var ID_PAYLOAD_FORMAT = '00';
var ID_POI_METHOD = '01';
var ID_MERCHANT_INFORMATION_BOT = '29';
var ID_TRANSACTION_CURRENCY = '53';
var ID_TRANSACTION_AMOUNT = '54';
var ID_COUNTRY_CODE = '58';
var ID_CRC = '63';
var PAYLOAD_FORMAT_EMV_QRCPS_MERCHANT_PRESENTED_MODE = '01';
var POI_METHOD_STATIC = '11';
var POI_METHOD_DYNAMIC = '12';
var MERCHANT_INFORMATION_TEMPLATE_ID_GUID = '00';
var BOT_ID_MERCHANT_PHONE_NUMBER = '01';
var BOT_ID_MERCHANT_TAX_ID = '02';
var BOT_ID_MERCHANT_EWALLET_ID = '03';
var GUID_PROMPTPAY = 'A000000677010111';
var TRANSACTION_CURRENCY_THB = '764';
var COUNTRY_CODE_TH = 'TH';
function generatePayload(target, options) {
    target = sanitizeTarget(target);
    var amount = options.amount;
    var targetType = target.length >= 15 ? BOT_ID_MERCHANT_EWALLET_ID : target.length >= 13 ? BOT_ID_MERCHANT_TAX_ID : BOT_ID_MERCHANT_PHONE_NUMBER;
    var data = [
        f(ID_PAYLOAD_FORMAT, PAYLOAD_FORMAT_EMV_QRCPS_MERCHANT_PRESENTED_MODE),
        f(ID_POI_METHOD, amount ? POI_METHOD_DYNAMIC : POI_METHOD_STATIC),
        f(ID_MERCHANT_INFORMATION_BOT, serialize([
            f(MERCHANT_INFORMATION_TEMPLATE_ID_GUID, GUID_PROMPTPAY),
            f(targetType, formatTarget(target))
        ])),
        f(ID_COUNTRY_CODE, COUNTRY_CODE_TH),
        f(ID_TRANSACTION_CURRENCY, TRANSACTION_CURRENCY_THB),
        amount && f(ID_TRANSACTION_AMOUNT, formatAmount(amount))
    ];
    var dataToCrc = serialize(data) + ID_CRC + '04';
    data.push(f(ID_CRC, formatCrc(crc.crc16xmodem(dataToCrc, 0xffff))));
    return serialize(data);
}
function f(id, value) {
    return [
        id,
        ('00' + value.length).slice(-2),
        value
    ].join('');
}
function serialize(xs) {
    return xs.filter(function(x) {
        return x;
    }).join('');
}
function sanitizeTarget(id) {
    return id.replace(/[^0-9]/g, '');
}
function formatTarget(id) {
    const numbers = sanitizeTarget(id);
    if (numbers.length >= 13) return numbers;
    return ('0000000000000' + numbers.replace(/^0/, '66')).slice(-13);
}
function formatAmount(amount) {
    return amount.toFixed(2);
}
function formatCrc(crcValue) {
    return ('0000' + crcValue.toString(16).toUpperCase()).slice(-4);
}
module.exports = generatePayload;

},{"4005461067853d40":"g3TqM"}],"g3TqM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "crc1", ()=>(0, _crc1Default.default));
parcelHelpers.export(exports, "crc8", ()=>(0, _crc8Default.default));
parcelHelpers.export(exports, "crc81wire", ()=>(0, _crc81WireDefault.default));
parcelHelpers.export(exports, "crc16", ()=>(0, _crc16Default.default));
parcelHelpers.export(exports, "crc16ccitt", ()=>(0, _crc16CcittDefault.default));
parcelHelpers.export(exports, "crc16modbus", ()=>(0, _crc16ModbusDefault.default));
parcelHelpers.export(exports, "crc16xmodem", ()=>(0, _crc16XmodemDefault.default));
parcelHelpers.export(exports, "crc16kermit", ()=>(0, _crc16KermitDefault.default));
parcelHelpers.export(exports, "crc24", ()=>(0, _crc24Default.default));
parcelHelpers.export(exports, "crc32", ()=>(0, _crc32Default.default));
parcelHelpers.export(exports, "crcjam", ()=>(0, _crcjamDefault.default));
var _crc1 = require("./crc1");
var _crc1Default = parcelHelpers.interopDefault(_crc1);
var _crc8 = require("./crc8");
var _crc8Default = parcelHelpers.interopDefault(_crc8);
var _crc81Wire = require("./crc81wire");
var _crc81WireDefault = parcelHelpers.interopDefault(_crc81Wire);
var _crc16 = require("./crc16");
var _crc16Default = parcelHelpers.interopDefault(_crc16);
var _crc16Ccitt = require("./crc16ccitt");
var _crc16CcittDefault = parcelHelpers.interopDefault(_crc16Ccitt);
var _crc16Modbus = require("./crc16modbus");
var _crc16ModbusDefault = parcelHelpers.interopDefault(_crc16Modbus);
var _crc16Xmodem = require("./crc16xmodem");
var _crc16XmodemDefault = parcelHelpers.interopDefault(_crc16Xmodem);
var _crc16Kermit = require("./crc16kermit");
var _crc16KermitDefault = parcelHelpers.interopDefault(_crc16Kermit);
var _crc24 = require("./crc24");
var _crc24Default = parcelHelpers.interopDefault(_crc24);
var _crc32 = require("./crc32");
var _crc32Default = parcelHelpers.interopDefault(_crc32);
var _crcjam = require("./crcjam");
var _crcjamDefault = parcelHelpers.interopDefault(_crcjam);
exports.default = {
    crc1: (0, _crc1Default.default),
    crc8: (0, _crc8Default.default),
    crc81wire: (0, _crc81WireDefault.default),
    crc16: (0, _crc16Default.default),
    crc16ccitt: (0, _crc16CcittDefault.default),
    crc16modbus: (0, _crc16ModbusDefault.default),
    crc16xmodem: (0, _crc16XmodemDefault.default),
    crc16kermit: (0, _crc16KermitDefault.default),
    crc24: (0, _crc24Default.default),
    crc32: (0, _crc32Default.default),
    crcjam: (0, _crcjamDefault.default)
};

},{"./crc1":"lyiC3","./crc8":"6NhhK","./crc81wire":"gm3g5","./crc16":"9VqJW","./crc16ccitt":"8yVni","./crc16modbus":"fs73Q","./crc16xmodem":"luDU1","./crc16kermit":"536iz","./crc24":"d0Md4","./crc32":"4B5Ta","./crcjam":"dEdnj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lyiC3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buffer = require("buffer");
var _createBuffer = require("./create_buffer");
var _createBufferDefault = parcelHelpers.interopDefault(_createBuffer);
var _defineCrc = require("./define_crc");
var _defineCrcDefault = parcelHelpers.interopDefault(_defineCrc);
const crc1 = (0, _defineCrcDefault.default)('crc1', function(buf, previous) {
    if (!(0, _buffer.Buffer).isBuffer(buf)) buf = (0, _createBufferDefault.default)(buf);
    let crc = ~~previous;
    let accum = 0;
    for(let index = 0; index < buf.length; index++){
        const byte = buf[index];
        accum += byte;
    }
    crc += accum % 256;
    return crc % 256;
});
exports.default = crc1;

},{"buffer":"bCaf4","./create_buffer":"2s2Ds","./define_crc":"i21yg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bCaf4":[function(require,module,exports,__globalThis) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require("9c62938f1dccc73c");
var ieee754 = require("aceacb6a4531a9d2");
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"9c62938f1dccc73c":"9I2RJ","aceacb6a4531a9d2":"geXY6"}],"9I2RJ":[function(require,module,exports,__globalThis) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}

},{}],"geXY6":[function(require,module,exports,__globalThis) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"2s2Ds":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buffer = require("buffer");
const createBuffer = (0, _buffer.Buffer).from && (0, _buffer.Buffer).alloc && (0, _buffer.Buffer).allocUnsafe && (0, _buffer.Buffer).allocUnsafeSlow ? (0, _buffer.Buffer).from : (val)=>new (0, _buffer.Buffer)(val);
exports.default = createBuffer;

},{"buffer":"bCaf4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"i21yg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(model, calc) {
        const fn = (buf, previous)=>calc(buf, previous) >>> 0;
        fn.signed = calc;
        fn.unsigned = fn;
        fn.model = model;
        return fn;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6NhhK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buffer = require("buffer");
var _createBuffer = require("./create_buffer");
var _createBufferDefault = parcelHelpers.interopDefault(_createBuffer);
var _defineCrc = require("./define_crc");
var _defineCrcDefault = parcelHelpers.interopDefault(_defineCrc);
// Generated by `./pycrc.py --algorithm=table-driven --model=crc-8 --generate=c`
// prettier-ignore
let TABLE = [
    0x00,
    0x07,
    0x0e,
    0x09,
    0x1c,
    0x1b,
    0x12,
    0x15,
    0x38,
    0x3f,
    0x36,
    0x31,
    0x24,
    0x23,
    0x2a,
    0x2d,
    0x70,
    0x77,
    0x7e,
    0x79,
    0x6c,
    0x6b,
    0x62,
    0x65,
    0x48,
    0x4f,
    0x46,
    0x41,
    0x54,
    0x53,
    0x5a,
    0x5d,
    0xe0,
    0xe7,
    0xee,
    0xe9,
    0xfc,
    0xfb,
    0xf2,
    0xf5,
    0xd8,
    0xdf,
    0xd6,
    0xd1,
    0xc4,
    0xc3,
    0xca,
    0xcd,
    0x90,
    0x97,
    0x9e,
    0x99,
    0x8c,
    0x8b,
    0x82,
    0x85,
    0xa8,
    0xaf,
    0xa6,
    0xa1,
    0xb4,
    0xb3,
    0xba,
    0xbd,
    0xc7,
    0xc0,
    0xc9,
    0xce,
    0xdb,
    0xdc,
    0xd5,
    0xd2,
    0xff,
    0xf8,
    0xf1,
    0xf6,
    0xe3,
    0xe4,
    0xed,
    0xea,
    0xb7,
    0xb0,
    0xb9,
    0xbe,
    0xab,
    0xac,
    0xa5,
    0xa2,
    0x8f,
    0x88,
    0x81,
    0x86,
    0x93,
    0x94,
    0x9d,
    0x9a,
    0x27,
    0x20,
    0x29,
    0x2e,
    0x3b,
    0x3c,
    0x35,
    0x32,
    0x1f,
    0x18,
    0x11,
    0x16,
    0x03,
    0x04,
    0x0d,
    0x0a,
    0x57,
    0x50,
    0x59,
    0x5e,
    0x4b,
    0x4c,
    0x45,
    0x42,
    0x6f,
    0x68,
    0x61,
    0x66,
    0x73,
    0x74,
    0x7d,
    0x7a,
    0x89,
    0x8e,
    0x87,
    0x80,
    0x95,
    0x92,
    0x9b,
    0x9c,
    0xb1,
    0xb6,
    0xbf,
    0xb8,
    0xad,
    0xaa,
    0xa3,
    0xa4,
    0xf9,
    0xfe,
    0xf7,
    0xf0,
    0xe5,
    0xe2,
    0xeb,
    0xec,
    0xc1,
    0xc6,
    0xcf,
    0xc8,
    0xdd,
    0xda,
    0xd3,
    0xd4,
    0x69,
    0x6e,
    0x67,
    0x60,
    0x75,
    0x72,
    0x7b,
    0x7c,
    0x51,
    0x56,
    0x5f,
    0x58,
    0x4d,
    0x4a,
    0x43,
    0x44,
    0x19,
    0x1e,
    0x17,
    0x10,
    0x05,
    0x02,
    0x0b,
    0x0c,
    0x21,
    0x26,
    0x2f,
    0x28,
    0x3d,
    0x3a,
    0x33,
    0x34,
    0x4e,
    0x49,
    0x40,
    0x47,
    0x52,
    0x55,
    0x5c,
    0x5b,
    0x76,
    0x71,
    0x78,
    0x7f,
    0x6a,
    0x6d,
    0x64,
    0x63,
    0x3e,
    0x39,
    0x30,
    0x37,
    0x22,
    0x25,
    0x2c,
    0x2b,
    0x06,
    0x01,
    0x08,
    0x0f,
    0x1a,
    0x1d,
    0x14,
    0x13,
    0xae,
    0xa9,
    0xa0,
    0xa7,
    0xb2,
    0xb5,
    0xbc,
    0xbb,
    0x96,
    0x91,
    0x98,
    0x9f,
    0x8a,
    0x8d,
    0x84,
    0x83,
    0xde,
    0xd9,
    0xd0,
    0xd7,
    0xc2,
    0xc5,
    0xcc,
    0xcb,
    0xe6,
    0xe1,
    0xe8,
    0xef,
    0xfa,
    0xfd,
    0xf4,
    0xf3
];
if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);
const crc8 = (0, _defineCrcDefault.default)('crc-8', function(buf, previous) {
    if (!(0, _buffer.Buffer).isBuffer(buf)) buf = (0, _createBufferDefault.default)(buf);
    let crc = ~~previous;
    for(let index = 0; index < buf.length; index++){
        const byte = buf[index];
        crc = TABLE[(crc ^ byte) & 0xff] & 0xff;
    }
    return crc;
});
exports.default = crc8;

},{"buffer":"bCaf4","./create_buffer":"2s2Ds","./define_crc":"i21yg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gm3g5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buffer = require("buffer");
var _createBuffer = require("./create_buffer");
var _createBufferDefault = parcelHelpers.interopDefault(_createBuffer);
var _defineCrc = require("./define_crc");
var _defineCrcDefault = parcelHelpers.interopDefault(_defineCrc);
// Generated by `./pycrc.py --algorithm=table-driven --model=dallas-1-wire --generate=c`
// prettier-ignore
let TABLE = [
    0x00,
    0x5e,
    0xbc,
    0xe2,
    0x61,
    0x3f,
    0xdd,
    0x83,
    0xc2,
    0x9c,
    0x7e,
    0x20,
    0xa3,
    0xfd,
    0x1f,
    0x41,
    0x9d,
    0xc3,
    0x21,
    0x7f,
    0xfc,
    0xa2,
    0x40,
    0x1e,
    0x5f,
    0x01,
    0xe3,
    0xbd,
    0x3e,
    0x60,
    0x82,
    0xdc,
    0x23,
    0x7d,
    0x9f,
    0xc1,
    0x42,
    0x1c,
    0xfe,
    0xa0,
    0xe1,
    0xbf,
    0x5d,
    0x03,
    0x80,
    0xde,
    0x3c,
    0x62,
    0xbe,
    0xe0,
    0x02,
    0x5c,
    0xdf,
    0x81,
    0x63,
    0x3d,
    0x7c,
    0x22,
    0xc0,
    0x9e,
    0x1d,
    0x43,
    0xa1,
    0xff,
    0x46,
    0x18,
    0xfa,
    0xa4,
    0x27,
    0x79,
    0x9b,
    0xc5,
    0x84,
    0xda,
    0x38,
    0x66,
    0xe5,
    0xbb,
    0x59,
    0x07,
    0xdb,
    0x85,
    0x67,
    0x39,
    0xba,
    0xe4,
    0x06,
    0x58,
    0x19,
    0x47,
    0xa5,
    0xfb,
    0x78,
    0x26,
    0xc4,
    0x9a,
    0x65,
    0x3b,
    0xd9,
    0x87,
    0x04,
    0x5a,
    0xb8,
    0xe6,
    0xa7,
    0xf9,
    0x1b,
    0x45,
    0xc6,
    0x98,
    0x7a,
    0x24,
    0xf8,
    0xa6,
    0x44,
    0x1a,
    0x99,
    0xc7,
    0x25,
    0x7b,
    0x3a,
    0x64,
    0x86,
    0xd8,
    0x5b,
    0x05,
    0xe7,
    0xb9,
    0x8c,
    0xd2,
    0x30,
    0x6e,
    0xed,
    0xb3,
    0x51,
    0x0f,
    0x4e,
    0x10,
    0xf2,
    0xac,
    0x2f,
    0x71,
    0x93,
    0xcd,
    0x11,
    0x4f,
    0xad,
    0xf3,
    0x70,
    0x2e,
    0xcc,
    0x92,
    0xd3,
    0x8d,
    0x6f,
    0x31,
    0xb2,
    0xec,
    0x0e,
    0x50,
    0xaf,
    0xf1,
    0x13,
    0x4d,
    0xce,
    0x90,
    0x72,
    0x2c,
    0x6d,
    0x33,
    0xd1,
    0x8f,
    0x0c,
    0x52,
    0xb0,
    0xee,
    0x32,
    0x6c,
    0x8e,
    0xd0,
    0x53,
    0x0d,
    0xef,
    0xb1,
    0xf0,
    0xae,
    0x4c,
    0x12,
    0x91,
    0xcf,
    0x2d,
    0x73,
    0xca,
    0x94,
    0x76,
    0x28,
    0xab,
    0xf5,
    0x17,
    0x49,
    0x08,
    0x56,
    0xb4,
    0xea,
    0x69,
    0x37,
    0xd5,
    0x8b,
    0x57,
    0x09,
    0xeb,
    0xb5,
    0x36,
    0x68,
    0x8a,
    0xd4,
    0x95,
    0xcb,
    0x29,
    0x77,
    0xf4,
    0xaa,
    0x48,
    0x16,
    0xe9,
    0xb7,
    0x55,
    0x0b,
    0x88,
    0xd6,
    0x34,
    0x6a,
    0x2b,
    0x75,
    0x97,
    0xc9,
    0x4a,
    0x14,
    0xf6,
    0xa8,
    0x74,
    0x2a,
    0xc8,
    0x96,
    0x15,
    0x4b,
    0xa9,
    0xf7,
    0xb6,
    0xe8,
    0x0a,
    0x54,
    0xd7,
    0x89,
    0x6b,
    0x35
];
if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);
const crc81wire = (0, _defineCrcDefault.default)('dallas-1-wire', function(buf, previous) {
    if (!(0, _buffer.Buffer).isBuffer(buf)) buf = (0, _createBufferDefault.default)(buf);
    let crc = ~~previous;
    for(let index = 0; index < buf.length; index++){
        const byte = buf[index];
        crc = TABLE[(crc ^ byte) & 0xff] & 0xff;
    }
    return crc;
});
exports.default = crc81wire;

},{"buffer":"bCaf4","./create_buffer":"2s2Ds","./define_crc":"i21yg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9VqJW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buffer = require("buffer");
var _createBuffer = require("./create_buffer");
var _createBufferDefault = parcelHelpers.interopDefault(_createBuffer);
var _defineCrc = require("./define_crc");
var _defineCrcDefault = parcelHelpers.interopDefault(_defineCrc);
// Generated by `./pycrc.py --algorithm=table-driven --model=crc-16 --generate=c`
// prettier-ignore
let TABLE = [
    0x0000,
    0xc0c1,
    0xc181,
    0x0140,
    0xc301,
    0x03c0,
    0x0280,
    0xc241,
    0xc601,
    0x06c0,
    0x0780,
    0xc741,
    0x0500,
    0xc5c1,
    0xc481,
    0x0440,
    0xcc01,
    0x0cc0,
    0x0d80,
    0xcd41,
    0x0f00,
    0xcfc1,
    0xce81,
    0x0e40,
    0x0a00,
    0xcac1,
    0xcb81,
    0x0b40,
    0xc901,
    0x09c0,
    0x0880,
    0xc841,
    0xd801,
    0x18c0,
    0x1980,
    0xd941,
    0x1b00,
    0xdbc1,
    0xda81,
    0x1a40,
    0x1e00,
    0xdec1,
    0xdf81,
    0x1f40,
    0xdd01,
    0x1dc0,
    0x1c80,
    0xdc41,
    0x1400,
    0xd4c1,
    0xd581,
    0x1540,
    0xd701,
    0x17c0,
    0x1680,
    0xd641,
    0xd201,
    0x12c0,
    0x1380,
    0xd341,
    0x1100,
    0xd1c1,
    0xd081,
    0x1040,
    0xf001,
    0x30c0,
    0x3180,
    0xf141,
    0x3300,
    0xf3c1,
    0xf281,
    0x3240,
    0x3600,
    0xf6c1,
    0xf781,
    0x3740,
    0xf501,
    0x35c0,
    0x3480,
    0xf441,
    0x3c00,
    0xfcc1,
    0xfd81,
    0x3d40,
    0xff01,
    0x3fc0,
    0x3e80,
    0xfe41,
    0xfa01,
    0x3ac0,
    0x3b80,
    0xfb41,
    0x3900,
    0xf9c1,
    0xf881,
    0x3840,
    0x2800,
    0xe8c1,
    0xe981,
    0x2940,
    0xeb01,
    0x2bc0,
    0x2a80,
    0xea41,
    0xee01,
    0x2ec0,
    0x2f80,
    0xef41,
    0x2d00,
    0xedc1,
    0xec81,
    0x2c40,
    0xe401,
    0x24c0,
    0x2580,
    0xe541,
    0x2700,
    0xe7c1,
    0xe681,
    0x2640,
    0x2200,
    0xe2c1,
    0xe381,
    0x2340,
    0xe101,
    0x21c0,
    0x2080,
    0xe041,
    0xa001,
    0x60c0,
    0x6180,
    0xa141,
    0x6300,
    0xa3c1,
    0xa281,
    0x6240,
    0x6600,
    0xa6c1,
    0xa781,
    0x6740,
    0xa501,
    0x65c0,
    0x6480,
    0xa441,
    0x6c00,
    0xacc1,
    0xad81,
    0x6d40,
    0xaf01,
    0x6fc0,
    0x6e80,
    0xae41,
    0xaa01,
    0x6ac0,
    0x6b80,
    0xab41,
    0x6900,
    0xa9c1,
    0xa881,
    0x6840,
    0x7800,
    0xb8c1,
    0xb981,
    0x7940,
    0xbb01,
    0x7bc0,
    0x7a80,
    0xba41,
    0xbe01,
    0x7ec0,
    0x7f80,
    0xbf41,
    0x7d00,
    0xbdc1,
    0xbc81,
    0x7c40,
    0xb401,
    0x74c0,
    0x7580,
    0xb541,
    0x7700,
    0xb7c1,
    0xb681,
    0x7640,
    0x7200,
    0xb2c1,
    0xb381,
    0x7340,
    0xb101,
    0x71c0,
    0x7080,
    0xb041,
    0x5000,
    0x90c1,
    0x9181,
    0x5140,
    0x9301,
    0x53c0,
    0x5280,
    0x9241,
    0x9601,
    0x56c0,
    0x5780,
    0x9741,
    0x5500,
    0x95c1,
    0x9481,
    0x5440,
    0x9c01,
    0x5cc0,
    0x5d80,
    0x9d41,
    0x5f00,
    0x9fc1,
    0x9e81,
    0x5e40,
    0x5a00,
    0x9ac1,
    0x9b81,
    0x5b40,
    0x9901,
    0x59c0,
    0x5880,
    0x9841,
    0x8801,
    0x48c0,
    0x4980,
    0x8941,
    0x4b00,
    0x8bc1,
    0x8a81,
    0x4a40,
    0x4e00,
    0x8ec1,
    0x8f81,
    0x4f40,
    0x8d01,
    0x4dc0,
    0x4c80,
    0x8c41,
    0x4400,
    0x84c1,
    0x8581,
    0x4540,
    0x8701,
    0x47c0,
    0x4680,
    0x8641,
    0x8201,
    0x42c0,
    0x4380,
    0x8341,
    0x4100,
    0x81c1,
    0x8081,
    0x4040
];
if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);
const crc16 = (0, _defineCrcDefault.default)('crc-16', function(buf, previous) {
    if (!(0, _buffer.Buffer).isBuffer(buf)) buf = (0, _createBufferDefault.default)(buf);
    let crc = ~~previous;
    for(let index = 0; index < buf.length; index++){
        const byte = buf[index];
        crc = (TABLE[(crc ^ byte) & 0xff] ^ crc >> 8) & 0xffff;
    }
    return crc;
});
exports.default = crc16;

},{"buffer":"bCaf4","./create_buffer":"2s2Ds","./define_crc":"i21yg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8yVni":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buffer = require("buffer");
var _createBuffer = require("./create_buffer");
var _createBufferDefault = parcelHelpers.interopDefault(_createBuffer);
var _defineCrc = require("./define_crc");
var _defineCrcDefault = parcelHelpers.interopDefault(_defineCrc);
// Generated by `./pycrc.py --algorithm=table-driven --model=ccitt --generate=c`
// prettier-ignore
let TABLE = [
    0x0000,
    0x1021,
    0x2042,
    0x3063,
    0x4084,
    0x50a5,
    0x60c6,
    0x70e7,
    0x8108,
    0x9129,
    0xa14a,
    0xb16b,
    0xc18c,
    0xd1ad,
    0xe1ce,
    0xf1ef,
    0x1231,
    0x0210,
    0x3273,
    0x2252,
    0x52b5,
    0x4294,
    0x72f7,
    0x62d6,
    0x9339,
    0x8318,
    0xb37b,
    0xa35a,
    0xd3bd,
    0xc39c,
    0xf3ff,
    0xe3de,
    0x2462,
    0x3443,
    0x0420,
    0x1401,
    0x64e6,
    0x74c7,
    0x44a4,
    0x5485,
    0xa56a,
    0xb54b,
    0x8528,
    0x9509,
    0xe5ee,
    0xf5cf,
    0xc5ac,
    0xd58d,
    0x3653,
    0x2672,
    0x1611,
    0x0630,
    0x76d7,
    0x66f6,
    0x5695,
    0x46b4,
    0xb75b,
    0xa77a,
    0x9719,
    0x8738,
    0xf7df,
    0xe7fe,
    0xd79d,
    0xc7bc,
    0x48c4,
    0x58e5,
    0x6886,
    0x78a7,
    0x0840,
    0x1861,
    0x2802,
    0x3823,
    0xc9cc,
    0xd9ed,
    0xe98e,
    0xf9af,
    0x8948,
    0x9969,
    0xa90a,
    0xb92b,
    0x5af5,
    0x4ad4,
    0x7ab7,
    0x6a96,
    0x1a71,
    0x0a50,
    0x3a33,
    0x2a12,
    0xdbfd,
    0xcbdc,
    0xfbbf,
    0xeb9e,
    0x9b79,
    0x8b58,
    0xbb3b,
    0xab1a,
    0x6ca6,
    0x7c87,
    0x4ce4,
    0x5cc5,
    0x2c22,
    0x3c03,
    0x0c60,
    0x1c41,
    0xedae,
    0xfd8f,
    0xcdec,
    0xddcd,
    0xad2a,
    0xbd0b,
    0x8d68,
    0x9d49,
    0x7e97,
    0x6eb6,
    0x5ed5,
    0x4ef4,
    0x3e13,
    0x2e32,
    0x1e51,
    0x0e70,
    0xff9f,
    0xefbe,
    0xdfdd,
    0xcffc,
    0xbf1b,
    0xaf3a,
    0x9f59,
    0x8f78,
    0x9188,
    0x81a9,
    0xb1ca,
    0xa1eb,
    0xd10c,
    0xc12d,
    0xf14e,
    0xe16f,
    0x1080,
    0x00a1,
    0x30c2,
    0x20e3,
    0x5004,
    0x4025,
    0x7046,
    0x6067,
    0x83b9,
    0x9398,
    0xa3fb,
    0xb3da,
    0xc33d,
    0xd31c,
    0xe37f,
    0xf35e,
    0x02b1,
    0x1290,
    0x22f3,
    0x32d2,
    0x4235,
    0x5214,
    0x6277,
    0x7256,
    0xb5ea,
    0xa5cb,
    0x95a8,
    0x8589,
    0xf56e,
    0xe54f,
    0xd52c,
    0xc50d,
    0x34e2,
    0x24c3,
    0x14a0,
    0x0481,
    0x7466,
    0x6447,
    0x5424,
    0x4405,
    0xa7db,
    0xb7fa,
    0x8799,
    0x97b8,
    0xe75f,
    0xf77e,
    0xc71d,
    0xd73c,
    0x26d3,
    0x36f2,
    0x0691,
    0x16b0,
    0x6657,
    0x7676,
    0x4615,
    0x5634,
    0xd94c,
    0xc96d,
    0xf90e,
    0xe92f,
    0x99c8,
    0x89e9,
    0xb98a,
    0xa9ab,
    0x5844,
    0x4865,
    0x7806,
    0x6827,
    0x18c0,
    0x08e1,
    0x3882,
    0x28a3,
    0xcb7d,
    0xdb5c,
    0xeb3f,
    0xfb1e,
    0x8bf9,
    0x9bd8,
    0xabbb,
    0xbb9a,
    0x4a75,
    0x5a54,
    0x6a37,
    0x7a16,
    0x0af1,
    0x1ad0,
    0x2ab3,
    0x3a92,
    0xfd2e,
    0xed0f,
    0xdd6c,
    0xcd4d,
    0xbdaa,
    0xad8b,
    0x9de8,
    0x8dc9,
    0x7c26,
    0x6c07,
    0x5c64,
    0x4c45,
    0x3ca2,
    0x2c83,
    0x1ce0,
    0x0cc1,
    0xef1f,
    0xff3e,
    0xcf5d,
    0xdf7c,
    0xaf9b,
    0xbfba,
    0x8fd9,
    0x9ff8,
    0x6e17,
    0x7e36,
    0x4e55,
    0x5e74,
    0x2e93,
    0x3eb2,
    0x0ed1,
    0x1ef0
];
if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);
const crc16ccitt = (0, _defineCrcDefault.default)('ccitt', function(buf, previous) {
    if (!(0, _buffer.Buffer).isBuffer(buf)) buf = (0, _createBufferDefault.default)(buf);
    let crc = typeof previous !== 'undefined' ? ~~previous : 0xffff;
    for(let index = 0; index < buf.length; index++){
        const byte = buf[index];
        crc = (TABLE[(crc >> 8 ^ byte) & 0xff] ^ crc << 8) & 0xffff;
    }
    return crc;
});
exports.default = crc16ccitt;

},{"buffer":"bCaf4","./create_buffer":"2s2Ds","./define_crc":"i21yg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fs73Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buffer = require("buffer");
var _createBuffer = require("./create_buffer");
var _createBufferDefault = parcelHelpers.interopDefault(_createBuffer);
var _defineCrc = require("./define_crc");
var _defineCrcDefault = parcelHelpers.interopDefault(_defineCrc);
// Generated by `./pycrc.py --algorithm=table-driven --model=crc-16-modbus --generate=c`
// prettier-ignore
let TABLE = [
    0x0000,
    0xc0c1,
    0xc181,
    0x0140,
    0xc301,
    0x03c0,
    0x0280,
    0xc241,
    0xc601,
    0x06c0,
    0x0780,
    0xc741,
    0x0500,
    0xc5c1,
    0xc481,
    0x0440,
    0xcc01,
    0x0cc0,
    0x0d80,
    0xcd41,
    0x0f00,
    0xcfc1,
    0xce81,
    0x0e40,
    0x0a00,
    0xcac1,
    0xcb81,
    0x0b40,
    0xc901,
    0x09c0,
    0x0880,
    0xc841,
    0xd801,
    0x18c0,
    0x1980,
    0xd941,
    0x1b00,
    0xdbc1,
    0xda81,
    0x1a40,
    0x1e00,
    0xdec1,
    0xdf81,
    0x1f40,
    0xdd01,
    0x1dc0,
    0x1c80,
    0xdc41,
    0x1400,
    0xd4c1,
    0xd581,
    0x1540,
    0xd701,
    0x17c0,
    0x1680,
    0xd641,
    0xd201,
    0x12c0,
    0x1380,
    0xd341,
    0x1100,
    0xd1c1,
    0xd081,
    0x1040,
    0xf001,
    0x30c0,
    0x3180,
    0xf141,
    0x3300,
    0xf3c1,
    0xf281,
    0x3240,
    0x3600,
    0xf6c1,
    0xf781,
    0x3740,
    0xf501,
    0x35c0,
    0x3480,
    0xf441,
    0x3c00,
    0xfcc1,
    0xfd81,
    0x3d40,
    0xff01,
    0x3fc0,
    0x3e80,
    0xfe41,
    0xfa01,
    0x3ac0,
    0x3b80,
    0xfb41,
    0x3900,
    0xf9c1,
    0xf881,
    0x3840,
    0x2800,
    0xe8c1,
    0xe981,
    0x2940,
    0xeb01,
    0x2bc0,
    0x2a80,
    0xea41,
    0xee01,
    0x2ec0,
    0x2f80,
    0xef41,
    0x2d00,
    0xedc1,
    0xec81,
    0x2c40,
    0xe401,
    0x24c0,
    0x2580,
    0xe541,
    0x2700,
    0xe7c1,
    0xe681,
    0x2640,
    0x2200,
    0xe2c1,
    0xe381,
    0x2340,
    0xe101,
    0x21c0,
    0x2080,
    0xe041,
    0xa001,
    0x60c0,
    0x6180,
    0xa141,
    0x6300,
    0xa3c1,
    0xa281,
    0x6240,
    0x6600,
    0xa6c1,
    0xa781,
    0x6740,
    0xa501,
    0x65c0,
    0x6480,
    0xa441,
    0x6c00,
    0xacc1,
    0xad81,
    0x6d40,
    0xaf01,
    0x6fc0,
    0x6e80,
    0xae41,
    0xaa01,
    0x6ac0,
    0x6b80,
    0xab41,
    0x6900,
    0xa9c1,
    0xa881,
    0x6840,
    0x7800,
    0xb8c1,
    0xb981,
    0x7940,
    0xbb01,
    0x7bc0,
    0x7a80,
    0xba41,
    0xbe01,
    0x7ec0,
    0x7f80,
    0xbf41,
    0x7d00,
    0xbdc1,
    0xbc81,
    0x7c40,
    0xb401,
    0x74c0,
    0x7580,
    0xb541,
    0x7700,
    0xb7c1,
    0xb681,
    0x7640,
    0x7200,
    0xb2c1,
    0xb381,
    0x7340,
    0xb101,
    0x71c0,
    0x7080,
    0xb041,
    0x5000,
    0x90c1,
    0x9181,
    0x5140,
    0x9301,
    0x53c0,
    0x5280,
    0x9241,
    0x9601,
    0x56c0,
    0x5780,
    0x9741,
    0x5500,
    0x95c1,
    0x9481,
    0x5440,
    0x9c01,
    0x5cc0,
    0x5d80,
    0x9d41,
    0x5f00,
    0x9fc1,
    0x9e81,
    0x5e40,
    0x5a00,
    0x9ac1,
    0x9b81,
    0x5b40,
    0x9901,
    0x59c0,
    0x5880,
    0x9841,
    0x8801,
    0x48c0,
    0x4980,
    0x8941,
    0x4b00,
    0x8bc1,
    0x8a81,
    0x4a40,
    0x4e00,
    0x8ec1,
    0x8f81,
    0x4f40,
    0x8d01,
    0x4dc0,
    0x4c80,
    0x8c41,
    0x4400,
    0x84c1,
    0x8581,
    0x4540,
    0x8701,
    0x47c0,
    0x4680,
    0x8641,
    0x8201,
    0x42c0,
    0x4380,
    0x8341,
    0x4100,
    0x81c1,
    0x8081,
    0x4040
];
if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);
const crc16modbus = (0, _defineCrcDefault.default)('crc-16-modbus', function(buf, previous) {
    if (!(0, _buffer.Buffer).isBuffer(buf)) buf = (0, _createBufferDefault.default)(buf);
    let crc = typeof previous !== 'undefined' ? ~~previous : 0xffff;
    for(let index = 0; index < buf.length; index++){
        const byte = buf[index];
        crc = (TABLE[(crc ^ byte) & 0xff] ^ crc >> 8) & 0xffff;
    }
    return crc;
});
exports.default = crc16modbus;

},{"buffer":"bCaf4","./create_buffer":"2s2Ds","./define_crc":"i21yg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"luDU1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buffer = require("buffer");
var _createBuffer = require("./create_buffer");
var _createBufferDefault = parcelHelpers.interopDefault(_createBuffer);
var _defineCrc = require("./define_crc");
var _defineCrcDefault = parcelHelpers.interopDefault(_defineCrc);
const crc16xmodem = (0, _defineCrcDefault.default)('xmodem', function(buf, previous) {
    if (!(0, _buffer.Buffer).isBuffer(buf)) buf = (0, _createBufferDefault.default)(buf);
    let crc = typeof previous !== 'undefined' ? ~~previous : 0x0;
    for(let index = 0; index < buf.length; index++){
        const byte = buf[index];
        let code = crc >>> 8 & 0xff;
        code ^= byte & 0xff;
        code ^= code >>> 4;
        crc = crc << 8 & 0xffff;
        crc ^= code;
        code = code << 5 & 0xffff;
        crc ^= code;
        code = code << 7 & 0xffff;
        crc ^= code;
    }
    return crc;
});
exports.default = crc16xmodem;

},{"buffer":"bCaf4","./create_buffer":"2s2Ds","./define_crc":"i21yg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"536iz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buffer = require("buffer");
var _createBuffer = require("./create_buffer");
var _createBufferDefault = parcelHelpers.interopDefault(_createBuffer);
var _defineCrc = require("./define_crc");
var _defineCrcDefault = parcelHelpers.interopDefault(_defineCrc);
// Generated by `./pycrc.py --algorithm=table-driven --model=kermit --generate=c`
// prettier-ignore
let TABLE = [
    0x0000,
    0x1189,
    0x2312,
    0x329b,
    0x4624,
    0x57ad,
    0x6536,
    0x74bf,
    0x8c48,
    0x9dc1,
    0xaf5a,
    0xbed3,
    0xca6c,
    0xdbe5,
    0xe97e,
    0xf8f7,
    0x1081,
    0x0108,
    0x3393,
    0x221a,
    0x56a5,
    0x472c,
    0x75b7,
    0x643e,
    0x9cc9,
    0x8d40,
    0xbfdb,
    0xae52,
    0xdaed,
    0xcb64,
    0xf9ff,
    0xe876,
    0x2102,
    0x308b,
    0x0210,
    0x1399,
    0x6726,
    0x76af,
    0x4434,
    0x55bd,
    0xad4a,
    0xbcc3,
    0x8e58,
    0x9fd1,
    0xeb6e,
    0xfae7,
    0xc87c,
    0xd9f5,
    0x3183,
    0x200a,
    0x1291,
    0x0318,
    0x77a7,
    0x662e,
    0x54b5,
    0x453c,
    0xbdcb,
    0xac42,
    0x9ed9,
    0x8f50,
    0xfbef,
    0xea66,
    0xd8fd,
    0xc974,
    0x4204,
    0x538d,
    0x6116,
    0x709f,
    0x0420,
    0x15a9,
    0x2732,
    0x36bb,
    0xce4c,
    0xdfc5,
    0xed5e,
    0xfcd7,
    0x8868,
    0x99e1,
    0xab7a,
    0xbaf3,
    0x5285,
    0x430c,
    0x7197,
    0x601e,
    0x14a1,
    0x0528,
    0x37b3,
    0x263a,
    0xdecd,
    0xcf44,
    0xfddf,
    0xec56,
    0x98e9,
    0x8960,
    0xbbfb,
    0xaa72,
    0x6306,
    0x728f,
    0x4014,
    0x519d,
    0x2522,
    0x34ab,
    0x0630,
    0x17b9,
    0xef4e,
    0xfec7,
    0xcc5c,
    0xddd5,
    0xa96a,
    0xb8e3,
    0x8a78,
    0x9bf1,
    0x7387,
    0x620e,
    0x5095,
    0x411c,
    0x35a3,
    0x242a,
    0x16b1,
    0x0738,
    0xffcf,
    0xee46,
    0xdcdd,
    0xcd54,
    0xb9eb,
    0xa862,
    0x9af9,
    0x8b70,
    0x8408,
    0x9581,
    0xa71a,
    0xb693,
    0xc22c,
    0xd3a5,
    0xe13e,
    0xf0b7,
    0x0840,
    0x19c9,
    0x2b52,
    0x3adb,
    0x4e64,
    0x5fed,
    0x6d76,
    0x7cff,
    0x9489,
    0x8500,
    0xb79b,
    0xa612,
    0xd2ad,
    0xc324,
    0xf1bf,
    0xe036,
    0x18c1,
    0x0948,
    0x3bd3,
    0x2a5a,
    0x5ee5,
    0x4f6c,
    0x7df7,
    0x6c7e,
    0xa50a,
    0xb483,
    0x8618,
    0x9791,
    0xe32e,
    0xf2a7,
    0xc03c,
    0xd1b5,
    0x2942,
    0x38cb,
    0x0a50,
    0x1bd9,
    0x6f66,
    0x7eef,
    0x4c74,
    0x5dfd,
    0xb58b,
    0xa402,
    0x9699,
    0x8710,
    0xf3af,
    0xe226,
    0xd0bd,
    0xc134,
    0x39c3,
    0x284a,
    0x1ad1,
    0x0b58,
    0x7fe7,
    0x6e6e,
    0x5cf5,
    0x4d7c,
    0xc60c,
    0xd785,
    0xe51e,
    0xf497,
    0x8028,
    0x91a1,
    0xa33a,
    0xb2b3,
    0x4a44,
    0x5bcd,
    0x6956,
    0x78df,
    0x0c60,
    0x1de9,
    0x2f72,
    0x3efb,
    0xd68d,
    0xc704,
    0xf59f,
    0xe416,
    0x90a9,
    0x8120,
    0xb3bb,
    0xa232,
    0x5ac5,
    0x4b4c,
    0x79d7,
    0x685e,
    0x1ce1,
    0x0d68,
    0x3ff3,
    0x2e7a,
    0xe70e,
    0xf687,
    0xc41c,
    0xd595,
    0xa12a,
    0xb0a3,
    0x8238,
    0x93b1,
    0x6b46,
    0x7acf,
    0x4854,
    0x59dd,
    0x2d62,
    0x3ceb,
    0x0e70,
    0x1ff9,
    0xf78f,
    0xe606,
    0xd49d,
    0xc514,
    0xb1ab,
    0xa022,
    0x92b9,
    0x8330,
    0x7bc7,
    0x6a4e,
    0x58d5,
    0x495c,
    0x3de3,
    0x2c6a,
    0x1ef1,
    0x0f78
];
if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);
const crc16kermit = (0, _defineCrcDefault.default)('kermit', function(buf, previous) {
    if (!(0, _buffer.Buffer).isBuffer(buf)) buf = (0, _createBufferDefault.default)(buf);
    let crc = typeof previous !== 'undefined' ? ~~previous : 0x0000;
    for(let index = 0; index < buf.length; index++){
        const byte = buf[index];
        crc = (TABLE[(crc ^ byte) & 0xff] ^ crc >> 8) & 0xffff;
    }
    return crc;
});
exports.default = crc16kermit;

},{"buffer":"bCaf4","./create_buffer":"2s2Ds","./define_crc":"i21yg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d0Md4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buffer = require("buffer");
var _createBuffer = require("./create_buffer");
var _createBufferDefault = parcelHelpers.interopDefault(_createBuffer);
var _defineCrc = require("./define_crc");
var _defineCrcDefault = parcelHelpers.interopDefault(_defineCrc);
// Generated by `./pycrc.py --algorithm=table-drive --model=crc-24 --generate=c`
// prettier-ignore
let TABLE = [
    0x000000,
    0x864cfb,
    0x8ad50d,
    0x0c99f6,
    0x93e6e1,
    0x15aa1a,
    0x1933ec,
    0x9f7f17,
    0xa18139,
    0x27cdc2,
    0x2b5434,
    0xad18cf,
    0x3267d8,
    0xb42b23,
    0xb8b2d5,
    0x3efe2e,
    0xc54e89,
    0x430272,
    0x4f9b84,
    0xc9d77f,
    0x56a868,
    0xd0e493,
    0xdc7d65,
    0x5a319e,
    0x64cfb0,
    0xe2834b,
    0xee1abd,
    0x685646,
    0xf72951,
    0x7165aa,
    0x7dfc5c,
    0xfbb0a7,
    0x0cd1e9,
    0x8a9d12,
    0x8604e4,
    0x00481f,
    0x9f3708,
    0x197bf3,
    0x15e205,
    0x93aefe,
    0xad50d0,
    0x2b1c2b,
    0x2785dd,
    0xa1c926,
    0x3eb631,
    0xb8faca,
    0xb4633c,
    0x322fc7,
    0xc99f60,
    0x4fd39b,
    0x434a6d,
    0xc50696,
    0x5a7981,
    0xdc357a,
    0xd0ac8c,
    0x56e077,
    0x681e59,
    0xee52a2,
    0xe2cb54,
    0x6487af,
    0xfbf8b8,
    0x7db443,
    0x712db5,
    0xf7614e,
    0x19a3d2,
    0x9fef29,
    0x9376df,
    0x153a24,
    0x8a4533,
    0x0c09c8,
    0x00903e,
    0x86dcc5,
    0xb822eb,
    0x3e6e10,
    0x32f7e6,
    0xb4bb1d,
    0x2bc40a,
    0xad88f1,
    0xa11107,
    0x275dfc,
    0xdced5b,
    0x5aa1a0,
    0x563856,
    0xd074ad,
    0x4f0bba,
    0xc94741,
    0xc5deb7,
    0x43924c,
    0x7d6c62,
    0xfb2099,
    0xf7b96f,
    0x71f594,
    0xee8a83,
    0x68c678,
    0x645f8e,
    0xe21375,
    0x15723b,
    0x933ec0,
    0x9fa736,
    0x19ebcd,
    0x8694da,
    0x00d821,
    0x0c41d7,
    0x8a0d2c,
    0xb4f302,
    0x32bff9,
    0x3e260f,
    0xb86af4,
    0x2715e3,
    0xa15918,
    0xadc0ee,
    0x2b8c15,
    0xd03cb2,
    0x567049,
    0x5ae9bf,
    0xdca544,
    0x43da53,
    0xc596a8,
    0xc90f5e,
    0x4f43a5,
    0x71bd8b,
    0xf7f170,
    0xfb6886,
    0x7d247d,
    0xe25b6a,
    0x641791,
    0x688e67,
    0xeec29c,
    0x3347a4,
    0xb50b5f,
    0xb992a9,
    0x3fde52,
    0xa0a145,
    0x26edbe,
    0x2a7448,
    0xac38b3,
    0x92c69d,
    0x148a66,
    0x181390,
    0x9e5f6b,
    0x01207c,
    0x876c87,
    0x8bf571,
    0x0db98a,
    0xf6092d,
    0x7045d6,
    0x7cdc20,
    0xfa90db,
    0x65efcc,
    0xe3a337,
    0xef3ac1,
    0x69763a,
    0x578814,
    0xd1c4ef,
    0xdd5d19,
    0x5b11e2,
    0xc46ef5,
    0x42220e,
    0x4ebbf8,
    0xc8f703,
    0x3f964d,
    0xb9dab6,
    0xb54340,
    0x330fbb,
    0xac70ac,
    0x2a3c57,
    0x26a5a1,
    0xa0e95a,
    0x9e1774,
    0x185b8f,
    0x14c279,
    0x928e82,
    0x0df195,
    0x8bbd6e,
    0x872498,
    0x016863,
    0xfad8c4,
    0x7c943f,
    0x700dc9,
    0xf64132,
    0x693e25,
    0xef72de,
    0xe3eb28,
    0x65a7d3,
    0x5b59fd,
    0xdd1506,
    0xd18cf0,
    0x57c00b,
    0xc8bf1c,
    0x4ef3e7,
    0x426a11,
    0xc426ea,
    0x2ae476,
    0xaca88d,
    0xa0317b,
    0x267d80,
    0xb90297,
    0x3f4e6c,
    0x33d79a,
    0xb59b61,
    0x8b654f,
    0x0d29b4,
    0x01b042,
    0x87fcb9,
    0x1883ae,
    0x9ecf55,
    0x9256a3,
    0x141a58,
    0xefaaff,
    0x69e604,
    0x657ff2,
    0xe33309,
    0x7c4c1e,
    0xfa00e5,
    0xf69913,
    0x70d5e8,
    0x4e2bc6,
    0xc8673d,
    0xc4fecb,
    0x42b230,
    0xddcd27,
    0x5b81dc,
    0x57182a,
    0xd154d1,
    0x26359f,
    0xa07964,
    0xace092,
    0x2aac69,
    0xb5d37e,
    0x339f85,
    0x3f0673,
    0xb94a88,
    0x87b4a6,
    0x01f85d,
    0x0d61ab,
    0x8b2d50,
    0x145247,
    0x921ebc,
    0x9e874a,
    0x18cbb1,
    0xe37b16,
    0x6537ed,
    0x69ae1b,
    0xefe2e0,
    0x709df7,
    0xf6d10c,
    0xfa48fa,
    0x7c0401,
    0x42fa2f,
    0xc4b6d4,
    0xc82f22,
    0x4e63d9,
    0xd11cce,
    0x575035,
    0x5bc9c3,
    0xdd8538
];
if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);
const crc24 = (0, _defineCrcDefault.default)('crc-24', function(buf, previous) {
    if (!(0, _buffer.Buffer).isBuffer(buf)) buf = (0, _createBufferDefault.default)(buf);
    let crc = typeof previous !== 'undefined' ? ~~previous : 0xb704ce;
    for(let index = 0; index < buf.length; index++){
        const byte = buf[index];
        crc = (TABLE[(crc >> 16 ^ byte) & 0xff] ^ crc << 8) & 0xffffff;
    }
    return crc;
});
exports.default = crc24;

},{"buffer":"bCaf4","./create_buffer":"2s2Ds","./define_crc":"i21yg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4B5Ta":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buffer = require("buffer");
var _createBuffer = require("./create_buffer");
var _createBufferDefault = parcelHelpers.interopDefault(_createBuffer);
var _defineCrc = require("./define_crc");
var _defineCrcDefault = parcelHelpers.interopDefault(_defineCrc);
// Generated by `./pycrc.py --algorithm=table-driven --model=crc-32 --generate=c`
// prettier-ignore
let TABLE = [
    0x00000000,
    0x77073096,
    0xee0e612c,
    0x990951ba,
    0x076dc419,
    0x706af48f,
    0xe963a535,
    0x9e6495a3,
    0x0edb8832,
    0x79dcb8a4,
    0xe0d5e91e,
    0x97d2d988,
    0x09b64c2b,
    0x7eb17cbd,
    0xe7b82d07,
    0x90bf1d91,
    0x1db71064,
    0x6ab020f2,
    0xf3b97148,
    0x84be41de,
    0x1adad47d,
    0x6ddde4eb,
    0xf4d4b551,
    0x83d385c7,
    0x136c9856,
    0x646ba8c0,
    0xfd62f97a,
    0x8a65c9ec,
    0x14015c4f,
    0x63066cd9,
    0xfa0f3d63,
    0x8d080df5,
    0x3b6e20c8,
    0x4c69105e,
    0xd56041e4,
    0xa2677172,
    0x3c03e4d1,
    0x4b04d447,
    0xd20d85fd,
    0xa50ab56b,
    0x35b5a8fa,
    0x42b2986c,
    0xdbbbc9d6,
    0xacbcf940,
    0x32d86ce3,
    0x45df5c75,
    0xdcd60dcf,
    0xabd13d59,
    0x26d930ac,
    0x51de003a,
    0xc8d75180,
    0xbfd06116,
    0x21b4f4b5,
    0x56b3c423,
    0xcfba9599,
    0xb8bda50f,
    0x2802b89e,
    0x5f058808,
    0xc60cd9b2,
    0xb10be924,
    0x2f6f7c87,
    0x58684c11,
    0xc1611dab,
    0xb6662d3d,
    0x76dc4190,
    0x01db7106,
    0x98d220bc,
    0xefd5102a,
    0x71b18589,
    0x06b6b51f,
    0x9fbfe4a5,
    0xe8b8d433,
    0x7807c9a2,
    0x0f00f934,
    0x9609a88e,
    0xe10e9818,
    0x7f6a0dbb,
    0x086d3d2d,
    0x91646c97,
    0xe6635c01,
    0x6b6b51f4,
    0x1c6c6162,
    0x856530d8,
    0xf262004e,
    0x6c0695ed,
    0x1b01a57b,
    0x8208f4c1,
    0xf50fc457,
    0x65b0d9c6,
    0x12b7e950,
    0x8bbeb8ea,
    0xfcb9887c,
    0x62dd1ddf,
    0x15da2d49,
    0x8cd37cf3,
    0xfbd44c65,
    0x4db26158,
    0x3ab551ce,
    0xa3bc0074,
    0xd4bb30e2,
    0x4adfa541,
    0x3dd895d7,
    0xa4d1c46d,
    0xd3d6f4fb,
    0x4369e96a,
    0x346ed9fc,
    0xad678846,
    0xda60b8d0,
    0x44042d73,
    0x33031de5,
    0xaa0a4c5f,
    0xdd0d7cc9,
    0x5005713c,
    0x270241aa,
    0xbe0b1010,
    0xc90c2086,
    0x5768b525,
    0x206f85b3,
    0xb966d409,
    0xce61e49f,
    0x5edef90e,
    0x29d9c998,
    0xb0d09822,
    0xc7d7a8b4,
    0x59b33d17,
    0x2eb40d81,
    0xb7bd5c3b,
    0xc0ba6cad,
    0xedb88320,
    0x9abfb3b6,
    0x03b6e20c,
    0x74b1d29a,
    0xead54739,
    0x9dd277af,
    0x04db2615,
    0x73dc1683,
    0xe3630b12,
    0x94643b84,
    0x0d6d6a3e,
    0x7a6a5aa8,
    0xe40ecf0b,
    0x9309ff9d,
    0x0a00ae27,
    0x7d079eb1,
    0xf00f9344,
    0x8708a3d2,
    0x1e01f268,
    0x6906c2fe,
    0xf762575d,
    0x806567cb,
    0x196c3671,
    0x6e6b06e7,
    0xfed41b76,
    0x89d32be0,
    0x10da7a5a,
    0x67dd4acc,
    0xf9b9df6f,
    0x8ebeeff9,
    0x17b7be43,
    0x60b08ed5,
    0xd6d6a3e8,
    0xa1d1937e,
    0x38d8c2c4,
    0x4fdff252,
    0xd1bb67f1,
    0xa6bc5767,
    0x3fb506dd,
    0x48b2364b,
    0xd80d2bda,
    0xaf0a1b4c,
    0x36034af6,
    0x41047a60,
    0xdf60efc3,
    0xa867df55,
    0x316e8eef,
    0x4669be79,
    0xcb61b38c,
    0xbc66831a,
    0x256fd2a0,
    0x5268e236,
    0xcc0c7795,
    0xbb0b4703,
    0x220216b9,
    0x5505262f,
    0xc5ba3bbe,
    0xb2bd0b28,
    0x2bb45a92,
    0x5cb36a04,
    0xc2d7ffa7,
    0xb5d0cf31,
    0x2cd99e8b,
    0x5bdeae1d,
    0x9b64c2b0,
    0xec63f226,
    0x756aa39c,
    0x026d930a,
    0x9c0906a9,
    0xeb0e363f,
    0x72076785,
    0x05005713,
    0x95bf4a82,
    0xe2b87a14,
    0x7bb12bae,
    0x0cb61b38,
    0x92d28e9b,
    0xe5d5be0d,
    0x7cdcefb7,
    0x0bdbdf21,
    0x86d3d2d4,
    0xf1d4e242,
    0x68ddb3f8,
    0x1fda836e,
    0x81be16cd,
    0xf6b9265b,
    0x6fb077e1,
    0x18b74777,
    0x88085ae6,
    0xff0f6a70,
    0x66063bca,
    0x11010b5c,
    0x8f659eff,
    0xf862ae69,
    0x616bffd3,
    0x166ccf45,
    0xa00ae278,
    0xd70dd2ee,
    0x4e048354,
    0x3903b3c2,
    0xa7672661,
    0xd06016f7,
    0x4969474d,
    0x3e6e77db,
    0xaed16a4a,
    0xd9d65adc,
    0x40df0b66,
    0x37d83bf0,
    0xa9bcae53,
    0xdebb9ec5,
    0x47b2cf7f,
    0x30b5ffe9,
    0xbdbdf21c,
    0xcabac28a,
    0x53b39330,
    0x24b4a3a6,
    0xbad03605,
    0xcdd70693,
    0x54de5729,
    0x23d967bf,
    0xb3667a2e,
    0xc4614ab8,
    0x5d681b02,
    0x2a6f2b94,
    0xb40bbe37,
    0xc30c8ea1,
    0x5a05df1b,
    0x2d02ef8d
];
if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);
const crc32 = (0, _defineCrcDefault.default)('crc-32', function(buf, previous) {
    if (!(0, _buffer.Buffer).isBuffer(buf)) buf = (0, _createBufferDefault.default)(buf);
    let crc = previous === 0 ? 0 : ~~previous ^ -1;
    for(let index = 0; index < buf.length; index++){
        const byte = buf[index];
        crc = TABLE[(crc ^ byte) & 0xff] ^ crc >>> 8;
    }
    return crc ^ -1;
});
exports.default = crc32;

},{"buffer":"bCaf4","./create_buffer":"2s2Ds","./define_crc":"i21yg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dEdnj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buffer = require("buffer");
var _createBuffer = require("./create_buffer");
var _createBufferDefault = parcelHelpers.interopDefault(_createBuffer);
var _defineCrc = require("./define_crc");
var _defineCrcDefault = parcelHelpers.interopDefault(_defineCrc);
// Generated by `./pycrc.py --algorithm=table-driven --model=jam --generate=c`
// prettier-ignore
let TABLE = [
    0x00000000,
    0x77073096,
    0xee0e612c,
    0x990951ba,
    0x076dc419,
    0x706af48f,
    0xe963a535,
    0x9e6495a3,
    0x0edb8832,
    0x79dcb8a4,
    0xe0d5e91e,
    0x97d2d988,
    0x09b64c2b,
    0x7eb17cbd,
    0xe7b82d07,
    0x90bf1d91,
    0x1db71064,
    0x6ab020f2,
    0xf3b97148,
    0x84be41de,
    0x1adad47d,
    0x6ddde4eb,
    0xf4d4b551,
    0x83d385c7,
    0x136c9856,
    0x646ba8c0,
    0xfd62f97a,
    0x8a65c9ec,
    0x14015c4f,
    0x63066cd9,
    0xfa0f3d63,
    0x8d080df5,
    0x3b6e20c8,
    0x4c69105e,
    0xd56041e4,
    0xa2677172,
    0x3c03e4d1,
    0x4b04d447,
    0xd20d85fd,
    0xa50ab56b,
    0x35b5a8fa,
    0x42b2986c,
    0xdbbbc9d6,
    0xacbcf940,
    0x32d86ce3,
    0x45df5c75,
    0xdcd60dcf,
    0xabd13d59,
    0x26d930ac,
    0x51de003a,
    0xc8d75180,
    0xbfd06116,
    0x21b4f4b5,
    0x56b3c423,
    0xcfba9599,
    0xb8bda50f,
    0x2802b89e,
    0x5f058808,
    0xc60cd9b2,
    0xb10be924,
    0x2f6f7c87,
    0x58684c11,
    0xc1611dab,
    0xb6662d3d,
    0x76dc4190,
    0x01db7106,
    0x98d220bc,
    0xefd5102a,
    0x71b18589,
    0x06b6b51f,
    0x9fbfe4a5,
    0xe8b8d433,
    0x7807c9a2,
    0x0f00f934,
    0x9609a88e,
    0xe10e9818,
    0x7f6a0dbb,
    0x086d3d2d,
    0x91646c97,
    0xe6635c01,
    0x6b6b51f4,
    0x1c6c6162,
    0x856530d8,
    0xf262004e,
    0x6c0695ed,
    0x1b01a57b,
    0x8208f4c1,
    0xf50fc457,
    0x65b0d9c6,
    0x12b7e950,
    0x8bbeb8ea,
    0xfcb9887c,
    0x62dd1ddf,
    0x15da2d49,
    0x8cd37cf3,
    0xfbd44c65,
    0x4db26158,
    0x3ab551ce,
    0xa3bc0074,
    0xd4bb30e2,
    0x4adfa541,
    0x3dd895d7,
    0xa4d1c46d,
    0xd3d6f4fb,
    0x4369e96a,
    0x346ed9fc,
    0xad678846,
    0xda60b8d0,
    0x44042d73,
    0x33031de5,
    0xaa0a4c5f,
    0xdd0d7cc9,
    0x5005713c,
    0x270241aa,
    0xbe0b1010,
    0xc90c2086,
    0x5768b525,
    0x206f85b3,
    0xb966d409,
    0xce61e49f,
    0x5edef90e,
    0x29d9c998,
    0xb0d09822,
    0xc7d7a8b4,
    0x59b33d17,
    0x2eb40d81,
    0xb7bd5c3b,
    0xc0ba6cad,
    0xedb88320,
    0x9abfb3b6,
    0x03b6e20c,
    0x74b1d29a,
    0xead54739,
    0x9dd277af,
    0x04db2615,
    0x73dc1683,
    0xe3630b12,
    0x94643b84,
    0x0d6d6a3e,
    0x7a6a5aa8,
    0xe40ecf0b,
    0x9309ff9d,
    0x0a00ae27,
    0x7d079eb1,
    0xf00f9344,
    0x8708a3d2,
    0x1e01f268,
    0x6906c2fe,
    0xf762575d,
    0x806567cb,
    0x196c3671,
    0x6e6b06e7,
    0xfed41b76,
    0x89d32be0,
    0x10da7a5a,
    0x67dd4acc,
    0xf9b9df6f,
    0x8ebeeff9,
    0x17b7be43,
    0x60b08ed5,
    0xd6d6a3e8,
    0xa1d1937e,
    0x38d8c2c4,
    0x4fdff252,
    0xd1bb67f1,
    0xa6bc5767,
    0x3fb506dd,
    0x48b2364b,
    0xd80d2bda,
    0xaf0a1b4c,
    0x36034af6,
    0x41047a60,
    0xdf60efc3,
    0xa867df55,
    0x316e8eef,
    0x4669be79,
    0xcb61b38c,
    0xbc66831a,
    0x256fd2a0,
    0x5268e236,
    0xcc0c7795,
    0xbb0b4703,
    0x220216b9,
    0x5505262f,
    0xc5ba3bbe,
    0xb2bd0b28,
    0x2bb45a92,
    0x5cb36a04,
    0xc2d7ffa7,
    0xb5d0cf31,
    0x2cd99e8b,
    0x5bdeae1d,
    0x9b64c2b0,
    0xec63f226,
    0x756aa39c,
    0x026d930a,
    0x9c0906a9,
    0xeb0e363f,
    0x72076785,
    0x05005713,
    0x95bf4a82,
    0xe2b87a14,
    0x7bb12bae,
    0x0cb61b38,
    0x92d28e9b,
    0xe5d5be0d,
    0x7cdcefb7,
    0x0bdbdf21,
    0x86d3d2d4,
    0xf1d4e242,
    0x68ddb3f8,
    0x1fda836e,
    0x81be16cd,
    0xf6b9265b,
    0x6fb077e1,
    0x18b74777,
    0x88085ae6,
    0xff0f6a70,
    0x66063bca,
    0x11010b5c,
    0x8f659eff,
    0xf862ae69,
    0x616bffd3,
    0x166ccf45,
    0xa00ae278,
    0xd70dd2ee,
    0x4e048354,
    0x3903b3c2,
    0xa7672661,
    0xd06016f7,
    0x4969474d,
    0x3e6e77db,
    0xaed16a4a,
    0xd9d65adc,
    0x40df0b66,
    0x37d83bf0,
    0xa9bcae53,
    0xdebb9ec5,
    0x47b2cf7f,
    0x30b5ffe9,
    0xbdbdf21c,
    0xcabac28a,
    0x53b39330,
    0x24b4a3a6,
    0xbad03605,
    0xcdd70693,
    0x54de5729,
    0x23d967bf,
    0xb3667a2e,
    0xc4614ab8,
    0x5d681b02,
    0x2a6f2b94,
    0xb40bbe37,
    0xc30c8ea1,
    0x5a05df1b,
    0x2d02ef8d
];
if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);
const crcjam = (0, _defineCrcDefault.default)('jam', function(buf, previous = -1) {
    if (!(0, _buffer.Buffer).isBuffer(buf)) buf = (0, _createBufferDefault.default)(buf);
    let crc = previous === 0 ? 0 : ~~previous;
    for(let index = 0; index < buf.length; index++){
        const byte = buf[index];
        crc = TABLE[(crc ^ byte) & 0xff] ^ crc >>> 8;
    }
    return crc;
});
exports.default = crcjam;

},{"buffer":"bCaf4","./create_buffer":"2s2Ds","./define_crc":"i21yg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iSs9O":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("sw.js");

},{}],"9Qtts":[function(require,module,exports,__globalThis) {
const canPromise = require("da1f68cc1fc16077");
const QRCode = require("8c6cf49ef2287430");
const CanvasRenderer = require("8a60cf7722cc14ce");
const SvgRenderer = require("f6fcc816b915ba37");
function renderCanvas(renderFunc, canvas, text, opts, cb) {
    const args = [].slice.call(arguments, 1);
    const argsNum = args.length;
    const isLastArgCb = typeof args[argsNum - 1] === 'function';
    if (!isLastArgCb && !canPromise()) throw new Error('Callback required as last argument');
    if (isLastArgCb) {
        if (argsNum < 2) throw new Error('Too few arguments provided');
        if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === 'undefined') {
                cb = opts;
                opts = undefined;
            } else {
                cb = opts;
                opts = text;
                text = canvas;
                canvas = undefined;
            }
        }
    } else {
        if (argsNum < 1) throw new Error('Too few arguments provided');
        if (argsNum === 1) {
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = undefined;
        }
        return new Promise(function(resolve, reject) {
            try {
                const data = QRCode.create(text, opts);
                resolve(renderFunc(data, canvas, opts));
            } catch (e) {
                reject(e);
            }
        });
    }
    try {
        const data = QRCode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
    } catch (e) {
        cb(e);
    }
}
exports.create = QRCode.create;
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
// only svg for now.
exports.toString = renderCanvas.bind(null, function(data, _, opts) {
    return SvgRenderer.render(data, opts);
});

},{"da1f68cc1fc16077":"aIhRE","8c6cf49ef2287430":"jtbGn","8a60cf7722cc14ce":"1f4g7","f6fcc816b915ba37":"xiTfv"}],"aIhRE":[function(require,module,exports,__globalThis) {
// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
module.exports = function() {
    return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};

},{}],"jtbGn":[function(require,module,exports,__globalThis) {
const Utils = require("4cf6a8173d9f3a2");
const ECLevel = require("2ad62f61c352884c");
const BitBuffer = require("87d5a6270eb1dc26");
const BitMatrix = require("91abc94f777368cc");
const AlignmentPattern = require("9737c3939ab85d95");
const FinderPattern = require("cee3d371e219e45e");
const MaskPattern = require("8700c8c682afabf3");
const ECCode = require("65ad903a6ba3e");
const ReedSolomonEncoder = require("1e8e447afb4d169c");
const Version = require("8a4a19af97836d80");
const FormatInfo = require("26720f9d94c9e268");
const Mode = require("7b6429a248ecc51f");
const Segments = require("1368d0fa14524351");
/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/ /**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupFinderPattern(matrix, version) {
    const size = matrix.size;
    const pos = FinderPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -1; r <= 7; r++){
            if (row + r <= -1 || size <= row + r) continue;
            for(let c = -1; c <= 7; c++){
                if (col + c <= -1 || size <= col + c) continue;
                if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) matrix.set(row + r, col + c, true, true);
                else matrix.set(row + r, col + c, false, true);
            }
        }
    }
}
/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */ function setupTimingPattern(matrix) {
    const size = matrix.size;
    for(let r = 8; r < size - 8; r++){
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
    }
}
/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupAlignmentPattern(matrix, version) {
    const pos = AlignmentPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -2; r <= 2; r++){
            for(let c = -2; c <= 2; c++)if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) matrix.set(row + r, col + c, true, true);
            else matrix.set(row + r, col + c, false, true);
        }
    }
}
/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupVersionInfo(matrix, version) {
    const size = matrix.size;
    const bits = Version.getEncodedBits(version);
    let row, col, mod;
    for(let i = 0; i < 18; i++){
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
    }
}
/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */ function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
    const size = matrix.size;
    const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
    let i, mod;
    for(i = 0; i < 15; i++){
        mod = (bits >> i & 1) === 1;
        // vertical
        if (i < 6) matrix.set(i, 8, mod, true);
        else if (i < 8) matrix.set(i + 1, 8, mod, true);
        else matrix.set(size - 15 + i, 8, mod, true);
        // horizontal
        if (i < 8) matrix.set(8, size - i - 1, mod, true);
        else if (i < 9) matrix.set(8, 15 - i - 1 + 1, mod, true);
        else matrix.set(8, 15 - i - 1, mod, true);
    }
    // fixed module
    matrix.set(size - 8, 8, 1, true);
}
/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */ function setupData(matrix, data) {
    const size = matrix.size;
    let inc = -1;
    let row = size - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for(let col = size - 1; col > 0; col -= 2){
        if (col === 6) col--;
        while(true){
            for(let c = 0; c < 2; c++)if (!matrix.isReserved(row, col - c)) {
                let dark = false;
                if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                matrix.set(row, col - c, dark);
                bitIndex--;
                if (bitIndex === -1) {
                    byteIndex++;
                    bitIndex = 7;
                }
            }
            row += inc;
            if (row < 0 || size <= row) {
                row -= inc;
                inc = -inc;
                break;
            }
        }
    }
}
/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */ function createData(version, errorCorrectionLevel, segments) {
    // Prepare data buffer
    const buffer = new BitBuffer();
    segments.forEach(function(data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4);
        // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        // add binary data sequence to buffer
        data.write(buffer);
    });
    // Calculate required number of bits
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    // Add a terminator.
    // If the bit string is shorter than the total number of required bits,
    // a terminator of up to four 0s must be added to the right side of the string.
    // If the bit string is more than four bits shorter than the required number of bits,
    // add four 0s to the end.
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) buffer.put(0, 4);
    // If the bit string is fewer than four bits shorter, add only the number of 0s that
    // are needed to reach the required number of bits.
    // After adding the terminator, if the number of bits in the string is not a multiple of 8,
    // pad the string on the right with 0s to make the string's length a multiple of 8.
    while(buffer.getLengthInBits() % 8 !== 0)buffer.putBit(0);
    // Add pad bytes if the string is still shorter than the total number of required bits.
    // Extend the buffer to fill the data capacity of the symbol corresponding to
    // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
    // and 00010001 (0x11) alternately.
    const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for(let i = 0; i < remainingByte; i++)buffer.put(i % 2 ? 0x11 : 0xEC, 8);
    return createCodewords(buffer, version, errorCorrectionLevel);
}
/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */ function createCodewords(bitBuffer, version, errorCorrectionLevel) {
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewords = totalCodewords - ecTotalCodewords;
    // Total number of blocks
    const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
    // Calculate how many blocks each group should contain
    const blocksInGroup2 = totalCodewords % ecTotalBlocks;
    const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    // Number of EC codewords is the same for both groups
    const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
    const rs = new ReedSolomonEncoder(ecCount);
    let offset = 0;
    const dcData = new Array(ecTotalBlocks);
    const ecData = new Array(ecTotalBlocks);
    let maxDataSize = 0;
    const buffer = new Uint8Array(bitBuffer.buffer);
    // Divide the buffer into the required number of blocks
    for(let b = 0; b < ecTotalBlocks; b++){
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        // extract a block of data from buffer
        dcData[b] = buffer.slice(offset, offset + dataSize);
        // Calculate EC codewords for this data block
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
    }
    // Create final data
    // Interleave the data and error correction codewords from each block
    const data = new Uint8Array(totalCodewords);
    let index = 0;
    let i, r;
    // Add data codewords
    for(i = 0; i < maxDataSize; i++){
        for(r = 0; r < ecTotalBlocks; r++)if (i < dcData[r].length) data[index++] = dcData[r][i];
    }
    // Apped EC codewords
    for(i = 0; i < ecCount; i++)for(r = 0; r < ecTotalBlocks; r++)data[index++] = ecData[r][i];
    return data;
}
/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */ function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
    let segments;
    if (Array.isArray(data)) segments = Segments.fromArray(data);
    else if (typeof data === 'string') {
        let estimatedVersion = version;
        if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            // Estimate best version that can contain raw splitted segments
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        // Build optimized segments
        // If estimated version is undefined, try with the highest version
        segments = Segments.fromString(data, estimatedVersion || 40);
    } else throw new Error('Invalid data');
    // Get the min version that can contain data
    const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
    // If no version is found, data cannot be stored
    if (!bestVersion) throw new Error('The amount of data is too big to be stored in a QR Code');
    // If not specified, use min version as default
    if (!version) version = bestVersion;
    else if (version < bestVersion) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + '.\n');
    const dataBits = createData(version, errorCorrectionLevel, segments);
    // Allocate matrix buffer
    const moduleCount = Utils.getSymbolSize(version);
    const modules = new BitMatrix(moduleCount);
    // Add function modules
    setupFinderPattern(modules, version);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version);
    // Add temporary dummy bits for format info just to set them as reserved.
    // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
    // since the masking operation must be performed only on the encoding region.
    // These blocks will be replaced with correct values later in code.
    setupFormatInfo(modules, errorCorrectionLevel, 0);
    if (version >= 7) setupVersionInfo(modules, version);
    // Add data codewords
    setupData(modules, dataBits);
    if (isNaN(maskPattern)) // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
    // Apply mask pattern
    MaskPattern.applyMask(maskPattern, modules);
    // Replace format info bits with correct values
    setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
    return {
        modules: modules,
        version: version,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern,
        segments: segments
    };
}
/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */ exports.create = function create(data, options) {
    if (typeof data === 'undefined' || data === '') throw new Error('No input text');
    let errorCorrectionLevel = ECLevel.M;
    let version;
    let mask;
    if (typeof options !== 'undefined') {
        // Use higher error correction level as default
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) Utils.setToSJISFunction(options.toSJISFunc);
    }
    return createSymbol(data, version, errorCorrectionLevel, mask);
};

},{"4cf6a8173d9f3a2":"1ys7g","2ad62f61c352884c":"bky8D","87d5a6270eb1dc26":"hXbQu","91abc94f777368cc":"7YPB1","9737c3939ab85d95":"8XVDB","cee3d371e219e45e":"2YZgt","8700c8c682afabf3":"1Wzsb","65ad903a6ba3e":"kesrk","1e8e447afb4d169c":"iLnw2","8a4a19af97836d80":"7Vx7u","26720f9d94c9e268":"7lSti","7b6429a248ecc51f":"2CEPW","1368d0fa14524351":"mMZhz"}],"1ys7g":[function(require,module,exports,__globalThis) {
let toSJISFunction;
const CODEWORDS_COUNT = [
    0,
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
];
/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */ exports.getSymbolSize = function getSymbolSize(version) {
    if (!version) throw new Error('"version" cannot be null or undefined');
    if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
    return version * 4 + 17;
};
/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */ exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
    return CODEWORDS_COUNT[version];
};
/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */ exports.getBCHDigit = function(data) {
    let digit = 0;
    while(data !== 0){
        digit++;
        data >>>= 1;
    }
    return digit;
};
exports.setToSJISFunction = function setToSJISFunction(f) {
    if (typeof f !== 'function') throw new Error('"toSJISFunc" is not a valid function.');
    toSJISFunction = f;
};
exports.isKanjiModeEnabled = function() {
    return typeof toSJISFunction !== 'undefined';
};
exports.toSJIS = function toSJIS(kanji) {
    return toSJISFunction(kanji);
};

},{}],"bky8D":[function(require,module,exports,__globalThis) {
exports.L = {
    bit: 1
};
exports.M = {
    bit: 0
};
exports.Q = {
    bit: 3
};
exports.H = {
    bit: 2
};
function fromString(string) {
    if (typeof string !== 'string') throw new Error('Param is not a string');
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case 'l':
        case 'low':
            return exports.L;
        case 'm':
        case 'medium':
            return exports.M;
        case 'q':
        case 'quartile':
            return exports.Q;
        case 'h':
        case 'high':
            return exports.H;
        default:
            throw new Error('Unknown EC Level: ' + string);
    }
}
exports.isValid = function isValid(level) {
    return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
};
exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) return value;
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};

},{}],"hXbQu":[function(require,module,exports,__globalThis) {
function BitBuffer() {
    this.buffer = [];
    this.length = 0;
}
BitBuffer.prototype = {
    get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
    },
    put: function(num, length) {
        for(let i = 0; i < length; i++)this.putBit((num >>> length - i - 1 & 1) === 1);
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) this.buffer.push(0);
        if (bit) this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        this.length++;
    }
};
module.exports = BitBuffer;

},{}],"7YPB1":[function(require,module,exports,__globalThis) {
/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */ function BitMatrix(size) {
    if (!size || size < 1) throw new Error('BitMatrix size must be defined and greater than 0');
    this.size = size;
    this.data = new Uint8Array(size * size);
    this.reservedBit = new Uint8Array(size * size);
}
/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */ BitMatrix.prototype.set = function(row, col, value, reserved) {
    const index = row * this.size + col;
    this.data[index] = value;
    if (reserved) this.reservedBit[index] = true;
};
/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */ BitMatrix.prototype.get = function(row, col) {
    return this.data[row * this.size + col];
};
/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */ BitMatrix.prototype.xor = function(row, col, value) {
    this.data[row * this.size + col] ^= value;
};
/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */ BitMatrix.prototype.isReserved = function(row, col) {
    return this.reservedBit[row * this.size + col];
};
module.exports = BitMatrix;

},{}],"8XVDB":[function(require,module,exports,__globalThis) {
/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */ const getSymbolSize = require("3fa093180e62a22a").getSymbolSize;
/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */ exports.getRowColCoords = function getRowColCoords(version) {
    if (version === 1) return [];
    const posCount = Math.floor(version / 7) + 2;
    const size = getSymbolSize(version);
    const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    const positions = [
        size - 7
    ] // Last coord is always (size - 7)
    ;
    for(let i = 1; i < posCount - 1; i++)positions[i] = positions[i - 1] - intervals;
    positions.push(6) // First coord is always 6
    ;
    return positions.reverse();
};
/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const coords = [];
    const pos = exports.getRowColCoords(version);
    const posLength = pos.length;
    for(let i = 0; i < posLength; i++)for(let j = 0; j < posLength; j++){
        // Skip if position is occupied by finder patterns
        if (i === 0 && j === 0 || // top-left
        i === 0 && j === posLength - 1 || // bottom-left
        i === posLength - 1 && j === 0) continue;
        coords.push([
            pos[i],
            pos[j]
        ]);
    }
    return coords;
};

},{"3fa093180e62a22a":"1ys7g"}],"2YZgt":[function(require,module,exports,__globalThis) {
const getSymbolSize = require("6ec9ae5660047293").getSymbolSize;
const FINDER_PATTERN_SIZE = 7;
/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const size = getSymbolSize(version);
    return [
        // top-left
        [
            0,
            0
        ],
        // top-right
        [
            size - FINDER_PATTERN_SIZE,
            0
        ],
        // bottom-left
        [
            0,
            size - FINDER_PATTERN_SIZE
        ]
    ];
};

},{"6ec9ae5660047293":"1ys7g"}],"1Wzsb":[function(require,module,exports,__globalThis) {
/**
 * Data mask pattern reference
 * @type {Object}
 */ exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */ const PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
};
/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */ exports.isValid = function isValid(mask) {
    return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
};
/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */ exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : undefined;
};
/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/ exports.getPenaltyN1 = function getPenaltyN1(data) {
    const size = data.size;
    let points = 0;
    let sameCountCol = 0;
    let sameCountRow = 0;
    let lastCol = null;
    let lastRow = null;
    for(let row = 0; row < size; row++){
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for(let col = 0; col < size; col++){
            let module = data.get(row, col);
            if (module === lastCol) sameCountCol++;
            else {
                if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
                lastCol = module;
                sameCountCol = 1;
            }
            module = data.get(col, row);
            if (module === lastRow) sameCountRow++;
            else {
                if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
                lastRow = module;
                sameCountRow = 1;
            }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
};
/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */ exports.getPenaltyN2 = function getPenaltyN2(data) {
    const size = data.size;
    let points = 0;
    for(let row = 0; row < size - 1; row++)for(let col = 0; col < size - 1; col++){
        const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
        if (last === 4 || last === 0) points++;
    }
    return points * PenaltyScores.N2;
};
/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */ exports.getPenaltyN3 = function getPenaltyN3(data) {
    const size = data.size;
    let points = 0;
    let bitsCol = 0;
    let bitsRow = 0;
    for(let row = 0; row < size; row++){
        bitsCol = bitsRow = 0;
        for(let col = 0; col < size; col++){
            bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
            if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
            bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
            if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
        }
    }
    return points * PenaltyScores.N3;
};
/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */ exports.getPenaltyN4 = function getPenaltyN4(data) {
    let darkCount = 0;
    const modulesCount = data.data.length;
    for(let i = 0; i < modulesCount; i++)darkCount += data.data[i];
    const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * PenaltyScores.N4;
};
/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */ function getMaskAt(maskPattern, i, j) {
    switch(maskPattern){
        case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
            return i % 2 === 0;
        case exports.Patterns.PATTERN010:
            return j % 3 === 0;
        case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
            throw new Error('bad maskPattern:' + maskPattern);
    }
}
/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */ exports.applyMask = function applyMask(pattern, data) {
    const size = data.size;
    for(let col = 0; col < size; col++)for(let row = 0; row < size; row++){
        if (data.isReserved(row, col)) continue;
        data.xor(row, col, getMaskAt(pattern, row, col));
    }
};
/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */ exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    const numPatterns = Object.keys(exports.Patterns).length;
    let bestPattern = 0;
    let lowerPenalty = Infinity;
    for(let p = 0; p < numPatterns; p++){
        setupFormatFunc(p);
        exports.applyMask(p, data);
        // Calculate penalty
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        // Undo previously applied mask
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
        }
    }
    return bestPattern;
};

},{}],"kesrk":[function(require,module,exports,__globalThis) {
const ECLevel = require("7baaa530584d1bc4");
const EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
];
const EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
];
/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */ exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */ exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};

},{"7baaa530584d1bc4":"bky8D"}],"iLnw2":[function(require,module,exports,__globalThis) {
const Polynomial = require("742a7ee6d6a2d145");
function ReedSolomonEncoder(degree) {
    this.genPoly = undefined;
    this.degree = degree;
    if (this.degree) this.initialize(this.degree);
}
/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */ ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
    // create an irreducible generator polynomial
    this.degree = degree;
    this.genPoly = Polynomial.generateECPolynomial(this.degree);
};
/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */ ReedSolomonEncoder.prototype.encode = function encode(data) {
    if (!this.genPoly) throw new Error('Encoder not initialized');
    // Calculate EC for this data block
    // extends data size to data+genPoly size
    const paddedData = new Uint8Array(data.length + this.degree);
    paddedData.set(data);
    // The error correction codewords are the remainder after dividing the data codewords
    // by a generator polynomial
    const remainder = Polynomial.mod(paddedData, this.genPoly);
    // return EC data blocks (last n byte, where n is the degree of genPoly)
    // If coefficients number in remainder are less than genPoly degree,
    // pad with 0s to the left to reach the needed number of coefficients
    const start = this.degree - remainder.length;
    if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
    }
    return remainder;
};
module.exports = ReedSolomonEncoder;

},{"742a7ee6d6a2d145":"gLM74"}],"gLM74":[function(require,module,exports,__globalThis) {
const GF = require("780c74029318268c");
/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */ exports.mul = function mul(p1, p2) {
    const coeff = new Uint8Array(p1.length + p2.length - 1);
    for(let i = 0; i < p1.length; i++)for(let j = 0; j < p2.length; j++)coeff[i + j] ^= GF.mul(p1[i], p2[j]);
    return coeff;
};
/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */ exports.mod = function mod(divident, divisor) {
    let result = new Uint8Array(divident);
    while(result.length - divisor.length >= 0){
        const coeff = result[0];
        for(let i = 0; i < divisor.length; i++)result[i] ^= GF.mul(divisor[i], coeff);
        // remove all zeros from buffer head
        let offset = 0;
        while(offset < result.length && result[offset] === 0)offset++;
        result = result.slice(offset);
    }
    return result;
};
/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */ exports.generateECPolynomial = function generateECPolynomial(degree) {
    let poly = new Uint8Array([
        1
    ]);
    for(let i = 0; i < degree; i++)poly = exports.mul(poly, new Uint8Array([
        1,
        GF.exp(i)
    ]));
    return poly;
};

},{"780c74029318268c":"9uWeu"}],"9uWeu":[function(require,module,exports,__globalThis) {
const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256);
(function initTables() {
    let x = 1;
    for(let i = 0; i < 255; i++){
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1 // multiply by 2
        ;
        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.
        if (x & 0x100) x ^= 0x11D;
    }
    // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
    // stay inside the bounds (because we will mainly use this table for the multiplication of
    // two GF numbers, no more).
    // @see {@link mul}
    for(let i = 255; i < 512; i++)EXP_TABLE[i] = EXP_TABLE[i - 255];
})();
/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.log = function log(n) {
    if (n < 1) throw new Error('log(' + n + ')');
    return LOG_TABLE[n];
};
/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.exp = function exp(n) {
    return EXP_TABLE[n];
};
/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */ exports.mul = function mul(x, y) {
    if (x === 0 || y === 0) return 0;
    // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
    // @see {@link initTables}
    return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};

},{}],"7Vx7u":[function(require,module,exports,__globalThis) {
const Utils = require("f67b02cdf61cb7c6");
const ECCode = require("777da0d92c463f2e");
const ECLevel = require("acd5b4fcd696edf3");
const Mode = require("5303c314c4a688d7");
const VersionCheck = require("663d0e03da8b2897");
// Generator polynomial used to encode version information
const G18 = 7973;
const G18_BCH = Utils.getBCHDigit(G18);
function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) return currentVersion;
    }
    return undefined;
}
function getReservedBitsCount(mode, version) {
    // Character count indicator + mode indicator bits
    return Mode.getCharCountIndicator(mode, version) + 4;
}
function getTotalBitsFromDataArray(segments, version) {
    let totalBits = 0;
    segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
}
function getBestVersionForMixedData(segments, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) return currentVersion;
    }
    return undefined;
}
/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */ exports.from = function from(value, defaultValue) {
    if (VersionCheck.isValid(value)) return parseInt(value, 10);
    return defaultValue;
};
/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */ exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
    if (!VersionCheck.isValid(version)) throw new Error('Invalid QR Code version');
    // Use Byte mode as default
    if (typeof mode === 'undefined') mode = Mode.BYTE;
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode === Mode.MIXED) return dataTotalCodewordsBits;
    const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
    // Return max number of storable codewords
    switch(mode){
        case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
            return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
            return Math.floor(usableBits / 8);
    }
};
/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */ exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
    let seg;
    const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
    if (Array.isArray(data)) {
        if (data.length > 1) return getBestVersionForMixedData(data, ecl);
        if (data.length === 0) return 1;
        seg = data[0];
    } else seg = data;
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
};
/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */ exports.getEncodedBits = function getEncodedBits(version) {
    if (!VersionCheck.isValid(version) || version < 7) throw new Error('Invalid QR Code version');
    let d = version << 12;
    while(Utils.getBCHDigit(d) - G18_BCH >= 0)d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
    return version << 12 | d;
};

},{"f67b02cdf61cb7c6":"1ys7g","777da0d92c463f2e":"kesrk","acd5b4fcd696edf3":"bky8D","5303c314c4a688d7":"2CEPW","663d0e03da8b2897":"7v8um"}],"2CEPW":[function(require,module,exports,__globalThis) {
const VersionCheck = require("488660fac9162579");
const Regex = require("a23fd227d32f3622");
/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */ exports.NUMERIC = {
    id: 'Numeric',
    bit: 1,
    ccBits: [
        10,
        12,
        14
    ]
};
/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */ exports.ALPHANUMERIC = {
    id: 'Alphanumeric',
    bit: 2,
    ccBits: [
        9,
        11,
        13
    ]
};
/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */ exports.BYTE = {
    id: 'Byte',
    bit: 4,
    ccBits: [
        8,
        16,
        16
    ]
};
/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */ exports.KANJI = {
    id: 'Kanji',
    bit: 8,
    ccBits: [
        8,
        10,
        12
    ]
};
/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */ exports.MIXED = {
    bit: -1
};
/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */ exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
    if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);
    if (!VersionCheck.isValid(version)) throw new Error('Invalid version: ' + version);
    if (version >= 1 && version < 10) return mode.ccBits[0];
    else if (version < 27) return mode.ccBits[1];
    return mode.ccBits[2];
};
/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */ exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
    else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
    else if (Regex.testKanji(dataStr)) return exports.KANJI;
    else return exports.BYTE;
};
/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */ exports.toString = function toString(mode) {
    if (mode && mode.id) return mode.id;
    throw new Error('Invalid mode');
};
/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */ exports.isValid = function isValid(mode) {
    return mode && mode.bit && mode.ccBits;
};
/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */ function fromString(string) {
    if (typeof string !== 'string') throw new Error('Param is not a string');
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case 'numeric':
            return exports.NUMERIC;
        case 'alphanumeric':
            return exports.ALPHANUMERIC;
        case 'kanji':
            return exports.KANJI;
        case 'byte':
            return exports.BYTE;
        default:
            throw new Error('Unknown mode: ' + string);
    }
}
/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */ exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) return value;
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};

},{"488660fac9162579":"7v8um","a23fd227d32f3622":"a1crV"}],"7v8um":[function(require,module,exports,__globalThis) {
/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */ exports.isValid = function isValid(version) {
    return !isNaN(version) && version >= 1 && version <= 40;
};

},{}],"a1crV":[function(require,module,exports,__globalThis) {
const numeric = '[0-9]+';
const alphanumeric = '[A-Z $%*+\\-./:]+';
let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
kanji = kanji.replace(/u/g, '\\u');
const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
exports.KANJI = new RegExp(kanji, 'g');
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
exports.BYTE = new RegExp(byte, 'g');
exports.NUMERIC = new RegExp(numeric, 'g');
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g');
const TEST_KANJI = new RegExp('^' + kanji + '$');
const TEST_NUMERIC = new RegExp('^' + numeric + '$');
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
exports.testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
};
exports.testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
};
exports.testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
};

},{}],"7lSti":[function(require,module,exports,__globalThis) {
const Utils = require("eeca831a42e85d6c");
const G15 = 1335;
const G15_MASK = 21522;
const G15_BCH = Utils.getBCHDigit(G15);
/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */ exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
    const data = errorCorrectionLevel.bit << 3 | mask;
    let d = data << 10;
    while(Utils.getBCHDigit(d) - G15_BCH >= 0)d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
    // xor final data with mask pattern in order to ensure that
    // no combination of Error Correction Level and data mask pattern
    // will result in an all-zero data string
    return (data << 10 | d) ^ G15_MASK;
};

},{"eeca831a42e85d6c":"1ys7g"}],"mMZhz":[function(require,module,exports,__globalThis) {
const Mode = require("45f6d4bff9d2fc72");
const NumericData = require("73109cbf4f3c309d");
const AlphanumericData = require("5320016e34c30467");
const ByteData = require("fd16f8f25b581951");
const KanjiData = require("8a7b84039f1cf0d2");
const Regex = require("79379a3a8f3c26bb");
const Utils = require("66903ca51bd2ea1d");
const dijkstra = require("3b9f47d541e7d71f");
/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */ function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
}
/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */ function getSegments(regex, mode, str) {
    const segments = [];
    let result;
    while((result = regex.exec(str)) !== null)segments.push({
        data: result[0],
        index: result.index,
        mode: mode,
        length: result[0].length
    });
    return segments;
}
/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */ function getSegmentsFromString(dataStr) {
    const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
    const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
    let byteSegs;
    let kanjiSegs;
    if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
    } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
    }
    const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
    }).map(function(obj) {
        return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
        };
    });
}
/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */ function getSegmentBitsLength(length, mode) {
    switch(mode){
        case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
            return KanjiData.getBitsLength(length);
        case Mode.BYTE:
            return ByteData.getBitsLength(length);
    }
}
/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
        }
        acc.push(curr);
        return acc;
    }, []);
}
/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function buildNodes(segs) {
    const nodes = [];
    for(let i = 0; i < segs.length; i++){
        const seg = segs[i];
        switch(seg.mode){
            case Mode.NUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.ALPHANUMERIC,
                        length: seg.length
                    },
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.ALPHANUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.KANJI:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
                break;
            case Mode.BYTE:
                nodes.push([
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
        }
    }
    return nodes;
}
/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */ function buildGraph(nodes, version) {
    const table = {};
    const graph = {
        start: {}
    };
    let prevNodeIds = [
        'start'
    ];
    for(let i = 0; i < nodes.length; i++){
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for(let j = 0; j < nodeGroup.length; j++){
            const node = nodeGroup[j];
            const key = '' + i + j;
            currentNodeIds.push(key);
            table[key] = {
                node: node,
                lastCount: 0
            };
            graph[key] = {};
            for(let n = 0; n < prevNodeIds.length; n++){
                const prevNodeId = prevNodeIds[n];
                if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                    graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                    table[prevNodeId].lastCount += node.length;
                } else {
                    if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                    graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
                    ;
                }
            }
        }
        prevNodeIds = currentNodeIds;
    }
    for(let n = 0; n < prevNodeIds.length; n++)graph[prevNodeIds[n]].end = 0;
    return {
        map: graph,
        table: table
    };
}
/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */ function buildSingleSegment(data, modesHint) {
    let mode;
    const bestMode = Mode.getBestModeForData(data);
    mode = Mode.from(modesHint, bestMode);
    // Make sure data can be encoded
    if (mode !== Mode.BYTE && mode.bit < bestMode.bit) throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + Mode.toString(mode) + '.\n Suggested mode is: ' + Mode.toString(bestMode));
    // Use Mode.BYTE if Kanji support is disabled
    if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) mode = Mode.BYTE;
    switch(mode){
        case Mode.NUMERIC:
            return new NumericData(data);
        case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
        case Mode.KANJI:
            return new KanjiData(data);
        case Mode.BYTE:
            return new ByteData(data);
    }
}
/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */ exports.fromArray = function fromArray(array) {
    return array.reduce(function(acc, seg) {
        if (typeof seg === 'string') acc.push(buildSingleSegment(seg, null));
        else if (seg.data) acc.push(buildSingleSegment(seg.data, seg.mode));
        return acc;
    }, []);
};
/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */ exports.fromString = function fromString(data, version) {
    const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
    const nodes = buildNodes(segs);
    const graph = buildGraph(nodes, version);
    const path = dijkstra.find_path(graph.map, 'start', 'end');
    const optimizedSegs = [];
    for(let i = 1; i < path.length - 1; i++)optimizedSegs.push(graph.table[path[i]].node);
    return exports.fromArray(mergeSegments(optimizedSegs));
};
/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */ exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
};

},{"45f6d4bff9d2fc72":"2CEPW","73109cbf4f3c309d":"gRWkc","5320016e34c30467":"hLhtu","fd16f8f25b581951":"7X4Zz","8a7b84039f1cf0d2":"5O4zm","79379a3a8f3c26bb":"a1crV","66903ca51bd2ea1d":"1ys7g","3b9f47d541e7d71f":"iKNky"}],"gRWkc":[function(require,module,exports,__globalThis) {
const Mode = require("29134b0b0820b091");
function NumericData(data) {
    this.mode = Mode.NUMERIC;
    this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
    let i, group, value;
    // The input data string is divided into groups of three digits,
    // and each group is converted to its 10-bit binary equivalent.
    for(i = 0; i + 3 <= this.data.length; i += 3){
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
    }
    // If the number of input digits is not an exact multiple of three,
    // the final one or two digits are converted to 4 or 7 bits respectively.
    const remainingNum = this.data.length - i;
    if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
    }
};
module.exports = NumericData;

},{"29134b0b0820b091":"2CEPW"}],"hLhtu":[function(require,module,exports,__globalThis) {
const Mode = require("9c7c9b869570f846");
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */ const ALPHA_NUM_CHARS = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ' ',
    '$',
    '%',
    '*',
    '+',
    '-',
    '.',
    '/',
    ':'
];
function AlphanumericData(data) {
    this.mode = Mode.ALPHANUMERIC;
    this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
    let i;
    // Input data characters are divided into groups of two characters
    // and encoded as 11-bit binary codes.
    for(i = 0; i + 2 <= this.data.length; i += 2){
        // The character value of the first character is multiplied by 45
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        // The character value of the second digit is added to the product
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        // The sum is then stored as 11-bit binary number
        bitBuffer.put(value, 11);
    }
    // If the number of input data characters is not a multiple of two,
    // the character value of the final character is encoded as a 6-bit binary number.
    if (this.data.length % 2) bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
};
module.exports = AlphanumericData;

},{"9c7c9b869570f846":"2CEPW"}],"7X4Zz":[function(require,module,exports,__globalThis) {
const Mode = require("a20a51f6cd184253");
function ByteData(data) {
    this.mode = Mode.BYTE;
    if (typeof data === 'string') this.data = new TextEncoder().encode(data);
    else this.data = new Uint8Array(data);
}
ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
};
ByteData.prototype.getLength = function getLength() {
    return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function(bitBuffer) {
    for(let i = 0, l = this.data.length; i < l; i++)bitBuffer.put(this.data[i], 8);
};
module.exports = ByteData;

},{"a20a51f6cd184253":"2CEPW"}],"5O4zm":[function(require,module,exports,__globalThis) {
const Mode = require("b935cfd1cd03a1f6");
const Utils = require("ca4944585cc8d12d");
function KanjiData(data) {
    this.mode = Mode.KANJI;
    this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function(bitBuffer) {
    let i;
    // In the Shift JIS system, Kanji characters are represented by a two byte combination.
    // These byte values are shifted from the JIS X 0208 values.
    // JIS X 0208 gives details of the shift coded representation.
    for(i = 0; i < this.data.length; i++){
        let value = Utils.toSJIS(this.data[i]);
        // For characters with Shift JIS values from 0x8140 to 0x9FFC:
        if (value >= 0x8140 && value <= 0x9FFC) // Subtract 0x8140 from Shift JIS value
        value -= 0x8140;
        else if (value >= 0xE040 && value <= 0xEBBF) // Subtract 0xC140 from Shift JIS value
        value -= 0xC140;
        else throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
        // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product
        value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff);
        // Convert result to a 13-bit binary string
        bitBuffer.put(value, 13);
    }
};
module.exports = KanjiData;

},{"b935cfd1cd03a1f6":"2CEPW","ca4944585cc8d12d":"1ys7g"}],"iKNky":[function(require,module,exports,__globalThis) {
'use strict';
/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/ var dijkstra = {
    single_source_shortest_paths: function(graph, s, d) {
        // Predecessor map for each node that has been encountered.
        // node ID => predecessor node ID
        var predecessors = {};
        // Costs of shortest paths from s to all nodes encountered.
        // node ID => cost
        var costs = {};
        costs[s] = 0;
        // Costs of shortest paths from s to all nodes encountered; differs from
        // `costs` in that it provides easy access to the node that currently has
        // the known shortest path from s.
        // XXX: Do we actually need both `costs` and `open`?
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while(!open.empty()){
            // In the nodes remaining in graph that have a known cost from s,
            // find the node, u, that currently has the shortest path from s.
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            // Get nodes adjacent to u...
            adjacent_nodes = graph[u] || {};
            // ...and explore the edges that connect u to those nodes, updating
            // the cost of the shortest paths to any or all of those nodes as
            // necessary. v is the node across the current edge from u.
            for(v in adjacent_nodes)if (adjacent_nodes.hasOwnProperty(v)) {
                // Get the cost of the edge running from u to v.
                cost_of_e = adjacent_nodes[v];
                // Cost of s to u plus the cost of u to v across e--this is *a*
                // cost from s to v that may or may not be less than the current
                // known cost to v.
                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                // If we haven't visited v yet OR if the current known cost from s to
                // v is greater than the new cost we just found (cost of s to u plus
                // cost of u to v across e), update v's cost in the cost list and
                // update v's predecessor in the predecessor list (it's now u).
                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === 'undefined';
                if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                    costs[v] = cost_of_s_to_u_plus_cost_of_e;
                    open.push(v, cost_of_s_to_u_plus_cost_of_e);
                    predecessors[v] = u;
                }
            }
        }
        if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
            var msg = [
                'Could not find a path from ',
                s,
                ' to ',
                d,
                '.'
            ].join('');
            throw new Error(msg);
        }
        return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while(u){
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
    },
    find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    },
    /**
   * A very naive priority queue implementation.
   */ PriorityQueue: {
        make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {}, key;
            opts = opts || {};
            for(key in T)if (T.hasOwnProperty(key)) t[key] = T[key];
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
        },
        default_sorter: function(a, b) {
            return a.cost - b.cost;
        },
        /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */ push: function(value, cost) {
            var item = {
                value: value,
                cost: cost
            };
            this.queue.push(item);
            this.queue.sort(this.sorter);
        },
        /**
     * Return the highest priority element in the queue.
     */ pop: function() {
            return this.queue.shift();
        },
        empty: function() {
            return this.queue.length === 0;
        }
    }
};
module.exports = dijkstra;

},{}],"1f4g7":[function(require,module,exports,__globalThis) {
const Utils = require("5b3f7c513802d6c7");
function clearCanvas(ctx, canvas, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!canvas.style) canvas.style = {};
    canvas.height = size;
    canvas.width = size;
    canvas.style.height = size + 'px';
    canvas.style.width = size + 'px';
}
function getCanvasElement() {
    try {
        return document.createElement('canvas');
    } catch (e) {
        throw new Error('You need to specify a canvas element');
    }
}
exports.render = function render(qrData, canvas, options) {
    let opts = options;
    let canvasEl = canvas;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!canvas) canvasEl = getCanvasElement();
    opts = Utils.getOptions(opts);
    const size = Utils.getImageWidth(qrData.modules.size, opts);
    const ctx = canvasEl.getContext('2d');
    const image = ctx.createImageData(size, size);
    Utils.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
};
exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
    let opts = options;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!opts) opts = {};
    const canvasEl = exports.render(qrData, canvas, opts);
    const type = opts.type || 'image/png';
    const rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
};

},{"5b3f7c513802d6c7":"3xFLw"}],"3xFLw":[function(require,module,exports,__globalThis) {
function hex2rgba(hex) {
    if (typeof hex === 'number') hex = hex.toString();
    if (typeof hex !== 'string') throw new Error('Color should be defined as hex string');
    let hexCode = hex.slice().replace('#', '').split('');
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) throw new Error('Invalid hex color: ' + hex);
    // Convert from short to long form (fff -> ffffff)
    if (hexCode.length === 3 || hexCode.length === 4) hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
        return [
            c,
            c
        ];
    }));
    // Add default alpha value
    if (hexCode.length === 6) hexCode.push('F', 'F');
    const hexValue = parseInt(hexCode.join(''), 16);
    return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: '#' + hexCode.slice(0, 6).join('')
    };
}
exports.getOptions = function getOptions(options) {
    if (!options) options = {};
    if (!options.color) options.color = {};
    const margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
    const width = options.width && options.width >= 21 ? options.width : undefined;
    const scale = options.scale || 4;
    return {
        width: width,
        scale: width ? 4 : scale,
        margin: margin,
        color: {
            dark: hex2rgba(options.color.dark || '#000000ff'),
            light: hex2rgba(options.color.light || '#ffffffff')
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
    };
};
exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
};
exports.getImageWidth = function getImageWidth(qrSize, opts) {
    const scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
};
exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    const size = qr.modules.size;
    const data = qr.modules.data;
    const scale = exports.getScale(size, opts);
    const symbolSize = Math.floor((size + opts.margin * 2) * scale);
    const scaledMargin = opts.margin * scale;
    const palette = [
        opts.color.light,
        opts.color.dark
    ];
    for(let i = 0; i < symbolSize; i++)for(let j = 0; j < symbolSize; j++){
        let posDst = (i * symbolSize + j) * 4;
        let pxColor = opts.color.light;
        if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
        }
        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
    }
};

},{}],"xiTfv":[function(require,module,exports,__globalThis) {
const Utils = require("c36bbcf663291acc");
function getColorAttrib(color, attrib) {
    const alpha = color.a / 255;
    const str = attrib + '="' + color.hex + '"';
    return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
    let str = cmd + x;
    if (typeof y !== 'undefined') str += ' ' + y;
    return str;
}
function qrToPath(data, size, margin) {
    let path = '';
    let moveBy = 0;
    let newRow = false;
    let lineLength = 0;
    for(let i = 0; i < data.length; i++){
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
                path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
                moveBy = 0;
                newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
                path += svgCmd('h', lineLength);
                lineLength = 0;
            }
        } else moveBy++;
    }
    return path;
}
exports.render = function render(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const qrcodesize = size + opts.margin * 2;
    const bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
    const path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
    const viewBox = 'viewBox="0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
    const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
    const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';
    if (typeof cb === 'function') cb(null, svgTag);
    return svgTag;
};

},{"c36bbcf663291acc":"3xFLw"}]},["n0fw4","kTBnD"], "kTBnD", "parcelRequire1c62", {}, "./", "/")

//# sourceMappingURL=3in1-key-emoji-spinner.3c14d121.js.map
