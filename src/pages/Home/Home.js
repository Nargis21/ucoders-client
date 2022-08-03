import React from 'react';
import Banner from './Banner';
import Technology from './Technology';
import Editor from './Editor';
import Contact from './contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Technology></Technology>
            <Editor></Editor>
            <Contact></Contact>
        </div>
    );
};

export default Home;