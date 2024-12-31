import { Button } from "@/components/ui/button"
import Calendar from "@/components/Calendar"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import NewDay from "@/components/NewDay"
import ScorePage from "@/components/ScorePage"
import Layout from "@/components/Layout"
import DailyReflection from "@/components/DailyReflection"
import TotalScore from "@/components/TotalScore"
import { getDailyData } from "@/utils/dailyStorage"
import Logs from "@/components/Logs"
import AboutUs from "@/components/AboutUs"
import LandingPage from "@/components/LandingPage"
import NotFound from "@/components/NotFound"

function MainContent() {
  const navigate = useNavigate();
  const dailyData = getDailyData();
  const hasTasks = dailyData?.tasks && dailyData.tasks.length > 0;

  return (
    <Layout>
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
        <Button 
          onClick={() => navigate('/new-day')} 
          className="bg-zinc-700 hover:bg-zinc-600"
        >
          {hasTasks ? "VIEW TODAY'S GOALS" : "START YOUR DAY"}
        </Button>

        <div className="min-w-[300px] max-w-[350px] flex items-center justify-center mb-8">
          <Calendar />
        </div>
      </div>
    </Layout>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<MainContent />} />
        <Route path="/new-day" element={<NewDay />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/reflect" element={<Layout><DailyReflection /></Layout>} />
        <Route path="/total-score" element={<TotalScore />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppWrapper;