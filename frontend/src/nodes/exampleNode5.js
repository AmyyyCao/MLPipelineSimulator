//Example node 5:  mock Arxiv loader

import { Handle, Position } from 'reactflow';

import GenericNode from './genericNode';

export const ExampleNode5 = ({id}) => {

    return (
        <GenericNode nodeType="Arxiv Loader">
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
                <span>Reads data from Arxiv.</span>
            </div>
        </GenericNode>
    )
}