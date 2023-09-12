import { BackgroundVideo, Aboutus } from "./components" 
import { Planner } from "./utils/utils";
import TravelCard from "./components/travelSect"

export default async function Home() {
  const planners = await Planner(5, 'Nigeria');
  console.log(planners)
  return (
  <div>
    
    <TravelCard />
  </div>
    )
}
