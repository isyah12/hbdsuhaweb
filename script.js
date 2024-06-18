// scripts.js

window.addEventListener('scroll', function() {
  const parallax1 = document.getElementById('pelangi2');
  const parallax2 = document.getElementById('bingkai');
  const parallax3 = document.getElementById('nama');
  const parallax4 = document.getElementById('bintang');

  let scrollPosition = window.pageYOffset;

  parallax1.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  parallax2.style.transform = `translateY(${scrollPosition * 0.3}px)`;
  parallax3.style.transform = `translateY(${scrollPosition * 0.7}px)`;
  parallax4.style.transform = `translateY(${scrollPosition * 0.9}px)`;
});


// scripts.js

document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("background-music");

  // Waktu di tengah untuk dimainkan (dalam detik)
  const playTimeInSeconds = 109; // contoh: mulai diputar di detik ke-30

  // Waktu berhenti pemutaran (dalam detik)
  const stopTimeInSeconds = 129; // contoh: berhenti di detik ke-90

  // Mulai audio pada waktu yang ditentukan
  audio.currentTime = playTimeInSeconds;

  // Atur agar audio berhenti pada waktu yang ditentukan
  audio.addEventListener('timeupdate', function() {
      if (audio.currentTime >= stopTimeInSeconds) {
          audio.pause();
          audio.currentTime = playTimeInSeconds; // Ulang dari awal setelah berhenti
          audio.play();
      }
  });
});
