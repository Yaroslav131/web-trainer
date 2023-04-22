import Header from "./Header/Header";
import SideBar from "./Sidebar/Sidebar"
import './MainPage.css'
import ExerciseBlock from "./ExerciseBlock/ExerciseBlock"
import Footer from "./Footer/Footer"
import '../HelpWindow/HelpWindow.css'
import '../../reset.css'

interface Iprops {
    excersisesTitle: string
}

export default function MainPage(props: Iprops) {
    return (
        <div className={"main-page"} >
            <div className="main">
                <Header headerTitle={props.excersisesTitle} />
                <ExerciseBlock/>
                <Footer />
            </div>
            <SideBar />
        </div >
    )
}