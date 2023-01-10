//Main Container

const mainContainer = document.querySelector(".mainContainer");

const starIcon = document.createElement("div");
starIcon.innerHTML= `<img class="starIcon" src="../images/icon-star.svg">`;
starIcon.classList.add("starIconDiv")

const titleH1 = document.createElement("h1")
titleH1.innerHTML = `<h1>How did we do?</h1>`
titleH1.classList.add("titleH1")

const paragraph = document.createElement("div")
paragraph.innerHTML = `<p class="paragraph">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>`

const rateList = document.createElement("ul")
rateList.classList.add("rateList")
rateList.innerHTML=`<button class="rates">1</button>
                    <button class="rates">2</button>
                    <button class="rates">3</button>
                    <button class="rates">4</button>
                    <button class="rates">5</button>`


const btnSubmit = document.createElement("button");
btnSubmit.innerHTML=`SUBMIT`
btnSubmit.classList.add("btnSubmit")

mainContainer.appendChild(starIcon);
mainContainer.appendChild(titleH1)
mainContainer.appendChild(paragraph)
mainContainer.appendChild(rateList)
mainContainer.appendChild(btnSubmit)

//Thank You Container

const thankYouContainer = document.querySelector(".thankYouContainer");
thankYouContainer.classList.add("hidden");

const thankYouIcon = document.createElement("div");
thankYouIcon.innerHTML= `<img class="thankYouIcon" src="../images/illustration-thank-you.svg">`;
thankYouIcon.classList.add("thankYouIconDiv")


const rateThankYou = document.createElement("div")
rateThankYou.innerHTML = `<p>You selected <span id="spanRate"></span> out of 5</p>`
rateThankYou.classList.add("rateThankYou")



const titleH1ThankYou = document.createElement("h1")
titleH1ThankYou.innerHTML = `<h1>Thank You!</h1>`
titleH1ThankYou.classList.add("titleH1")

const paragraphThankYou = document.createElement("div")
paragraphThankYou.innerHTML = `<p class="paragraphThankYou">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>`

thankYouContainer.appendChild(thankYouIcon)
thankYouContainer.appendChild(rateThankYou)
thankYouContainer.appendChild(titleH1ThankYou)
thankYouContainer.appendChild(paragraphThankYou)

//Button Click Submit

btnSubmit.addEventListener("click", ()=>{
    mainContainer.classList.add("hidden");
    thankYouContainer.classList.remove("hidden");
})

const rates = document.querySelectorAll(".rates");
rates.forEach((rate)=>{
    rate.addEventListener("click", ()=>{
        let spanRate = document.getElementById("spanRate")
        spanRate.innerHTML = rate.innerHTML;
    })
})