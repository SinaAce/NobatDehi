document.getElementById("moreInfo").addEventListener("click", function () {
  const bio = document.getElementById("doctorBiography");
  if (bio.classList.contains("collapsed")) {
    bio.classList.remove("collapsed");
    bio.classList.add("expanded");
    this.classList.remove("collapsed");
    this.classList.add("expanded");
    this.textContent = "کمتر";
    this.insertAdjacentHTML(
      "afterbegin",
      `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 6.5a.5.5 0 0 1 .707 0L8 12.293 13.793 6.5a.5.5 0 0 1 .707.707l-6 6a.5.5 0 0 1-.707 0l-6-6a.5.5 0 0 1 0-.707z"
          />
        </svg>`
    );
  } else {
    bio.classList.remove("expanded");
    bio.classList.add("collapsed");
    this.classList.remove("expanded");
    this.classList.add("collapsed");
    this.textContent = "بیشتر";
    this.insertAdjacentHTML(
      "afterbegin",
      `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 6.5a.5.5 0 0 1 .707 0L8 12.293 13.793 6.5a.5.5 0 0 1 .707.707l-6 6a.5.5 0 0 1-.707 0l-6-6a.5.5 0 0 1 0-.707z"
          />
        </svg>`
    );
  }
});
