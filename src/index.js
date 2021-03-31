import { content } from './content';
import { menu } from './menu';
import { contact } from './contact';
import './index.css';

content.load()

const tabContainer = document.createElement('div');
tabContainer.id = 'tab-container';
document.body.appendChild(tabContainer)

const tabButtonContainer = document.createElement('div');
tabButtonContainer.id = 'tab-button-container'
tabContainer.appendChild(tabButtonContainer)

function createTabButton(tabName) {
  const tabButton = document.createElement('a');
  tabButton.className = 'tab-button';
  tabButton.innerHTML = tabName;
  tabButtonContainer.appendChild(tabButton)

  return tabButton
}
const menuTabButton = createTabButton('Menu');
const contactTabButton = createTabButton('Contact');

// Add content container to tab container
const tabContentContainer = document.createElement('div');
tabContentContainer.id = 'tab-content-container';
tabContainer.appendChild(tabContentContainer)

// Set Menu as default tab
menu.loadTab(tabContentContainer)
menuTabButton.style.backgroundColor = 'tomato';
contactTabButton.style.backgroundColor = 'grey';

// Tab button events
menuTabButton.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'tomato'
  contactTabButton.style.backgroundColor = 'grey'

  tabContentContainer.innerHTML = '';
  menu.loadTab(tabContentContainer)
});

contactTabButton.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'tomato'
  menuTabButton.style.backgroundColor = 'grey'

  tabContentContainer.innerHTML = '';
  contact.loadTab(tabContentContainer)
});
