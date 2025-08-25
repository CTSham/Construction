# BuildEz Landing Page

**BuildEz** is a professional, high-converting landing page for a platform that connects homeowners with contractors. This project is built using **HTML, CSS, and JavaScript**, with a mobile-responsive design, email signup form, and a full styled thank-you page including referral functionality.

---

## 🌟 Features

- Clean, modern, construction-themed design
- Responsive and mobile-friendly
- Email signup form (mock local storage; can integrate with Mailchimp, HubSpot, or serverless backend)
- Tabbed signup for Homeowners & Contractors
- Confirmation message on submit
- Full styled **thank-you page** with referral link copy
- SEO-friendly structure (meta tags, OpenGraph, JSON-LD)
- Easily deployable as a static site

---

## 📂 File Structure

buildez-landing/
│── index.html # Main landing page
│── style.css # Main CSS file
│── script.js # Main JS file for landing page
│── thank-you.html # Full styled thank-you page
│── thank-you.css # CSS for thank-you page
│── thank-you.js # JS for referral copy feature
│── README.md # Project documentation


---

## 💻 Installation / Setup

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/buildez-landing.git

Navigate into the project folder:
cd buildez-landing

Open index.html in your browser to preview locally.

⚙️ Usage / Deployment
Email signup:
Currently, form submissions are stored in localStorage. To integrate with Mailchimp or HubSpot, update script.js in the sendToProvider function with your API or embedded form action URL.
Redirect to thank-you page:
Update the signup form submission to:

window.location.href = "thank-you.html";

Deploy to a host:
Upload the files to a static host such as Netlify, Vercel, or GitHub Pages.

🛠 Tech Stack
HTML5
CSS3 (Flexbox, Grid, Responsive Design)
JavaScript (ES6)
LocalStorage for mock email capture

🔗 Live Demo
(Replace with your live deployment URL once available)
https://buildez.io

📄 License
This project is licensed under the MIT License — see the LICENSE file for details.


---
