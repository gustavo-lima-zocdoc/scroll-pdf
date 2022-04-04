/* eslint-disable no-undef */
import {useRef,useEffect} from 'react';

function App() {
  // https://pdfobject.com/#api
  const pdfobject = useRef(null);
  useEffect(() => {
    if(pdfobject.current){
      PDFObject.embed("file.pdf", pdfobject.current);
    }
  }, [pdfobject.current]);
  return (
    <div id="example1" ref={pdfobject} style={{width:'100%',height:'500px'}} />
  );
}

export default App;
