const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");
const currentYear = document.querySelector("#current-year");

if (currentYear instanceof HTMLElement) {
    currentYear.textContent = String(new Date().getFullYear());
}

if (contactForm instanceof HTMLFormElement) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        const formData = new FormData(contactForm);
        const name = formData.get("Name");
        const email = formData.get("Email");
        const subject = formData.get("Subject");
        const message = formData.get("Message");
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
        const mailto = `mailto:haseebutt895@gmail.com?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
        if (contactStatus instanceof HTMLElement) {
            contactStatus.textContent = "Your email app should open with your message ready to send.";
        }
    });
}