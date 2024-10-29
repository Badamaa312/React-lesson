import { errorToJSON } from "next/dist/server/render";
import { resolve } from "styled-jsx/macro";

const PromisePage = () => {
  // const doPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const skills = ["HTML", "CSS", "JS", "REACT"];
  //     if (skills.length > 0) {
  //       resolve(skills);
  //     } else {
  //       reject("Something wrong");
  //     }
  //   }, 2000);
  // });

  // doPromise
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => console.log(error));

  const data = fetch(`https:dev.to/api/articles`)
    .then((response) => response.json())
    .then((articles) => {
      console.log(articles);
    });

  console.log(data);

  return <main>PromisePage</main>;
};

export default PromisePage;
