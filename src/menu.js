const menu = (() => {
  const menuItems = ['item1', 'item2', 'item3'];

  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-container';
  const itemList = document.createElement('ol');

  const loadTab = (tabContentContainer) => {
    itemList.innerHTML = '';

    menuItems.forEach( menuItem => {
      let listItem = document.createElement('li');
      listItem.innerHTML = menuItem;
      listItem.className = 'menu-item';
      itemList.appendChild(listItem)
    });
    menuContainer.innerHTML = '';
    menuContainer.appendChild(itemList)

    tabContentContainer.appendChild(menuContainer)
  };

  return { loadTab }
})();

export { menu }
