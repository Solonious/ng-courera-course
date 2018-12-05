const config = {
  host: 'http://localhost:3000'
};

export const endpoints = {
  getArticles: ()=>`${config.host}/articles`,
  getArticle: (id)=> `${config.host}/article/${id}`,
  getTopics: ()=> `${config.host}/topics`,
  getTopic: (id)=> `${config.host}/topic/${id}`
};
