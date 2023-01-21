
function getBookList(event) {
  let searchInputTxt = event.target.value;
  if (searchInputTxt) {
    console.log(searchInputTxt);
    fetch( `https://www.googleapis.com/books/v1/volumes?q=${searchInputTxt}&startIndex=20&maxResults=20&orderBy=newest`
    )
     .then((response) => response.json())
      .then(function (data) {
       console.log(data);
        const books = data.items.map((elem) => {
          return {
            title: elem.volumeInfo.title,
            publishedDate: elem.volumeInfo.publishedDate,
           thumbnail: elem?.volumeInfo?.imageLinks?.thumbnail,
         authors: elem?.volumeInfo?.authors?.join(", "),
          };
        });
       console.log(books);