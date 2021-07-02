import './style.css';
import Navigation from '../Navigation';

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <header>
                    <h1>Marina Delneri</h1>
                    <h2>mgdelneri</h2>
                </header>
                <nav>
                    <Navigation />
                </nav>
            </div>
        </div>
    )
};

export default Home;
