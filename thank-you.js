document.getElementById("year").textContent = new Date().getFullYear();

const referBtn = document.getElementById("referBtn");
const referMessage = document.getElementById("referMessage");

referBtn.addEventListener("click", () => {
  const referralText = "Join me on BuildEz – the platform connecting homeowners and contractors! Sign up at https://buildez.io";
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(referralText).then(() => {
      referMessage.textContent = "✅ Referral link copied! Share it with your friends.";
    });
  } else {
    referMessage.textContent = "Copy this link: https://buildez.io";
  }
});

