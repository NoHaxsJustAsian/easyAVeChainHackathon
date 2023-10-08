import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { storage } from "../../firebase";
import { useParams } from "react-router-dom";
import { Connex } from '@vechain/connex';
import { getFirestore, collection, doc, getDoc, DocumentSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import docs from "./docs.jpg";


interface FileUpload {
    file: File | null;
    url: string | null;
  }

const UserLoggedIn = () => {
    const { id } = useParams<{ id: string }>();
    const [fileUpload, setFileUpload] = useState<FileUpload>({ file: null, url: null });
    
    const connex = new Connex({
      node: 'https://testnet.veblocks.net/',
      network: 'test'
    })

    const [balance, setBalance] = useState<string>('');

    const handleButtonClick1 = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.jpg,.jpeg,.png,.pdf';
        input.onchange = (event) => handleFileUpload(event as any);
        input.click();
    };

    const handleButtonClick2 = async () => {
        const userRef = doc(collection(db, "users"), id);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const walletID = userData?.walletID;
          if (walletID) {
            getAddressBalance(walletID);
          }
        }
      };

    const getAddressBalance = async (address: string) => {
        //const account = await connex.thor.account(address).get();
        //const balance = account.balance.toString();
        const account = connex.thor.account(address);
        account.get().then(accInfo => {
          const balance = accInfo.balance
          setBalance(parseInt(balance, 16).toString())
        })
        setBalance(balance);
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
        <div className="flex justify-center py-4 px-8">
          <img src={docs} alt="Docs" />
        </div>
          <div className="flex justify-center py-4 px-8 space-x-4">
            <button className="font-bold block w-full rounded border border-purple-500 bg-cyan-500 px-12 py-3 text-sm text-white hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline" onClick={() => handleButtonClick1()}>Upload Health Data</button>
            <button className="font-bold block w-full rounded border border-purple-500 bg-cyan-500 px-12 py-3 text-sm text-white hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline" onClick={() => handleButtonClick2()}>Check Balance Button (For Testing)</button>
          </div>
          <div className="flex justify-center py-4 px-8">
            <p>Balance: {balance}</p>
          </div>
        </div>
      );
};

export default UserLoggedIn;