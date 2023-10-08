import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { storage } from "../../firebase";
import { useParams } from "react-router-dom";
import { Connex } from '@vechain/connex';
import { getFirestore, collection, doc, getDoc, DocumentSnapshot, onSnapshot, query, where} from "firebase/firestore";
import { db } from "../../firebase";

interface FileUpload {
    file: File | null;
    url: string | null;
  }

  const smartContractAdderss = "0x20812a3fd9a2734eda90508fb895b8d5dda00b31"

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

    const connex = new Connex({
      node: 'https://testnet.veblocks.net/',
      network: 'test'
    })

    const [balance, setBalance] = useState<string>('');

    const handleButtonClick2 = async () => {
        const userRef = doc(collection(db, "users"), id);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const walletID = userData?.walletID;
          if (walletID) {
            try {
              await connex.thor
                .account(smartContractAdderss)
                .method({
                  "inputs": [
                    {
                      "internalType": "address",
                      "name": "x",
                      "type": "address"
                    }
                  ],
                  "name": "setProvider",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
                })
                .call(id)
            }
            catch {

            }
          }
        }
      };

      const getReceivingAddresses = async () => {
        const clientsRef = collection(db, "users");
        let clientWallets: Array<string> = [];
        let providerDoc = (await getDoc(doc(collection(db, "providers"), id))).data();
        let walletID = providerDoc?.walletID;
        let q = query(clientsRef, where("policyNum", "==", walletID));
        if (q !== null) {
          onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              clientWallets.push(doc.data()?.walletID);
            });
          });
        }
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
            <button className="font-bold block w-full rounded border border-purple-500 bg-cyan-500 px-12 py-3 text-sm text-white hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline" onClick={() => handleButtonClick1()}>Upload Requirements</button>
            <button className="font-bold block w-full rounded border border-purple-500 bg-cyan-500 px-12 py-3 text-sm text-white hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline" onClick={() => handleButtonClick2()}>Payment (For Testing)</button>
        </div>
    );
};

export default ProviderLoggedIn;
