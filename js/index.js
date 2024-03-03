const loadData = async () => { //all card data show
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const resJson = await res.json()
    const data = resJson.posts
    showCardData(data)
}
const showCardData = (data) => { //html card data show
    data.forEach(cardData => {
        console.log(cardData);
        const cardContainer = document.getElementById('card-container')
        const card = document.createElement('div')
        card.innerHTML = `
        <div class="card w-full lg:w-[772px] bg-base-100 shadow-xl my-10">
        <div class="card-body bg-[#F3F3F5] rounded-3xl">
          <div class="flex text-[#12132DCC]">
            <p class=""><span># </span> ${cardData.category}</p>
            <p class=""><span>Author :</span>${cardData.author.name}</p>
          </div>
          <a href="#"
            class="flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 my-4">
            <div class="relative">
                <img class="w-20 h-20 rounded-full" src="${cardData.image}" alt="">
                <span class="top-0 left-14 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#12132D]">${cardData.title}</h5>
              <p class="mb-3 font-normal text-[#12132D99]">${cardData.description}</p>
            </div>
          </a>
          <hr>
          <div class="flex justify-between items-center">
            <div class="flex gap-2">
              <img src="icon/tabler-icon-message-2.png" alt=""><span id="">${cardData.comment_count}</span>
              <img class="ml-2 lg:ml-10" src="icon/tabler-icon-eye.png" alt=""><span id="">${cardData.view_count}</span>
              <img class="ml-2 lg:ml-10" src="icon/tabler-icon-clock-hour-9.png" alt=""><span id="">${cardData.posted_time}</span>
            </div>
            <div class=""><button onclick="mainButton('${cardData.title}','${cardData.view_count}')"><img src="icon/email 1.png" alt=""></button></div>
          </div>
        </div>
      
        `
        cardContainer.appendChild(card);
    });

}
const mainButton = (titel, viewCount) => { //card button click
    // console.log(titel,viewCount);
    const emailCard = document.getElementById('email-card-container');
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="flex justify-between my-8">
        <h4 class="text-[#12132D]">${titel}</h4>
        <div class="flex gap-2 items-center ml-24 text-[#12132D99]">
        <img src="icon/tabler-icon-eye.png" alt=""><span>${viewCount}</span>
        </div>
    </div>
    `
    emailCard.appendChild(div)
    markCount()
}
let count = 0
const markCount = () => {
    document.getElementById('mark-as-read').innerHTML = (count + 1)
    console.log(count);
}
loadData()
