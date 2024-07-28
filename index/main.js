function toShowA1() {
    // alert('Hi');
    const showenBlock = document.querySelector(".A1");
    showenBlock.style.display = 'block';
}
function isHideA1() {
    const showenBlock = document.querySelector(".A1");
    showenBlock.style.display = 'none';
}

function toShowB21() {
    const showenBlock = document.querySelector(".B21");
    showenBlock.style.display = 'block';
}
function isHideB21() {
    const showenBlock = document.querySelector(".B21");
    showenBlock.style.display = 'none';
}

function toShowB71() {
    const showenBlock = document.querySelector(".B71");
    showenBlock.style.display = 'block';
}
function isHideB71() {
    const showenBlock = document.querySelector(".B71");
    showenBlock.style.display = 'none';
}

function toShowB111() {
    const showenBlock = document.querySelector(".B111");
    showenBlock.style.display = 'block';
}
function isHideB111() {
    const showenBlock = document.querySelector(".B111");
    showenBlock.style.display = 'none';
}

function toShowB25() {
    const showenBlock = document.querySelector(".B25");
    showenBlock.style.display = 'block';
}
function isHideB25() {
    const showenBlock = document.querySelector(".B25");
    showenBlock.style.display = 'none';
}

function toShowB83() {
    const showenBlock = document.querySelector(".B83");
    showenBlock.style.display = 'block';
}
function isHideB83() {
    const showenBlock = document.querySelector(".B83");
    showenBlock.style.display = 'none';
}

function toShowB93() {
    const showenBlock = document.querySelector(".B93");
    showenBlock.style.display = 'block';
}
function isHideB93() {
    const showenBlock = document.querySelector(".B93");
    showenBlock.style.display = 'none';
}


const blockA1 = document.querySelector(".A1 ul");
a1.forEach((item) => {
    blockA1.innerHTML += `<li><a href="А.1 основы Промбезоп/${item.name}.jpg" target="_blank"><span>${item.name}</span></a></li>`;
});

const blockB21 = document.querySelector(".B21 ul");
b21.forEach((item) => {
    blockB21.innerHTML += `<li><a href="Б.2.1 Экспл об нефт и газПромышл/${item.name}.jpg" target="_blank"><span>${item.name}</span></a></li>`;
});

const blockB71 = document.querySelector(".B71 ul");
b71.forEach((item) => {
    blockB71.innerHTML += `<li><a href="Б.7.1 экспл сетей газораспред и газПотр/${item.name}.jpg" target="_blank"><span>${item.name}</span></a></li>`;
});

const blockB111 = document.querySelector(".B111 ul");
b111.forEach((item) => {
    blockB111.innerHTML += `<li><a href="Б.1.11 безоп вед ГОР, Огн и Рем раб/${item.name}.jpg" target="_blank"><span>${item.name}</span></a></li>`;
});

const blockB25 = document.querySelector(".B25 ul");
b25.forEach((item) => {
    blockB25.innerHTML += `<li><a href="Б.2.5 нефтПромыслТрПр неф и газа/${item.name}.jpg" target="_blank"><span>${item.name}</span></a></li>`;
});

const blockB83 = document.querySelector(".B83 ul");
b83.forEach((item) => {
    blockB83.innerHTML += `<li><a href="Б.8.3 ОПО сосуды раб под давл/${item.name}.jpg" target="_blank"><span>${item.name}</span></a></li>`;
});

const blockB93 = document.querySelector(".B93 ul");
b93.forEach((item) => {
    blockB93.innerHTML += `<li><a href="Б.9.3 экспл ОПО на кот исп подъемные сооруж/${item.name}.jpg" target="_blank"><span>${item.name}</span></a></li>`;
});