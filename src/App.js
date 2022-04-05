import {useEffect,useRef} from 'react';
import WebViewer from '@pdftron/webviewer';

import { data } from "./pdffile";

function App() {
  const viewer = useRef(null);
  const base64ToBlob = base64 => {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; ++i) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return new Blob([bytes], { type: 'application/pdf' });
  };
  useEffect(() => {
    WebViewer(
      {
        path: '/lib',
      },
      viewer.current,
    ).then((instance) => {
        const { UI, Core: { documentViewer } } = instance;
        
        UI.loadDocument(base64ToBlob(data), { filename: `baby.pdf` });
      });
  }, []);
  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
    </div>
  );
}

export default App;
