import { useSnapshot } from "valtio";


export const NodeValue = ({ value }: { value: { text: string } }) => {
    const { text } = useSnapshot(value);
    return <div>{text}</div>;
}