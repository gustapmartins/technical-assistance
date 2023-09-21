import { Home } from '../Pages/Home.js'
import { GlobalStyles } from '../Styles/Global.styles.js';

function render(component, container) {
    container.innerHTML = '';
    container.appendChild(component);
}

function App() {
    const appContainer = document.createElement('main');
    new GlobalStyles().applyStyles();

    const HomePage = new Home();
    
    appContainer.appendChild(HomePage.render());
    
    return appContainer;
}

const root = document.getElementById('root');

render(App(), root);
