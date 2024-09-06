async function crawURL(url) {
  const response = await fetch(url);
  // const html = await response.text();
  const html = await response.json();

  console.log(html);
  // const doc = new DOMParser().parseFromString(html, 'text/html');
  // const title = doc.querySelector('title').textContent;
  // return title;
  // how to get the content of the page and write it to a file .html

  // const fs = require("fs");
  // fs.writeFile("index.html", html, (err) => {
  //   if (err) throw err;
  //   console.log("The file has been saved!");
  // });
}

crawURL("https://www.amazon.com");
