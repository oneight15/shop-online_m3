const blogElement = document.querySelector('.blog');

const loadPosts = async (cb) => {
  const res = await fetch('https://gorest.co.in/public-api/posts');
  const data = await res.json();

  return data;
};

const renderPosts = async () => {
  const data = await loadPosts();

  const cardsWrapper = document.createElement('div');
  cardsWrapper.classList.add('blog__container');

  const blogList = document.createElement('ul');
  blogList.classList.add('blog__list');

  const posts = data.data.map((item, index) => {
    const card = document.createElement('li');
    card.classList.add('blog__card', 'card');
    card.innerHTML = `
      <img src="https://loremflickr.com/400/400?${index}" alt="Изображение карточки" class="card__image">
      <h2 class="card__title">${item.title}</h2>
    `;

    return card;
  });

  blogList.append(...posts);
  cardsWrapper.append(blogList);
  blogElement.append(cardsWrapper);
};

renderPosts();
