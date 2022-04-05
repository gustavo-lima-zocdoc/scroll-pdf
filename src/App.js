/* eslint-disable no-undef */
import {useRef,useEffect} from 'react';
import PDFObject from 'pdfobject';
import { data } from "./pdffile";

function App() {
  // https://pdfobject.com/#api
  const pdfobject = useRef(null);
  const goToPage = `#page=3`;
  const goToNamedDestination = `#nameddest=destination`;
  useEffect(() => {
    if(pdfobject.current){
      PDFObject.embed(`${data}${goToNamedDestination}`, pdfobject.current);
    }
  }, [pdfobject.current]);
  return (
    <div id="example1" ref={pdfobject} style={{width:'100%',height:'500px'}} />
  );
}

export default App;
