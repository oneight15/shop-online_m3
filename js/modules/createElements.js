import * as fn from './functions.js';

export const createCardsWrapper = () => {
  const cardsWrapper = document.createElement('div');
  cardsWrapper.classList.add('blog__container');

  return cardsWrapper;
};

export const createBlogList = () => {
  const blogList = document.createElement('ul');
  blogList.classList.add('blog__list');

  return blogList;
};

export const createContent = (article) => {
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('article__content');

  const contentTitle = document.createElement('h2');
  contentTitle.classList.add('article__title');
  contentTitle.textContent = article.data.title;

  const contentText = document.createElement('p');
  contentText.classList.add('article__text');
  contentText.textContent = article.data.body;

  const contentFooter = document.createElement('div');
  contentFooter.classList.add('article__footer');

  const contentLink = document.createElement('a');
  contentLink.classList.add('article__link-back');
  contentLink.href = 'blog.html';
  contentLink.textContent = 'К списку статей';

  const contentAuthor = document.createElement('p');
  contentAuthor.classList.add('article__author');
  contentAuthor.textContent = article.data.user_id;

  contentFooter.append(contentLink, contentAuthor);
  contentWrapper.append(contentTitle, contentText, contentFooter);

  return contentWrapper;
};

export const createSidebar = () => {
  const sidebar = document.createElement('aside');
  sidebar.classList.add('article__sidebar', 'sidebar');

  const sidebarList = document.createElement('ul');
  sidebarList.classList.add('sidebar__list');
  sidebarList.innerHTML = `
    <li class="sidebar__item">
      <h3 class="sidebar__title">
        <a href="#" class="sidebar__link">
          Горящие туры в Стамбул от&nbsp;20&nbsp;000 руб.
        </a>
      </h3>
      <p class="sidebar__subtitle">Окунись в настоящую восточную сказку</p>
    </li>

    <li class="sidebar__item">
      <h3 class="sidebar__title">
        <a href="#" class="sidebar__link">
          Новый RENAULT DUSTER
        </a>
      </h3>
      <p class="sidebar__subtitle">Легендарный внедорожник в новом дизайне</p>
    </li>
  `;

  sidebar.append(sidebarList);

  return sidebar;
};

export const createArticleWrapper = () => {
  const articleWrapper = document.createElement('div');
  articleWrapper.classList.add('article__container');

  return articleWrapper;
};

export const createPaginationElem = () => {
  const paginationElem = document.createElement('div');
  paginationElem.classList.add('pagination');

  const paginationList = fn.createList(3, 'pagination__item');
  paginationList.classList.add('pagination__list');

  const paginationBtnLeft = document.createElement('button');
  paginationBtnLeft.classList.add('pagination__btn', 'pagination__btn_left');

  const paginationBtnRight = document.createElement('button');
  paginationBtnRight.classList.add('pagination__btn', 'pagination__btn_right');

  paginationElem.append(paginationList, paginationBtnLeft, paginationBtnRight);

  return paginationElem;
};
