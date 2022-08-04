import React from 'react';
import Banner from './Banner';
import Technology from './Technology';
import Editor from './Editor';
import Contact from './contact';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Technology></Technology>
            <Editor></Editor>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;