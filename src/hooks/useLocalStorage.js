import { useContext } from "react";
import {LocalStorageContext} from "../contexts/LocalStorageProvider";

const useLocalStorage = () => useContext(LocalStorageContext);

export default useLocalStorage;
