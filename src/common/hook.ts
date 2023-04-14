import {
  onBeforeMount,
  onMounted,
  // onBeforeUpdate,
  // onUpdated,
  onBeforeUnmount,
  onUnmounted,
  // onDeactivated,
  // onActivated,
  // onRenderTracked,
  // onRenderTriggered
} from 'vue';

const HOOK_LIST: Map<string, any> = new Map([
  ['BeforeMount', onBeforeMount],
  ['Mounted', onMounted],
  // ['BeforeUpdate', onBeforeUpdate],
  // ['Updated', onUpdated],
  ['BeforeUnmount', onBeforeUnmount],
  ['Unmounted', onUnmounted],
  // ['Deactivated', onDeactivated],
  // ['Activated', onActivated]
  // ['RenderTracked', onRenderTracked],
  // ['RenderTriggered', onRenderTriggered]
]);

/**
 * @description    Hook 日志与回调
 * @param cb
 */
export default (
  cb:
    | {
        afterBeforeMount: () => void;
        afterMounted: () => void;
        afterUnmounted: () => void;
        afterBeforeUnmount: () => void;
      }
    | any
) => {
  HOOK_LIST.forEach((hook, key) => {
    hook(() => {
      console.log(`#Hook////${key}`);
      let afterCb = cb?.[`after${key}`];
      afterCb && afterCb();
    });
  });
};
