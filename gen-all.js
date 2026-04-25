const fs = require('fs');
const p = '/d/work/portfolio/src/components';
fs.writeFileSync(p+"/Cursor.tsx","export function Cursor(){return(<span className=\"inline-block w-2.5 h-5 bg-[var(--color-terminal-accent)] animate-pulse\"/>);}");
