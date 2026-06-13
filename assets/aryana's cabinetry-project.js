// Popup window
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector(".close-btn");
const button2 = document.querySelector(".button2");
setTimeout(() => {
  popup.classList.add("popup");
}, 3000);
function closepop() {
  popup.classList.remove("popup");
}
closeBtn.addEventListener("click", closepop);
button2.addEventListener("click", closepop);
// Burger menu
const burger = document.querySelector("#burger");

function menu() {
  const navItems = document.querySelectorAll(".nav-item");
  for (const navItem of navItems) {
    if (navItem.classList.contains("nav-item-show")) {
      navItem.classList.remove("nav-item-show");
    } else {
      navItem.classList.add("nav-item-show");
    }
  }
}
burger.addEventListener("click", menu);
// Comment content
const commentList = [
  {
    name: "شخص مورد نظر",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.",
    image: "images/IMG_20260504_152402.png",
  },
  {
    name: "شخص مورد نظر",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.",
    image: "images/IMG_20260504_152402.png",
  },
  {
    name: "شخص مورد نظر",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله د.",
    image: "images/IMG_20260504_152402.png",
  },
  {
    name: "شخص مورد نظر",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.",
    image: "images/IMG_20260504_152402.png",
  },
  {
    name: "شخص مورد نظر",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.",
    image: "images/IMG_20260504_152402.png",
  },
  {
    name: "شخص مورد نظر",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.",
    image: "images/IMG_20260504_152402.png",
  },
];
const result = commentList
  .map(function (comment) {
    return `<figure class="comment-item">
            <img
              src="${comment.image}"
              alt=${comment.name}
              class="comment-item-image"
            />
            <figcaption class="comment-item-text">
              <h3>${comment.name}</h3>
              <p>
                ${comment.content}
              </p>
            </figcaption>
          </figure>`;
  })
  .join("");
const commentItemDiv = document.querySelector("#comment-items");
commentItemDiv.innerHTML = result;
// Comment animation
const commentItem = document.querySelectorAll(".comment-item");
const observer = new IntersectionObserver(
  function (items) {
    for (let item of items) {
      if (item.isIntersecting) {
        item.target.classList.add("comment-item-animation");
      } else {
        item.target.classList.remove("comment-item-animation");
      }
    }
  },
  {
    threshold: 0.1,
  },
);

for (const comment of commentItem) {
  observer.observe(comment);
}
// Form
const form = document.querySelector("#form");
function validation(event) {
  if (event.target.name === "phone") {
    const englishnumber = /^[0-9]*$/;
    if (!englishnumber.test(event.target.value)) {
      event.target.value = "";
      alert("لطفا عدد وارد کنید 🙏");
    }
  }
}
form.addEventListener("keyup", validation);

function submit(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll(".input");
  let error = "";
  for (const input of inputs) {
    if (!input.value) {
      error = error + `\n${input.title} نباید خالی باشد`;
    }
  }
  if (error) {
    alert(error);
  } else {
    alert("ارسال درخواست");
  }
}
form.addEventListener("submit", submit);
