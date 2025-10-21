import React, { useState } from "react";
//the (hover watchlist)buy button is using this guy's openbywindow,and BuyActionWindow is using closebywindow
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  // openBuyWindow: (uid) => {},
  // closeBuyWindow: () => {},
    openActionWindow: (uid,mode)=> {},
    closeActionWindow: ()=> {}
});

export const GeneralContextProvider = (props) => {
  const [isActionWindowOpen, setIsActionWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedMode,setSelectedMode] = useState("BUY");

  const handleOpenActionWindow = (uid,mode) => {
    setIsActionWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedMode(mode);
  };

  const handleCloseActionWindow = () => {
    setIsActionWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openActionWindow: handleOpenActionWindow,
        closeActionWindow: handleCloseActionWindow,
      }}
    >
      {props.children}
      {isActionWindowOpen && <BuyActionWindow uid={selectedStockUID} mode={selectedMode} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;