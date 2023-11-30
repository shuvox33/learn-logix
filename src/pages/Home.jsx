import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import Feature1 from "../components/Home/Feature1";
import Feedback from "../components/Home/Feedback";
import JoinTeacher from "../components/Home/JoinTeacher";
import Partners from "../components/Home/Partners";
import PopularClass from "../components/Home/PopularClass";
import Statistics from "../components/Home/Statistics";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partners></Partners>
            <PopularClass></PopularClass>
            <Feedback></Feedback>
            <Statistics></Statistics>
            <JoinTeacher></JoinTeacher>
            <Feature1></Feature1>
            <Contact></Contact>
        </div>
    );
};

export default Home;