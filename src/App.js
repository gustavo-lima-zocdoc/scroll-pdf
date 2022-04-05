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
        fullAPI: true,
      },
      viewer.current,
    ).then((instance) => {
        const { UI, Core: { Annotations, annotationManager, documentViewer } } = instance;

        // UI.disableElement('searchButton');
        // UI.setTheme('dark');
        // UI.enableElements(['readerPageTransitionButton']);

        const { disableFeatures, Feature } = instance.UI;
        disableFeatures([Feature.Download]);
        disableFeatures([Feature.Print]);
        disableFeatures([Feature.FilePicker]);
        disableFeatures([Feature.NotesPanel]);
        disableFeatures([Feature.Annotations]);
        disableFeatures([Feature.TextSelection]);
        disableFeatures([Feature.Ribbons]);

        annotationManager.setPermissionCheckCallback(() => false);


        UI.loadDocument(base64ToBlob(data), { filename: `baby.pdf` });
        documentViewer.addEventListener('documentLoaded', () => {
          UI.setFitMode(UI.FitMode.FitWidth);
          
          const rectangleAnnot = new Annotations.RectangleAnnotation();
          rectangleAnnot.PageNumber = 2;
          // values are in page coordinates with (0, 0) in the top left
          rectangleAnnot.X = 100;
          rectangleAnnot.Y = 550;
          rectangleAnnot.Width = 200;
          rectangleAnnot.Height = 50;
    
          annotationManager.addAnnotation(rectangleAnnot);
          // need to draw the annotation otherwise it won't show up until the page is refreshed
          annotationManager.redrawAnnotation(rectangleAnnot);

          annotationManager.jumpToAnnotation(rectangleAnnot);
        })
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
