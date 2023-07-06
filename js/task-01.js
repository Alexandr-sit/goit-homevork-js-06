const listWithId = document.querySelector("#categories").children.length;
console.log("Number of categories:", listWithId)
const menuItemsByClass = document.querySelectorAll("h2");
menuItemsByClass.forEach(element => {
    console.log("Category:", element.textContent)
    console.log("Elements:", element.nextElementSibling.children.length)
    
});