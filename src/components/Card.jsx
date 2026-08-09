import Header from "./Header"
import '../App.css'
import MainContent from "./MainContent"
import ViewResume from "./ViewResume"

const Card = () => {
  return (
    <div className="card">
        <Header/>
        <MainContent/>
        <ViewResume/>
    </div>
  )
}

export default Card