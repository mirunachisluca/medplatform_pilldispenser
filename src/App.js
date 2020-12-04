import { SnackbarProvider } from "notistack";
import "./App.css";
import { MedicationDispenser } from "./dispenser/MedicationDispenser";

function App() {
  return (
    <SnackbarProvider>
      <div className="App">
        <MedicationDispenser />
      </div>
    </SnackbarProvider>
  );
}

export default App;
