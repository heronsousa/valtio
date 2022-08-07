import { Nodes } from './components/Nodes';
import { rootNodes } from './utils/store';

export default function App() {
    return (
        <Nodes nodes={rootNodes} />
    );
}
