// src/App.js
import React from 'react';
import UploadPDF from './components/UploadPDF';
import UploadMassPDFS from './components/MassImportCVs'

function App() {
  return (
    <div>
      <h1>PDF Text Extraction App</h1>
      <UploadPDF />
      <UploadMassPDFS/>
    </div>
  );
}

export default App;
