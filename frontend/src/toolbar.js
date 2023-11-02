// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'fixed', bottom: '20px', left: '0' }}>
            <div style={{ width: '60%', background: '#343541', padding: '10px', borderRadius: '15px', display: 'flex', justifyContent: 'space-around' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='cursiveText' label='Cursive' />
                <DraggableNode type='url' label='URL' />
                <DraggableNode type='csv' label='CSV' />
                <DraggableNode type='youtube' label='YouTube' />
                <DraggableNode type='arxiv' label='Arxiv' />
            </div>
        </div>
    );
};
