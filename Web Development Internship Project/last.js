function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function() {
    var output = document.getElementById('image-preview');
    output.innerHTML = '<img src="' + reader.result + '" alt="Uploaded Image" class="preview-image">';
  };
  reader.readAsDataURL(event.target.files[0]);
}
