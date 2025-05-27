
import "./Team.css";
import TeamDirectory from "../components/teamPage/TeamDirectory";
import CustomSidebar from "../components/navbar/CustomSidebar";
import TeamHeader from "../components/teamPage/TeamHeader";
import Navbar from "../components/navbar/Navbar";


export default function Team(){


  return(
    <>
   <div className= "page-container">

    <Navbar/>
    <TeamHeader/>
    <CustomSidebar/>
    <TeamDirectory/>

    </div>
    </>
  )

}