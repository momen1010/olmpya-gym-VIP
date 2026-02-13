// ===== Dark / Light Mode =====
document.addEventListener("DOMContentLoaded", function () {

    // Dark Mode Toggle
    const toggleBtn = document.getElementById("themeToggle");
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // ===== Counters =====
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            let count = +counter.innerText;
            const inc = target / 200;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // ===== EmailJS + WhatsApp Form =====
    emailjs.init("MCY4smX2J_9LNKusY"); // ضع المفتاح العام هنا

    const joinForm = document.getElementById("joinForm");
    joinForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;

        // ارسال الايميل
        emailjs.send("service_y2hkg9l", "template_l4nnxx8", {
            name: name,
            phone: phone
        }).then(function (response) {
            alert("Registration Successful! We will contact you soon.");

            // فتح واتساب تلقائي
            const message = `New Gym Member:%0AName: ${name}%0APhone: ${phone}`;
            window.open(`https://wa.me/201556507666?text=${message}`, "_blank");

            joinForm.reset();

        }, function (error) {
            alert("Something went wrong. Try again.");
            console.log(error);
        });
    });

});
