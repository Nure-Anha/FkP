function prankLogin(event) {
  event.preventDefault(); // stop form from submitting

  const username = document.getElementById("username").value;

  alert(`😆 Gotcha, ${username}!\n\nThis is a prank. Never enter real passwords on untrusted websites.\n\nStay safe online! 🔒\n\n              -Created by Nure Anha Tamanna`);

  // Optional: Redirect to a real site after prank
  // window.location.href = "https://facebook.com";
}
