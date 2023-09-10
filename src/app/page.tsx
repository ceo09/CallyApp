import { BackgroundVideo, Aboutus } from "./components" 
import { Planner } from "./utils/utils";

export default async function Home() {
  const planners = await Planner(5, 'Nigeria');
  console.log(planners)
  return (
    <>
    <BackgroundVideo />
    <Aboutus />
    </>
    
  )
}
