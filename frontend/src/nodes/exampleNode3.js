//Example node 3: mock CSV query loader
import { Handle, Position } from 'reactflow';

import GenericNode from './genericNode';

export const ExampleNode3 = ({id}) => {

    return (
        <GenericNode nodeType="CSV Loader">
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
                <span>Queries a CSV for a specific result</span>
            </div>
        </GenericNode>
    )
}