import React from 'react';
import FileBase64 from 'react-file-base64';
import TopNavigation from '../components/TopNavigation/TopNavigation';
const FileBase64Pages = () => {
    return (
        <div>
            <TopNavigation title="File Base 64" />
            <h2>File Base 64</h2>
            <FileBase64
                multiple={true}
                onDone={convertedImg => console.log(convertedImg)}
            />
        </div>
    )
}

export default FileBase64Pages;