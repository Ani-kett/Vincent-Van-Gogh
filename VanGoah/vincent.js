function sign(){
    alert("Your Email has been submitted!")

}

const DLmode = document.getElementById("theme-stylesheet");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

let ismode1 = true;

function togglemode(){
    if(ismode1) {
        DLmode.href = "styles-dark.css";
        DLmode.textContent = "dark mode";

    }else{
        DLmode.href = "styles-light.css";
        DLmode.textContent = "light mode";
    }
    ismode1 = !ismode1;
}

function toggleTheme() {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        themeToggle.textContent = "Toggle Dark Mode";
    } else {
        body.classList.add("dark-theme");
        themeToggle.textContent = "Toggle Light Mode";
    }
}

themeToggle.addEventListener("click", toggleTheme);
themeToggle.addEventListener("click", togglemode);
