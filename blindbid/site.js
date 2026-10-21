// The ONE place the support email lives. Every page fills its
// [data-email] links from here.
const SUPPORT_EMAIL = "brax6@icloud.com";

document.querySelectorAll("[data-email]").forEach((el) => {
  const subject = el.getAttribute("data-subject");
  el.href = "mailto:" + SUPPORT_EMAIL + (subject ? "?subject=" + encodeURIComponent(subject) : "");
  if (!el.textContent.trim()) el.textContent = SUPPORT_EMAIL;
});
