document.getElementById('gallery-container').addEventListener('mouseover', function(event) {
    // Check if the mouseover event is on a gallery item
    if (event.target.classList.contains('gallery-item')) {
      // Remove the blur class from all gallery items
      document.querySelectorAll('.gallery-item').forEach(function(item) {
        item.classList.remove('gallery-item-blur');
      });
  
      // Add the blur class to all other gallery items except the hovered one
      document.querySelectorAll('.gallery-item:not(:hover)').forEach(function(item) {
        item.classList.add('gallery-item-blur');
      });
    }
  });
  
  document.getElementById('gallery-container').addEventListener('mouseout', function() {
    // Remove the blur class from all gallery items when mouseout
    document.querySelectorAll('.gallery-item').forEach(function(item) {
      item.classList.remove('gallery-item-blur');
    });
  });
  