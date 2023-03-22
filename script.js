const leftBtn = document.querySelector(".fa-arrow-left");
const rightBtn = document.querySelector(".fa-arrow-right");
const img = document.querySelector("#img");

let count = 1;

const imgs = [
  "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1613336026275-d6d473084e85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHJhbmRvbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1542978709-19c95dc3bc7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHJhbmRvbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHJhbmRvbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1609017909889-d7b582c072f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxyYW5kb218ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

const slide = (count) => {
  img.classList.remove("kenburns-top"); // remove animation
  img.src = imgs[count - 1]; // array index starts from 0; thats why imgs[count-1] used
  setTimeout(() => {
    img.classList.add("kenburns-top");
  }, 100); // add animation after 100milisecond
};

slide(count);
// left button click event
leftBtn.addEventListener("click", () => {
  count--; // decrease count number
  if (count < 1) count = imgs.length; // if count number is less then 1 then make count = imgs.length to show the last img
  slide(count); // call slider
});
// right button click event
rightBtn.addEventListener("click", () => {
  count++; // increase count number
  if (count > imgs.length) count = 1; // if count number is less then 1 then make count = 1 to show the first img
  slide(count); // call slider
});

setInterval(() => {
  count++;
  slide(count);
}, 3000);
