import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { storage } from "../../firebase";
import { useParams } from "react-router-dom";

interface FileUpload {
    file: File | null;
    url: string | null;
  }

const ProviderLoggedIn = () => {
    const { id } = useParams<{ id: string }>();

    const [fileUpload, setFileUpload] = useState<FileUpload>({ file: null, url: null });

    const handleButtonClick1 = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.jpg,.jpeg,.png,.pdf';
        input.onchange = (event) => handleFileUpload(event as any);
        input.click();
    };

    const handleButtonClick2 = () => {
        //trig func for contract
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
            <button onClick={() => handleButtonClick1()}>Upload Requirements</button>
            <button onClick={() => handleButtonClick2()}>Payment (For Testing)</button>
        </div>
    );
};

export default ProviderLoggedIn;
