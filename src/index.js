import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


function Header() {
  
    return (
        <header>
            <h1>John Wesley Burkholder IV</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

function About() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>Hello! I'm a software developer with a passion for building web applications...</p>
        </section>
    );
}

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML & CSS</li>
                <li>C</li>
            </ul>
        </section>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Skills />
                {/* You can continue adding more components like Experience, Education, etc. */}
            </main>
        </div>
    );
}

export default App;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
