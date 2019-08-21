function shoppingList() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const listItem = $('#js-shopping-list-entry').val();

    if (listItem !== "") {
      $('.shopping-list').append(`<li>
      <span class="shopping-item">${listItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
    $('#js-shopping-list-entry').val("");
    }
  });
}

$(shoppingList);