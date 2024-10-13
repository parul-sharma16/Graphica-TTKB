document.getElementById('crime-report-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Report submitted successfully!');
    this.reset();
});