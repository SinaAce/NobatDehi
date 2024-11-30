// اضافه کردن یک رویداد کلیک به دکمه "بیشتر"
document.getElementById("moreInfo").addEventListener("click", function () {
  // انتخاب المان بیوگرافی دکتر
  const bio = document.getElementById("doctorBiography");

  // بررسی اینکه آیا باکس بیوگرافی در حالت "collapsed" است یا خیر
  const isCollapsed = bio.classList.contains("collapsed");

  // تغییر کلاس‌های بیوگرافی برای باز یا بسته کردن آن
  if (isCollapsed) {
    // اگر بیوگرافی در حالت بسته باشد، کلاس "collapsed" را حذف و کلاس "expanded" را اضافه می‌کند
    bio.classList.remove("collapsed");
    bio.classList.add("expanded");

    // تغییر ارتفاع بیوگرافی برای نمایش کامل محتوای آن
    bio.style.maxHeight = "none"; // نمایش کامل محتوای بیوگرافی
  } else {
    // اگر بیوگرافی در حالت باز باشد، کلاس "expanded" را حذف و کلاس "collapsed" را اضافه می‌کند
    bio.classList.remove("expanded");
    bio.classList.add("collapsed");

    // تغییر ارتفاع بیوگرافی برای بازگشت به حالت سه خط
    bio.style.maxHeight = "calc(1.5em * 3)"; // ارتفاع سه خط
  }

  // انتخاب المان متن دکمه برای تغییر متن آن
  const textSpan = this.querySelector("span");

  // تغییر متن دکمه بین "بیشتر" و "کمتر"
  textSpan.textContent = isCollapsed ? "کمتر" : "بیشتر";

  // تغییر کلاس دکمه برای اعمال استایل چرخش آیکون
  this.classList.toggle("expanded", isCollapsed);
});
