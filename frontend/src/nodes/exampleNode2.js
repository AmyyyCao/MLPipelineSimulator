//Example node 2: mock url loader

import { Handle, Position } from 'reactflow';

import GenericNode from './genericNode';

export const ExampleNode2 = ({ id}) => {

    return (
        <GenericNode nodeType="URL Loader">
            <div>
                <Handle
                    type="source"
                    position={Position.Right}
                    id={`${id}-value`}
                />
                <Handle
                    type="target"
                    position={Position.Left}
                    id={`${id}-output`}
                />
                <span>Reads data from a URL</span>
            </div>
        </GenericNode>
    )
}