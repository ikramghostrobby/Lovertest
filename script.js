function cekCinta() {
  let nama1 = document.getElementById("nama1").value;
  let nama2 = document.getElementById("nama2").value;
  let hasil = document.getElementById("hasil");

  if (nama1 === "" || nama2 === "") {
    hasil.innerHTML = "😭 Isi dulu namanya!";
    return;
  }

  // Loading effect
  hasil.innerHTML = "💘 Menghitung cinta...";

  setTimeout(() => {

    // Random persen
    let persen = Math.floor(Math.random() * 101);

    let pesan = "";

    if (persen > 80) {
      pesan = "💖 Cocok banget!";
    } else if (persen > 50) {
      pesan = "😍 Lumayan cocok!";
    } else {
      pesan = "😅 Coba lagi besok...";
    }

    hasil.innerHTML =
      `${nama1} ❤️ ${nama2}<br>
      ${persen}%<br>
      ${pesan}&<100>`;

  }, 2000); // delay 2 detik
}
