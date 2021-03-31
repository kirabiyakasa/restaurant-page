import image from './restaurant-image.png';

const content = (() => {
  const contentContainer = document.getElementById('content');
  const imageTag = `<img src="${image}" id="top-image">`;
  const headline = '<div id="headline">Really Good Eating</div>';
  const imageContainer = `<div id="image-container">${imageTag}` +
                            `${headline}</div>`;
  const description = '<p id="description">The food, is good.<br>' +
  'Also, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
  'eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';

  const load = () => {
    contentContainer.innerHTML += 
    `<section id="top-bar">${imageContainer}</section>` +                           
    `<section id="middle-section">${description}</section>`;
  };

  return { load }
})();

export { content }
