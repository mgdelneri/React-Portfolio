import './style.css';
import Navigation from '../Navigation';
import Header from '../Header';

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <Header />
                <Navigation />
                <img src={`{process.env.PUBLIC_URL}/1610386138656.jpeg`} alt="Marina Delneri" id="myphoto"/>
            </div>
        </div>
    )
};

export default Home;
