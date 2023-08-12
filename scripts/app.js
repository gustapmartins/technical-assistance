import { Home } from '../Pages/Home.js'

function render(component, container) {
    container.innerHTML = '';
    container.appendChild(component);
}

function App() {
    const appContainer = document.createElement('main');

    const buttonComponent = new Home();
    
    appContainer.appendChild(buttonComponent.render());
    
    return appContainer;
}

const root = document.getElementById('root');
render(App(), root);
