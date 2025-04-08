function openDiv(){
    let background= document.getElementsByTagName("body")[0]
    let text = document.getElementsByClassName("grap")[0]
    text.style.display="flex";
    background.style.backgroundColor="lightgrey";

}
function closeDiv(){
    let background= document.getElementsByTagName("body")[0]
    let text = document.getElementsByClassName("grap")[0]
    text.style.display="none";
    background.style.backgroundColor="lightgrey";
}