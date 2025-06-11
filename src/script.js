const btnShortURL = document.querySelector("#btn-shorter");
const inputLink = document.querySelector("#input-link");
const urlToCopy = document.querySelector("#url-to-copy");
const urlDiv = document.querySelector(".url");
const btnCopy = document.querySelector("#btn-copy");
const divNavMobile = document.querySelector("#div-nav-mobile");
const buttonMobile = document.querySelector("#menu-mobile");




btnShortURL.addEventListener("click", () => {
  const value = inputLink.value;

  if (value) {
    // Use of API
    const inputBody = { url: `${value}`, expiry: "5m" };
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      
    };
  }
 fetch("https://corsproxy.io/?https://cleanuri.com/api/v1/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url:"https://www.google.com"})
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
        if (shortUrl == undefined) {
          return alert("Invalid URL");
        } else {
          urlDiv.classList.remove("hidden");
          urlToCopy.innerHTML = shortUrl;
        }
      })
      .catch((error) => {
        
        console.error("Error :", error);
      });
      
    
         else return false;


btnCopy.addEventListener("click", () => {
  alert("URL incorect");
});

buttonMobile.addEventListener("click", () => {
  if (divNavMobile.style.display == "block") {
    divNavMobile.style.display = "none";
  } else {
    divNavMobile.style.display = "block";
  }
});
