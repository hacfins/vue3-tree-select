'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var isServer = require('../../utils/isServer.js');
var globalNodes = require('../../utils/global-nodes.js');

var useTeleport = (contentRenderer, appendToBody) => {
  const isTeleportVisible = vue.ref(false);
  if (isServer["default"]) {
    return {
      isTeleportVisible,
      showTeleport: shared.NOOP,
      hideTeleport: shared.NOOP,
      renderTeleport: shared.NOOP
    };
  }
  let $el = null;
  const showTeleport = () => {
    isTeleportVisible.value = true;
    if ($el !== null)
      return;
    $el = globalNodes.createGlobalNode();
  };
  const hideTeleport = () => {
    isTeleportVisible.value = false;
    if ($el !== null) {
      globalNodes.removeGlobalNode($el);
      $el = null;
    }
  };
  const renderTeleport = () => {
    return appendToBody.value !== true ? contentRenderer() : isTeleportVisible.value ? [vue.h(vue.Teleport, { to: $el }, contentRenderer())] : void 0;
  };
  vue.onUnmounted(hideTeleport);
  return {
    isTeleportVisible,
    showTeleport,
    hideTeleport,
    renderTeleport
  };
};

exports["default"] = useTeleport;
//# sourceMappingURL=index.js.map
