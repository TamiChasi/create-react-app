import { createContext } from "react";

export const packageContext = createContext({
    packageData : {},
    packageId: null,
    searchTime: null
});