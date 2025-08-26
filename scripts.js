document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const userType = document.getElementById("userType");
    const tradeField = document.getElementById("tradeField");
    const form = document.getElementById("signupForm");
    const formStatus = document.getElementById("formStatus");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            userType.value = tab.dataset.type;
            tradeField.style.display = tab.dataset.type === "contractor" ? "block" : "none";
            });
        });

        form.addEventListener("submit", e => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Example: Mock save (localStorage)
            let signups = JSON.parse(localStorage.getItem("signups") || "[]");
            signups.push(data);
            localStorage.setItem("signups", JSON.stringify(signups));

            form.reset();
            formStatus.textContent = "✅ Thank you! You're on the waitlist.";
     });
});
