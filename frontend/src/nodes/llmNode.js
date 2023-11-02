// llmNode.js

import GenericNode from './genericNode';

export const LLMNode = ({ id, data }) => {

  return (
    <GenericNode nodeType="LLM">
      <div>
         <span>This is a LLM.</span>
       </div>
    </GenericNode>
  )
}
