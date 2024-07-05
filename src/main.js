const cardContainer = document.querySelector('.card-container');
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', handlerSearch);

function handlerSearch(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const queryValue = form.elements.query.value.toLowerCase();

  getPicturesByQuery(queryValue)
    .then(data => renderImgCard(data.hits))
    .catch(onFetchError)
    .finally(() => form.reset());
}

function onFetchError(err) {
  console.error('Fetch Error:', err);
}

function getPicturesByQuery(query) {
  const API_KEY = '44784729-ebc9a0f5cc587c2700d41657d';
  const imageType = 'photo';
  const orientation = 'horizontal';
  const safeSearch = true;

  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
}

getPicturesByQuery()
  .then(data => console.log(data))
  .catch(err => console.error('Fetch Error : ', err));

function renderImgCard(images) {
  cardContainer.innerHTML = '';
  return images
    .map(
      ({ largeImageURL, previewURL, likes, views, comments, downloads }) =>
        `<ul class="gallery">
        <li class="gallery-item">
            <img src="${previewURL}" alt="" />
                <ul class="galery-item-description">
                    <li>
                        <p>Likes</p>
                        <p>${likes}</p>
                    </li>
                    <li>
                        <p>Views</p>
                        <p>${views}</p>
                    </li>
                    <li>
                        <p>Comments</p>
                        <p>${comments}</p>
                    </li>
                    <li>
                        <p>Downloads</p>
                        <p>${downloads}</p>
                    </li>
                </ul>
        </li>
    </ul>
      `
    )
    .join('');
}
cardContainer.insertAdjacentHTML('afterbegin', renderImgCard(imeges));
