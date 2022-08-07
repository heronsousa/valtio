import { memo } from "react"
import { INode } from "../../utils/store"
import { Nodes } from "../Nodes"
import { NodeValue } from "../NodeValue"

export const Node = memo(({ node }: { node: INode }) => {
    return (
        <div>
            <NodeValue value={node.value} />
            <Nodes nodes={node.childNodes} />
        </div>
    )
})