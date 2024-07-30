import { Routes, Route } from "react-router-dom";
import Sidebar from "./Pages/global/Sidebar";
import Dashboard from "./Pages/Dashboard";
import AddOwnerPage from "./Pages/AddOwnerPage";
import AddApartmentPage from "./Pages/AddApartmentPage";
import CreateContractPage from "./Pages/CreateContractPage";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={true} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/addOwnerPage" element={<AddOwnerPage />} />
              <Route path="/addApartmentPage" element={<AddApartmentPage />} />
              <Route path="/createContractPage" element={<CreateContractPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
