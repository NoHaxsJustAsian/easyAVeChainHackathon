import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { storage } from "../../firebase";
import { useParams } from "react-router-dom";

interface FileUpload {
    file: File | null;
    url: string | null;
  }

const UserLoggedIn = () => {
    const { id } = useParams<{ id: string }>();
    const [fileUpload, setFileUpload] = useState<FileUpload>({ file: null, url: null });

    const handleButtonClick1 = () => {
        <input type="file" onChange={handleFileUpload} />
        {fileUpload.url && <img src={fileUpload.url} alt="Uploaded file" />}
    };

    const handleButtonClick2 = () => {
        //funct check money from contract
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          const downloadURL = await uploadFileToStorage(file, `${id}`);
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
            <button onClick={() => handleButtonClick1()}>Upload Health Data</button>
            <button onClick={() => handleButtonClick2()}>Check Button (For Testing)</button>
        </div>
    );
};

export default UserLoggedIn;