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
      shoes: [],
      clothes: [],
      accessories: [],
    };

    setLoading(true);

    let querySnapshot = await getDocs(collection(db, "bags"));
    querySnapshot.forEach((doc) => {
      imageData.bags.push(doc.data());
    });

    querySnapshot = await getDocs(collection(db, "shoesImages"));
    querySnapshot.forEach((doc) => {
      imageData.shoes.push(doc.data());
    });

    querySnapshot = await getDocs(collection(db, "clothesImages"));
    querySnapshot.forEach((doc) => {
      imageData.clothes.push(doc.data());
    });

    // Fetch accessories data
    querySnapshot = await getDocs(collection(db, "glassImages"));
    querySnapshot.forEach((doc) => {
      imageData.accessories.push(doc.data());
    });

    querySnapshot = await getDocs(collection(db, "ringImages"));
    querySnapshot.forEach((doc) => {
      imageData.accessories.push(doc.data());
    });

    querySnapshot = await getDocs(collection(db, "watchImages"));
    querySnapshot.forEach((doc) => {
      imageData.accessories.push(doc.data());
    });

    querySnapshot = await getDocs(collection(db, "chainImages"));
    querySnapshot.forEach((doc) => {
      imageData.accessories.push(doc.data());
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
