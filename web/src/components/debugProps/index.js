"use client";

import { useEffect, useRef } from "react";

/**
 * DebugProps — universal debug component.
 *
 * Usage:
 *   <DebugProps label="page" data={page} />
 *
 * What it does:
 *   1. Logs props to the browser console on every render.
 *   2. Assigns props to window.__debug[label] so you can inspect them
 *      in the browser DevTools console at any time:
 *        > window.__debug.page
 *        > window.__debug.posts[0]
 *
 * Renders nothing visible in the UI.
 */
export default function DebugProps({ label = "debug", data }) {
  const prevData = useRef();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prevData.current === data) return;
    prevData.current = data;

    if (!window.__debug) {
      window.__debug = {};
      console.info(
        "%c[DebugProps] All debug data is available at window.__debug",
        "color: #7c3aed; font-weight: bold;",
      );
    }

    window.__debug[label] = data;

    console.groupCollapsed(
      `%c[DebugProps] ${label}`,
      "color: #2563eb; font-weight: bold;",
    );
    console.log(data);
    console.groupEnd();
  }, [label, data]);

  return null;
}
