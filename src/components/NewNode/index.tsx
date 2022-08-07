import { useState } from "react";
import { appendNode, INode } from "../../utils/store";

export const NewNode = ({ nodes }: { nodes: INode[] }) => {
    const [text, setText] = useState("");

    const add = () => {
        appendNode(nodes, { text });
        setText("");
    };

    return (
        <li>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text ..."
            />
            <button disabled={!text} onClick={add}>
                Add
            </button>
        </li>
    );
};