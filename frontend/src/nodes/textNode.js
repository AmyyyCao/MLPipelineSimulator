// textNode.js

import React, { useState, useRef, useEffect } from 'react';
import GenericNode from './genericNode';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = currText.matchAll(regex);
    const variableNames = Array.from(matches, (match) => match[1]);
    setVariables(variableNames);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }

  return (
    <GenericNode nodeType="Text">
      <div>
        {variables.map((variableName) => (
          <div key={variableName} style={{ display: 'flex', alignItems: 'center', marginRight: '5px' }}>
            <span style={{ marginLeft: '-80px', marginBottom: '-40px' }}>{variableName}</span>
            <Handle
              type="target"
              position={Position.Left}
              id={`${id}-${variableName}`}
            />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Text:
        </label>
        <textarea
          value={currText}
          ref={textareaRef}
          onChange={handleTextChange}
          rows={1}
          style={{ resize: 'none', overflowY: 'auto' }}
        />
      </div>
    </GenericNode>
  );

}
