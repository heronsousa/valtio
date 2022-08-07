import { useSnapshot } from "valtio";
import { INode } from "../../utils/store";
import { NewNode } from "../NewNode";
import { Node } from "../Node";

export const Nodes = ({ nodes }: { nodes: INode[] }) => {
    const snap = useSnapshot(nodes);
    return (
        <ul>
            {snap.map(({ id }, index) => (
                <Node key={id} node={nodes[index]} />
            ))}
            <NewNode nodes={nodes} />
        </ul>
    )
};