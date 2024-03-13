import { useCallback, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

export function Sidebar({ isResizing, stopResizing }) {
  const sidebarRef = useRef(null);
  const [sidebarWidth, setSidebarWidth] = useState();

  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        let width =
          mouseMoveEvent.clientX -
          sidebarRef.current.getBoundingClientRect().left;
        setSidebarWidth(width);
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div
      ref={sidebarRef}
      className="sidebar container"
      style={{ width: sidebarWidth }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <Outlet context={isResizing} />
    </div>
  );
}
