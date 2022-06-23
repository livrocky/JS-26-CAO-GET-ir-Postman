// const baseUrl = 'https://zany-skitter-caper.glitch.me/experiences';
// const cardsContEl = document.querySelector('.right');

// // 2. Naudojant JS, pasifetch'inti experience ir skills sritis ir jas atvaizduoti (su createElement/append) vietoj esamo HTML kodo. Čia bus du atskiri fetch'ai į https://zany-skitter-caper.glitch.me/experiences ir https://zany-skitter-caper.glitch.me/skills.

// async function getPosts() {
//   const resp = await fetch(baseUrl);
//   const posts = await resp.json();
//   console.log('posts ===', posts);

//   renderCards(posts, cardsContEl);
//   if (posts.success === true) {
//     renderCards(posts.data, cardsContEl);
//   }
// }
// getPosts();

// function renderCards(cardsArr, dest) {
//   dest.innerHTML = '';
//   cardsArr.forEach((cObj) => {
//     dest.append(renderCard(cObj));
//   });
// }

// function renderCard(cardObj) {
//   const divEl = document.createElement('div');
//   divEl.className = 'cv-data';
//   divEl.innerHTML = `<div class="dates">
//   <p class="worktime"><b>${cardObj.startYear} - ${cardObj.finishYear}</b></p>
//   <p class="workplace">${cardObj.companyName}</p>
// </div>
// <div class="positions">
//   <p class="job-title"><b>${cardObj.position}</b></p>
//   <p class="job-description">${cardObj.description}</p>
// </div>`;

//   return divEl;
// }

// ATKOMENTUOK VISA FAILA JEI REIKAI INDEX FAILO SU FETCHU //
