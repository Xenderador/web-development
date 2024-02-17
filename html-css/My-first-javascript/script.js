let button = document.querySelector('#btn1');
button.addEventListener('click', function () {
  console.log('you clicked the button');
  let h2 = document.querySelectorAll('h2');
  h2.forEach((element) => {
    console.log(element);
  });
});
