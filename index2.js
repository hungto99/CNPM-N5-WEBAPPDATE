
function openCity(evt, cityName) {
  var i;
  var tablinks;
  var x = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  tablinks = document.getElementsByClassName("tabbutton", "");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("tab--active");
  }
  document.getElementById(cityName).style.display = "block"; 
  evt.currentTarget.className += " tab--active";

}
function changeprolife(e) {
	var x=document.getElementsByClassName("thumb");
	var y=e.target;
	var url=y.style.backgroundImage.slice(4, -1).replace(/"/g, "");
	ava=document.getElementById("avatarprolife");
	ava.src=url;
}