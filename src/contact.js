const contact = (() => {
  const info = {
    nameFirst: 'kira',
    nameLast: 'biyakasa',
    phone: '123-456-7890',
    email: 'example@email.com'
  };
  const contactContainer = document.createElement('div');
  contactContainer.id = 'contact-container';

  const loadTab = (tabContentContainer) => {
    const name = document.createElement('p');
    const phone = document.createElement('p');
    const email = document.createElement('p');

    name.innerHTML = '<b>Name:</b> ' + info.nameFirst + ' ' + info.nameLast;
    phone.innerHTML = '<b>Phone:</b> ' + info.phone;
    email.innerHTML = '<b>Email:</b> ' + info.email;

    contactContainer.innerHTML = '';

    [name, phone, email].forEach( field => {
      field.className = 'contact-info-field';
      contactContainer.appendChild(field)
    });
    tabContentContainer.appendChild(contactContainer)
  };
  return { loadTab }
})();

export { contact }
