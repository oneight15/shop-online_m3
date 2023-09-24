import * as consts from './consts.js';
import * as create from './createElements.js';

export const getArticle = async (cb) => {
  const res = await fetch(`https://gorest.co.in/public-api/posts/${consts.idPost}`);
  const post = await res.json();

  return post;
};

export const renderArticle = async () => {
  const article = await getArticle();
  const articleWrapper = create.createArticleWrapper();
  const articleContent = create.createContent(article);
  const articleSidebar = create.createSidebar();

  articleWrapper.append(articleContent, articleSidebar);
  consts.articleElement.append(articleWrapper);
};

