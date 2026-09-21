import quotes from "./quotes.js";

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyQuoteBtn = document.getElementById("copyQuoteBtn");
const toast = document.getElementById("toast");
const speechQuoteBth = document.getElementById("speechBtn");

let toastTimeout = null;

function displayNewQuote() {
  let index = Math.round(Math.random() * 50);

  quoteText.textContent = quotes[index].q;
  quoteAuthor.textContent = quotes[index].a;
  newQuoteBtn.setAttribute("disabled", "");
  setTimeout(() => {
    newQuoteBtn.removeAttribute("disabled");
  }, 700);
}

function showToast(message) {
  if (toastTimeout) clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
    toastTimeout = null;
  }, 2000);
}

async function copyCurrentQuote() {
  if (!quoteText.textContent) return;
  const textToCopy = `"${quoteText.textContent}" — ${quoteAuthor.textContent}`;
  try {
    await navigator.clipboard.writeText(textToCopy);
    showToast("Quote copied to clipboard ");
  } catch (err) {
    showToast("Copy Failed");
  }
}

function Speech() {
  try {
    const s = new SpeechSynthesisUtterance(quoteText.textContent);
    s.lang = "en-Us";
    s.rate = 1;
    s.pitch = 1;

    speechSynthesis.speak(s);
  } catch (e) {
    showToast(e);
  }
}

export {
  displayNewQuote,
  copyCurrentQuote,
  Speech,
  
  quoteText,
  newQuoteBtn,
  copyQuoteBtn,
  speechQuoteBth,
  toast,
};

