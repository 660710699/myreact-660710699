import React from 'react';
// import Welcome from './Welcome';
// import Greeting from './Greeting';
// import Clock from './Clock';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#DDA0DD'

        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#9932CC',
                marginBottom: '40px',
                WebkitTextStroke: '1px white'
            }}>
                Chanthaphat Masem Profile
            </h1>


            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>

                <UserCard />
                <TodoList />
            </section>


        </div>
    );
}

export default ComponentExamples;