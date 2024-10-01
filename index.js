function showPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => loadData(data));
}

function loadData(photos) {
  const photoContainer = document.getElementById("photo-container");
  for (photo of photos) {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
     <h2>ID: ${photo.id}</h2>
      <h3>Title: ${photo.title}</h3>
      <p>URL: ${photo.url}</p>
      <p>Thumbnail Url: ${photo.thumbnailUrl}</p>
    `;
    photoContainer.appendChild(createDiv);
    console.log(photo);
  }
}
showPhotos();
