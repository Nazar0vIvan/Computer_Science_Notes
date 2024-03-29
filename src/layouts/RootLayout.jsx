import { useCallback, useState } from "react";
import { Sidebar } from "../components/Sidebar";

export function RootLayout() {
  const [isResizing, setIsResizing] = useState(false);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  return (
    <div className={`app ${isResizing && "cursor_resize_h"}`}>
      <Sidebar isResizing={isResizing} stopResizing={stopResizing} />
      <div
        className={`handler ${isResizing && "handler_resize"}`}
        onMouseDown={() => {
          setIsResizing(true);
        }}
      ></div>
      <Notes />
    </div>
  );
}
