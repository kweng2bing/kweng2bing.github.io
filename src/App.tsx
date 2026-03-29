import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavBar from "@/components/Navbar";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import Coursework from "@/pages/Coursework";

const queryClient = new QueryClient();
const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            {/* <Toaster /> */}
            {/* <Sonner /> */}
            <BrowserRouter>
                <NavBar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/coursework" element={<Coursework />} />
            </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
)

export default App;
