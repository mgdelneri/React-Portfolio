import './style.css';
import Navigation from '../../Navigation';
import Header from '../../Header';
import Footer from '../../Footer';

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <Header />
                <Navigation />
                <img src={`${process.env.PUBLIC_URL}/1610386138656.jpeg`} alt="Marina Delneri" id="myphoto"/>
            </div>
            <Footer />
        </div>
    )
};

export default Home;
