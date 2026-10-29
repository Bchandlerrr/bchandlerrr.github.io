// Hex Heist pages share one contact address; links marked data-email pick it up here.
(() => {
  const inbox = ["brax6", "icloud.com"].join("@");
  for (const link of document.querySelectorAll("a[data-email]")) {
    const topic = link.dataset.subject;
    link.href = `mailto:${inbox}${topic ? `?subject=${encodeURIComponent(topic)}` : ""}`;
    if (link.textContent.trim() === "") link.textContent = inbox;
  }
})();
