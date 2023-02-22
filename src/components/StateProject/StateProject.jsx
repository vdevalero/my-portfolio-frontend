import "./StateProject.css";
import { useState } from "react";
export function StateProject({ children, def, border, background }) {
  const [color, setColor] = useState({
    background,
    border,
  });
  const styles = {
    backgroundColor: color.background,
    border: `2px solid ${color.border}`,
  };
  return (
    <div className={`${def ? "DefaultState" : "AdminState"}`} style={styles}>
      <p>{children}</p>
    </div>
  );
}
