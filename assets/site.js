const papers = [...document.querySelectorAll('article[data-tags]')];
const search = document.querySelector('#search');
const tag = document.querySelector('#tag');
const empty = document.querySelector('#empty');
const paperTags = paper => paper.dataset.tags.split(',');
const tags = [...new Set(papers.flatMap(paperTags))];

function filterPapers() {
  const keyword = search.value.trim().toLowerCase().replaceAll('關注度', '投資人注意力');
  for (const paper of papers) {
    paper.hidden = !paper.textContent.toLowerCase().includes(keyword) ||
      (tag.value !== '' && !paperTags(paper).includes(tag.value));
  }
  empty.hidden = papers.some(paper => !paper.hidden);
}

for (const name of tags) tag.add(new Option(name, name));
for (const paper of papers) {
  const group = paper.querySelector('.tags');
  group.replaceChildren(...paperTags(paper).map(name => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = name;
    button.addEventListener('click', () => { tag.value = name; filterPapers(); });
    return button;
  }));
}

function revealPaper() {
  const match = papers.find(paper => '#' + paper.id === location.hash);
  if (!match) return;
  if (match.hidden) {
    tag.value = '';
    search.value = '';
    filterPapers();
  }
  match.scrollIntoView();
}

search.addEventListener('input', filterPapers);
tag.addEventListener('change', filterPapers);
window.addEventListener('hashchange', revealPaper);
