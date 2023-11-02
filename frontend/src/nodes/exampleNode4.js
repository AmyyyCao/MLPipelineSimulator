//Example node 4:  mock YouTube loader

import { Handle, Position } from 'reactflow';

import GenericNode from './genericNode';

export const ExampleNode4 = ({id}) => {

    return (
        <GenericNode nodeType="YouTube Loader">
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
                <span>Reads transcript from a YouTube video.</span>
            </div>
        </GenericNode>
    )
}