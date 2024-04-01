import React, { useState } from 'react';
import axios from 'axios';

function UploadPDF() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('filename', selectedFile.name); // Ajoutez le nom du fichier à la FormData
        // console.log(formData);
        try {
            const response = await axios.post('http://127.0.0.1:5000/extract_text', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Extract Text</button>
        </div>
    );
}

export default UploadPDF;
