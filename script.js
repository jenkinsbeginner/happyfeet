document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks! We received your trial request. I will notify you soon.');
  this.reset();
});