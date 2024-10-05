// BASE CONST

const header = document.querySelector("header");
const headerHeight =  header.getBoundingClientRect().height;

// TABS START
const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");

const unselectButtons = () =>{
    tabsBtns.forEach(tab => tab.classList.remove("active"));
}
const hideTabs = () =>{
    tabsItems.forEach(tab => tab.classList.add("hide"));
}

const selectBtn = index => {
    tabsBtns[index].classList.add("active")
}
const showTab = index => {
    tabsItems[index].classList.remove("hide")
}

const defaultTabs = () => {
    unselectButtons();
    hideTabs();
    
    selectBtn(0);
    showTab(0);
}

defaultTabs();

tabsBtns.forEach((btn, i) => { 
    btn.addEventListener("click", () => {
        unselectButtons();
        hideTabs();

        selectBtn(i);
        showTab(i);
    })
});
// TABS END

// ANCHORS START
const anchorsBtns = document.querySelectorAll(".header__navbar li>a");

anchorsBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();

        const id = btn.getAttribute("href").substring(1);

        const anchorPoint = document.getElementById(id);        

        window.scroll({
            top: anchorPoint.getBoundingClientRect().top - headerHeight,
            behavior: 'smooth'
        })
    })
});



// ANCHORS END