//Header fixed onscroll part start
window.addEventListener('scroll', function(){
    const headernav = document.querySelector('.header')
    if(window.pageYOffset >= 100){
        headernav?.classList.add('bg-white',"shadow-header")
    }
    else{
        headernav?.classList.remove('bg-white', "shadow-header")
    }
})

// Accordion part start
const accordionBtn = document.querySelectorAll('.accordionBtn');
accordionBtn.forEach((btn) => {
    btn.addEventListener('click', function(event) {
        const content = btn.lastElementChild;
        const icon = btn.querySelector('.accordion-icon');
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        accordionBtn.forEach((otherBtn) => {
            const otherContent = otherBtn.lastElementChild;
            const otherIcon = otherBtn.querySelector('.accordion-icon');
            if (otherBtn !== btn) {
                otherContent.style.height = '0px';
                otherIcon.classList.remove('rotate-180');
                otherContent.classList.remove('mt-3');
                otherBtn.setAttribute('aria-expanded', 'false');
            }
        });
        if (expanded) {
            content.style.height = '0px';
            icon.classList.remove('rotate-180');
            content.classList.remove('mt-3');
        } else {
            content.style.height = `${content.scrollHeight}px`;
            icon.classList.add('rotate-180');
            content.classList.add('mt-3');
        }
        btn.setAttribute('aria-expanded', !expanded);
    });
});

//Drawer part start
const drawerdivs = document.querySelectorAll('.drawer')
const drawerSets = document?.querySelectorAll("[data-drawer]");
const closedrawers = document.querySelectorAll('.close-sidebar')
drawerSets.forEach((drawerSet)=>{
    drawerSet.addEventListener('click', function(){
        const target = document.querySelector(drawerSet.dataset.drawer)
        target.classList.add('active')
        document.body.classList.add('overflow-hidden')
    })
})
closedrawers.forEach(closedrawer=>{
    closedrawer.addEventListener('click', function(event){
        drawerdivs.forEach(drawerdiv=>{
            drawerdiv.classList.remove('active')
            document.body.classList.remove('overflow-hidden')
        })
    })
})
document?.addEventListener("click", function(event) {
    const isClickInsideDrawer = event.target.closest('.drawer-content') || event.target.closest('[data-drawer]');    
    if (!isClickInsideDrawer) {
        drawerSets?.forEach(drawerBtn => drawerBtn?.classList?.remove("active"));
        drawerdivs?.forEach(drawerDiv => drawerDiv?.classList?.remove("active"));
        document.body.classList.remove("overflow-hidden");
    }
    event.stopPropagation();
});

// Dropdown Functionality
const dropGroup = document?.querySelectorAll(".dropdown-group");
const dropList = document?.querySelectorAll(".dropdown-list");
const dropBtn = document?.querySelectorAll(".dropdown-btn");
dropBtn?.forEach((btnItem) => {
    btnItem?.addEventListener("click", () => {
        const currentGroup = btnItem?.closest(".dropdown-group");
        const currentBtn = currentGroup?.querySelector(".dropdown-btn");
        const currentList = currentGroup?.querySelector(".dropdown-list");
        const currentActive = currentGroup?.className.includes("active");
        if (currentActive) {
            currentGroup?.classList?.remove("active");
            currentList?.classList?.remove("active");
            currentBtn?.classList?.remove("active");
        }
        else {
            dropGroup?.forEach((groupItem) => {
                if (groupItem?.className?.includes("active")) {
                    groupItem?.classList?.remove("active");
                    groupItem?.querySelector(".dropdown-btn")?.classList?.remove("active");
                    groupItem?.querySelector(".dropdown-list")?.classList?.remove("active");
                }
            })
            currentGroup?.classList?.add("active");
            currentList?.classList?.add("active");
            currentBtn?.classList?.add("active");
        }
    })
})
document?.addEventListener("click", (event) => {
    dropGroup?.forEach((item) => {
        if (!item?.contains(event?.target)) {
            item?.classList?.remove("active");
            item?.querySelector(".dropdown-btn")?.classList?.remove("active");
            item?.querySelector(".dropdown-list")?.classList?.remove("active");
        }
    })
})

// Veg and Non-veg Functionality
function vegNavs() {
    let vegNavs = document?.querySelector(".veg-navs");
    for (let i = 0; i < vegNavs?.childElementCount; i++) {
        let navItem = vegNavs?.children[i];
        let navValue = false;
        navItem?.addEventListener("click", function () {
            for (let a = 0; a < vegNavs.childElementCount; a++) vegNavs?.children[a]?.classList?.remove("veg-active");
            navValue = !navValue
            if (navValue) navItem?.classList?.add("veg-active");
            else navItem?.classList?.remove("veg-active");
        })
    }
}
vegNavs();


function singleActive (parent, child,active){
    const sizetab = document.querySelector(parent)
    const sizes = sizetab?.querySelectorAll(child)
    sizes?.forEach(size =>{
        size.addEventListener('click', function(){
            sizes.forEach(item=> item.classList.remove(active))
            size.classList.add(active)
    })
})
}
singleActive('.size-tabs', 'label', 'active')
singleActive('.day-tabs', 'label', 'active')
singleActive('.payment-fieldset','label', 'active')

function groupCheck(targetElement, toggleClass) {
    let toggleElement = document?.querySelectorAll(targetElement);
    toggleElement?.forEach((itemElement) => {
        itemElement?.addEventListener("click", function () {
            let checkInput = itemElement?.querySelector("input");
            itemElement?.classList?.toggle(toggleClass);
            if (!checkInput.checked) checkInput.checked = true
            else checkInput.checked = false
        })
    })
}
groupCheck(".extra", "active");
groupCheck(".addon", "active");

//modal functionality
const modaldivs = document.querySelectorAll('.modal')
const modalSets = document?.querySelectorAll("[data-modal]");
const closemodal = document.querySelectorAll('.close-modal')
modalSets.forEach((modalSet)=>{
    modalSet.addEventListener('click', function(){
        const target = document.querySelector(modalSet.dataset.modal)
        target.classList.add('active')
        document.body.classList.add('overflow-hidden')
    })
})
closemodal.forEach(closedrawer=>{
    closedrawer.addEventListener('click', function(event){
        modaldivs.forEach(drawerdiv=>{
            drawerdiv.classList.remove('active')
            document.body.classList.remove('overflow-hidden')
        })
    })
})


function dropdownSelection(dropdown, selection) {
    let selectElement = document?.querySelectorAll(dropdown);
    let htmlElement = document?.querySelector('html');
    let toggleValue = false;

    selectElement?.forEach((selectItem) => {

        let buttonElement = selectItem?.firstElementChild;
        let paperElement = selectItem?.lastElementChild;

        let currImg = buttonElement?.querySelector("img");
        let currSpan = buttonElement?.querySelector("span");

        // get defult value from local storage
        let currFlagSource = localStorage.getItem('flagSource');
        let currLangName = localStorage.getItem('langName');
        let currDirName = localStorage.getItem('dirName');

        // set default value or localstorage value
        currImg.src = currFlagSource || '../../images/flag/united-states.png'
        currSpan.innerText = currLangName || 'english'
        htmlElement?.setAttribute('dir', currDirName || 'ltr');

        document?.addEventListener("click", function(event) {

            if(!selectItem?.contains(event?.target)) {
                toggleValue = false;
                buttonElement?.classList?.remove("active");
                paperElement?.classList?.remove("active");
            }
            else {
                if(!buttonElement) {
                    buttonElement?.classList?.remove("active");
                    paperElement?.classList?.remove("active");
                }
                else {
                    toggleValue = !toggleValue
    
                    if(toggleValue) {
                        buttonElement?.classList?.add("active");
                        paperElement?.classList?.add("active");
                    }
                    else {
                        buttonElement?.classList?.remove("active");
                        paperElement?.classList?.remove("active");
                    }
                }
            }
        })

        if(selection) {
            for(let i = 0; i < paperElement?.children?.length; i++) {
                paperElement?.children[i]?.addEventListener("click", function(event) {
    
                    let selectSrc = this?.querySelector("img")?.getAttribute("src");
                    let selectText = this?.querySelector("span")?.textContent;
                    let selectDir = this.getAttribute("data-dir");

                    localStorage.setItem('dirName', selectDir);
                    localStorage.setItem('langName', selectText);
                    localStorage.setItem('flagSource', selectSrc);
    
                    currImg.src = selectSrc
                    currSpan.innerText = selectText
                    htmlElement?.setAttribute('dir', selectDir);
                })
            }
        }
    })
}
dropdownSelection(".language-group", true);



//Cookie paper open close
window.addEventListener("DOMContentLoaded", function() {
    const cookieAlert = document.getElementById("cookie");
    const closebtn = document.querySelectorAll(".close-cookie"); 
    cookieAlert?.classList.remove("close", "sm:bottom-6");
    setTimeout(() => {
        cookieAlert?.classList.add("open");
    }, 1000);
    closebtn.forEach((btn)=>{
        btn.addEventListener('click', function() {
        cookieAlert?.classList.remove("open", "sm:bottom-6");
    })
    });
});

