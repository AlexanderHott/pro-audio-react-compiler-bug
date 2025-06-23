# `react-native-audio-pro` react compiler bug

Tracking <https://github.com/evergrace-co/react-native-audio-pro/issues/84>

zustand store is undefined in `logDebug` function when using react compiler

```bash
bun i
bunx expo run:android
# or
bunx expo run:ios
```

This patch is a temporary workaround

```patch
diff --git a/lib/module/utils.js b/lib/module/utils.js
index 6afb28aa6184419858ebace1f5063ac063c4e7da..c0b7e9ba61f61256635bb6db197821e6efdc3a74 100644
--- a/lib/module/utils.js
+++ b/lib/module/utils.js
@@ -133,9 +133,9 @@ export function guardTrackPlaying(methodName) {
  * @param args - Arguments to log
  */
 export function logDebug(...args) {
-  if (useInternalStore.getState().debug) {
-    console.log('~~~', ...args);
-  }
+  // if (useInternalStore.getState().debug) {
+  //   console.log('~~~', ...args);
+  // }
 }

 /**
```
