import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import IngredientDetail from "./pages/IngredientDetail";
import Cosmetics from "./pages/Cosmetics";
import Skinboosters from "./pages/Skinboosters";
import Fillers from "./pages/Fillers";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/ingredient/:id"} component={IngredientDetail} />
        <Route path={"/cosmetics"} component={Cosmetics} />
        <Route path={"/skinboosters"} component={Skinboosters} />
        <Route path={"/fillers"} component={Fillers} />
        <Route path={"/admin"} component={Admin} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
