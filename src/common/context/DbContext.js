import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";

const DbContext = createContext();

const DbProvider = ({ children }) => {
  const [gameData, setGameData] = useState();
  const [loading, setLoading] = useState(false);

  const gameDataFetch = async () => {
    let imageData = {
      bags: [],
      chain: [],
      shoes: [],
      watches: [],
      clothes: [],
      glass: [],
      ring: [],
    };

    setLoading(true);
    // bags
    let querySnapshot = await getDocs(collection(db, "bags"));

    querySnapshot.forEach((doc) => {
      imageData.bags.push(doc.data());
    });

    querySnapshot = await getDocs(collection(db, "watchImages"));

    querySnapshot.forEach((doc) => {
      imageData.watches.push(doc.data());
    });

    querySnapshot = await getDocs(collection(db, "chainImages"));

    querySnapshot.forEach((doc) => {
      imageData.chain.push(doc.data());
    });

    querySnapshot = await getDocs(collection(db, "clothesImages"));

    querySnapshot.forEach((doc) => {
      imageData.clothes.push(doc.data());
    });

    querySnapshot = await getDocs(collection(db, "glassImages"));

    querySnapshot.forEach((doc) => {
      imageData.glass.push(doc.data());
    });

    querySnapshot = await getDocs(collection(db, "shoesImages"));

    querySnapshot.forEach((doc) => {
      imageData.shoes.push(doc.data());
    });

    querySnapshot = await getDocs(collection(db, "ringImages"));
    querySnapshot.forEach((doc) => {
      imageData.ring.push(doc.data());
    });

    setGameData(imageData);
    setLoading(false);
  };

  const storeGameData = async (values) => {
    try {
      const docRef = await addDoc(collection(db, "gameResults"), values);
      console.log("Game Result stored with ID:", docRef.id);
    } catch (error) {
      console.error("Error storing game result:", error);
    }
  };

  return (
    <DbContext.Provider
      value={{ gameData, gameDataFetch, loading, storeGameData }}
    >
      {children}
    </DbContext.Provider>
  );
};

const useDb = () => useContext(DbContext);

export { DbProvider, useDb };
