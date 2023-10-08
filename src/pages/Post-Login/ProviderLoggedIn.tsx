import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { storage } from "../../firebase";

interface FileUpload {
    file: File | null;
    url: string | null;
  }

const ProviderLoggedIn = () => {
    const [fileUpload, setFileUpload] = useState<FileUpload>({ file: null, url: null });

    const handleButtonClick1 = () => {
        <input type="file" onChange={handleFileUpload} />
        {fileUpload.url && <img src={fileUpload.url} alt="Uploaded file" />}
    };

    const handleButtonClick2 = () => {
        //trig func for contract
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const downloadURL = await uploadFileToStorage(file, 'images/profile.jpg');
        setFileUpload({ file, url: downloadURL });
      }
    };

    const uploadFileToStorage = async (file: File, path: string): Promise<string> => {
        const storageRef = ref(storage, path);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    };

    return (
        <div>
            <button onClick={() => handleButtonClick1()}>Upload Requirements</button>
            <button onClick={() => handleButtonClick2()}>Payment (For Testing)</button>
        </div>
    );
};

export default ProviderLoggedIn;
