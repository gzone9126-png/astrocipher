function openBooking(serviceName) {
    document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
    document.getElementById("service").value = serviceName;
}
function toggleQR() {
    let qr = document.getElementById("qrBox");

    if (qr.style.display === "none") {
        qr.style.display = "block";
    } else {
        qr.style.display = "none";
    }
}
