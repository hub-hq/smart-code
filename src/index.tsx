import { createRoot } from 'react-dom/client';
import Home from 'src/pages/Home';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(<Home />);
