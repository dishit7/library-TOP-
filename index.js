let i=0;
const mylibrary=[];


let firstCard=document.getElementsByClassName("cards")[0];
    let container=document.getElementsByClassName("container")[0];
    removeBookfunctionality();

function Book(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
}


function addBooktoLibrary(){
var objectName="myLibrary"+i;
console.log(objectName);
var a=document.getElementsByClassName("title")[0].value;
var b=document.getElementsByClassName("author")[0].value;
var c = document.getElementsByName("pages")[0].value;

console.log(document.getElementsByClassName("title")[0].value);
var objectName= new Book(document.getElementsByClassName("title")[0].value,document.getElementsByClassName("author")[0].value,
document.getElementsByName("pages")[0].value);//document.getElementsByClassName("pages")[1].value)
i=i+1;
mylibrary.push(objectName);
duplicateDiv(a,b,c);
//removeBookfunctionality();

}

function duplicateDiv(title,author,pages){
    let duplicateCard = firstCard.cloneNode(true);
    duplicateCard.getElementsByClassName("Title")[0].innerHTML=title;
    duplicateCard.getElementsByClassName("Author")[0].innerHTML=author;
    duplicateCard.getElementsByClassName("pages")[0].innerHTML=pages;
    let removeButton = duplicateCard.querySelector(".remove-book");
    removeButton.addEventListener("click", function(){
        const element= this.parentNode;
        element.remove();
        i=i-1;
    });
    container.appendChild(duplicateCard);
     
    return 0;
};
 
function removeBookfunctionality(){
 for(let j=0;j<=i;j++){
    document.querySelectorAll(".remove-book")[j].addEventListener("click",function(){
    const element= this.parentNode;
    element.remove();
    i=i-1;
}) 
}
}

document.querySelector(".form-creation").addEventListener("click",(e) => {
    document.getElementsByClassName("Book Details")[0].style.visibility="visible";

})
/*
function removeBookfunctionality(){
    let removeButtons = document.querySelectorAll(".remove-book");
    for(let j=0; j<removeButtons.length; j++){
        removeButtons[j].addEventListener("click",function(){
            const element= this.parentNode;
            element.remove();
            i=i-1;
        }) 

    }
}
*/