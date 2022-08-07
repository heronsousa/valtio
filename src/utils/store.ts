import { proxy } from "valtio";

export interface INode {
    id: number;
    value: { text: string };
    childNodes: INode[];
}

let nextId = 1;

export const rootNodes = proxy([]);

export const appendNode = (nodes: INode[], value: { text: string }) => {
    const node = { id: nextId++, value, childNodes: [] };
    nodes.push(node)
}