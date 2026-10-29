// Blind Bid pages: every link marked data-email becomes a mailto to the support desk.
for (const anchor of document.querySelectorAll("a[data-email]")) {
  const desk = "brax6" + String.fromCharCode(64) + "icloud.com";
  const about = anchor.dataset.subject ? "?subject=" + encodeURIComponent(anchor.dataset.subject) : "";
  anchor.href = "mailto:" + desk + about;
  if (anchor.textContent.trim().length === 0) anchor.textContent = desk;
}
