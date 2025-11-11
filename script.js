// Fade-in sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-section').forEach(section => observer.observe(section));

// Smooth scroll for Get Started
document.getElementById("get-started").addEventListener("click", () => {
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
});

// Chat Functionality
const chatBtn = document.getElementById("open-chat-btn");
const aiChatContainer = document.getElementById("ai-chat-container");
const closeChatBtn = document.getElementById("close-chat-btn");
const chatForm = document.getElementById("ai-chat-form");
const chatInput = document.getElementById("ai-chat-input");
const chatMessages = document.getElementById("ai-chat-messages");

// Open chat
chatBtn.addEventListener("click", () => {
  aiChatContainer.classList.add("show");
  chatInput.focus();
});

// Close chat
closeChatBtn.addEventListener("click", () => {
  aiChatContainer.classList.remove("show");
});

// Send message
function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  // User message
  const userMsgEl = document.createElement("div");
  userMsgEl.classList.add("user-message");
  userMsgEl.textContent = message;
  chatMessages.appendChild(userMsgEl);

  chatInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // AI response placeholder
  const aiMsgEl = document.createElement("div");
  aiMsgEl.classList.add("ai-message");
  aiMsgEl.textContent = "Nebula is thinking...";
  chatMessages.appendChild(aiMsgEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  setTimeout(() => {
    aiMsgEl.textContent = "Hello! I’m Nebula AI. How can I assist you today?";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1200);
}

// Handle form submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});