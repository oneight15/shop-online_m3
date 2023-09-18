import renderPosts from './modules/renderBlog.js';

renderPosts();

document.body.addEventListener('click', e => {
  const target = e.target;
  const parent = target.closest('.card__title');
  const idPost = parent.dataset.id;
  localStorage.setItem('id', `${idPost}`);
});
