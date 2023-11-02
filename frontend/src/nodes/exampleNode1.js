//Example node 1: mock text but with cursive  

import React, {useState} from 'react';
import GenericNode from './genericNode';

export const ExampleNode1 = ({data}) => {
    const [currText, setCurrText] = useState(data?.text || '{{input}}');
  
    const handleTextChange = (e) => {
      setCurrText(e.target.value);
    }

    return (
      <GenericNode nodeType="Text">
          <label>
            Text:
            <input 
              type="text"
              value={currText}
              onChange={handleTextChange}  
              style={{
                fontFamily: 'cursive'
              }}
            />
          </label>
      </GenericNode>
    );
  
  }