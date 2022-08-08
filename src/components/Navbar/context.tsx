/**
 * A React Context API for Navbar components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { NavbarContextProps, NavbarProps } from "./type";

export const NavbarContext = React.createContext<NavbarContextProps>(
  {} as NavbarContextProps
);

const NavbarProvider: React.FC<NavbarProps> = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState("");

  const contextValue = React.useMemo(
    () => ({
      activeTab,
      toggleActiveTab: setActiveTab,
    }),
    [activeTab]
  );

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
