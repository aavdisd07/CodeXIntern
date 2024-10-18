const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e349bcc3cfmshfe2b4ef884e1f5ap12b8fcjsnde9e23f72737",
    "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
  },
};

const btn = document.querySelector("#btn");
const textArea = document.querySelector("#textArea");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  var link = document.querySelector("#url").value;
  const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${link}&lang=en&engine=2`;

  textArea.innerHTML = "Loading ...Plz wait!!!";
  if (
    !/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
      link
    )
  ) {
    textArea.innerText = "Invalid URl !!";
  } else {
    fetch(url, options)
      .then((data) => data.json())
      .then((data) => {
        textArea.innerText = data.summary;
      })
      .catch((error) => {
        console.log("error");
      });
  }
});
