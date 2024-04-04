// profile.js

document.getElementById('avatar').addEventListener('change', function() {
  const input = this;
  const file = input.files[0];
  const preview = document.getElementById('avatar-preview');
  const fileNameSpan = document.getElementById('file-name');

  const reader = new FileReader();
  reader.onload = function() {
    preview.src = reader.result;
  }

  if (file) {
    fileNameSpan.textContent = file.name;
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
    fileNameSpan.textContent = '';
  }
});
document.getElementById('avatar').addEventListener('change', function() {
  var avatarPreview = document.querySelector('.avatar-preview');
  var cameraIcon = avatarPreview.querySelector('.camera-icon');
  cameraIcon.style.display = 'none';
});
