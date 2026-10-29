// Through the Gap pages: wire every "email us" link to the one support inbox.
document.addEventListener("DOMContentLoaded", () => {
  const user = "brax6", host = "icloud.com";
  document.querySelectorAll("[data-email]").forEach((link) => {
    const address = `${user}@${host}`;
    const subject = link.getAttribute("data-subject");
    link.setAttribute("href", "mailto:" + address + (subject ? "?subject=" + encodeURIComponent(subject) : ""));
    if (!link.textContent.trim()) link.textContent = address;
  });
});
