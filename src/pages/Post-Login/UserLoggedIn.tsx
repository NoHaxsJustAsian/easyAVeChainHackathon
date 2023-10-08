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
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.jpg,.jpeg,.png,.pdf';
        input.onchange = (event) => handleFileUpload(event as any);
        input.click();
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
        <div className="flex justify-center py-4 px-8 space-x-4">
            <button className="font-bold block w-full rounded border border-purple-500 bg-cyan-500 px-12 py-3 text-sm text-white hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline" onClick={() => handleButtonClick1()}>Upload Health Data</button>
            <button className="font-bold block w-full rounded border border-purple-500 bg-cyan-500 px-12 py-3 text-sm text-white hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline" onClick={() => handleButtonClick2()}>Check Button (For Testing)</button>
        </div>
    );
};

export default UserLoggedIn;