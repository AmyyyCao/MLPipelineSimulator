import React from 'react';
import { Handle, Position } from 'reactflow';

const GenericNode = ({
    id,
    nodeType,
    children
}) => {
    const renderHandle = () => {
        if (nodeType === 'Text') {
            return (
                <Handle
                    type="source"
                    position={Position.Right}
                    id={`${id}-output`}
                />
            );
        } else if (nodeType === 'Input') {
            return (
                <Handle
                    type="source"
                    position={Position.Right}
                    id={`${id}-value`}
                />
            );
        } else if (nodeType === "LLM") {
            return (
                <div>
                    <Handle
                        type="target"
                        position={Position.Left}
                        id={`${id}-system`}
                        style={{ top: `${100 / 3}%` }}
                    />
                    <Handle
                        type="target"
                        position={Position.Left}
                        id={`${id}-prompt`}
                        style={{ top: `${200 / 3}%` }}
                    />
                    <Handle
                        type="source"
                        position={Position.Right}
                        id={`${id}-response`}
                    />
                </div>
            );
        } else if (nodeType === 'Output') {
            return (
                <Handle
                    type="target"
                    position={Position.Left}
                    id={`${id}-output`}
                />
            )
        } else {
            return null;
        }
    };

    return (
        <div style={{
            width: 300, border: '1px solid #6366F1', borderRadius: '10px',
            borderBottomColor: '#6366F1',
            borderBottomStyle: 'solid',
            backgroundColor: '#fff'
        }}>
            <div style={{ display: 'flex', backgroundColor: '#6366F1', justifyContent: 'center', color: '#fff', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
                <span>{nodeType || 'Node'}</span>
            </div>
            <div style={{ minHeight: '80px', padding: '10px', boxSizing: 'border-box' }}>
                {children}
            </div>
            {renderHandle()}
        </div>
    );

};

export default GenericNode;