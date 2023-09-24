import * as consts from './consts.js';
import * as create from './createElements.js';

const loadPosts = async (cb) => {
  const res = await fetch('https://gorest.co.in/public-api/posts');
  const data = await res.json();

  return data;
};

const renderPosts = async () => {
  const data = await loadPosts();
  const cardsWrapper = create.createCardsWrapper();
  const blogList = create.createBlogList();
  const paginationElem = create.createPaginationElem();

  const posts = data.data.map((item, index) => {
    const card = document.createElement('li');
    card.classList.add('blog__card', 'card');
    card.innerHTML = `
      <img src="https://loremflickr.com/400/400?${index}" alt="Изображение карточки" class="card__image">
      <h2 class="card__title" data-id=${item.id}>
        <a class="card__link" href="article.html">${item.title}</a>
      </h2>
    `;

    return card;
  });

  blogList.append(...posts);
  cardsWrapper.append(blogList);
  consts.blogElement.append(cardsWrapper, paginationElem);
};

export default renderPosts;
