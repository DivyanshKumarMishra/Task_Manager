import React from 'react';
import './toggle.css';

function Toggle({
  labelLeft = '',
  labelRight = '',
  checked = false,
  onToggle = () => {},
}) {
  return (
    <div className="toggle-container">
      <span className="toggle-label">{labelLeft}</span>

      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onToggle(e.target.checked)}
        />
        <span className="slider round"></span>
      </label>

      <span className="toggle-label">{labelRight}</span>
    </div>
  );
}

export default React.memo(Toggle);
