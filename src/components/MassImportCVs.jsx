import React, { useState } from 'react';
import axios from 'axios';

function MassImportCVs() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append(`files[${i}]`, selectedFiles[i]);
        }
        // console.log(formData);
        try {
            const response = await axios.post('http://127.0.0.1:5000/mass_extract_text', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            <input type="file" accept=".pdf" multiple onChange={handleFileChange} />
            <button onClick={handleSubmit}>Extract Text from Multiple PDFs</button>
        </div>
    );
}

export default MassImportCVs;
