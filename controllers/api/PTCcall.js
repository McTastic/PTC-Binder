// const router = require("express").Router();

// const apiCall = async (callParameters) => {
//   console.log("Calling api...");
//   let baseApiURL = `https://api.pokemontcg.io/v2/cards/?q=`;

//   const keys = Object.keys(callParameters);
//   //   console.log(keys);
//   let apiURL = "";
//   keys.forEach((key, index) => {
//     // console.log(`${key}: ${callParameters[key]}`);
//     if (apiURL.length === 0) {
//       apiURL = `${baseApiURL}${key}:${callParameters[key]}`;
//     } else {
//       apiURL = `${apiURL}&${key}:${callParameters[key]}`;
//     }
//   });
//   console.log(apiURL);
//   const apiData = await fetch(apiURL, {
//     method: "GET",
//     //TODO use variable once server is up and running
//     // headers: { "X-API-KEY": X_API_KEY },
//   });

//   const results = await apiData.json();
//   console.log(results);
//   return results;
//   //   const htmlBody = document.getElementsByTagName("main")[0];
//   //   console.log(results.count);
//   //   for (let i = 0; i < results.count; i++) {
//   //     console.log(i);
//   //     console.log(results.data[i]);
//   //     const htmlCard = document.createElement("img");
//   //     htmlCard.src = results.data[i].images.small;
//   //     htmlBody.appendChild(htmlCard);
//   //   }
// };

// router.get("/", async (req, res) => {
//   try {
//     // const apiData = await apiCall({
//     //   name: "charizard",
//     //   types: "fire",
//     //   Pagesize: "10",
//     // });
//     const dataStream = await got.stream({
//       url: "https://api.pokemontcg.io/v2/cards/",
//       qs: {
//         name: "charizard",
//       },
//     });
//     pipeline(dataStream, res, (err) => {
//       console.log(res);
//       if (err) {
//         console.log(err);
//       }
//     });
//     console.log("Success...");
//     res.status(200).json(dataStream);
//     // res.render("cards", apiData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// module.exports = router;
