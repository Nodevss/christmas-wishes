document.getElementById('addWishBtn').addEventListener('click', addWish);

function addWish() {
    const wishInput = document.getElementById('wishInput');
    const wishText = wishInput.value.trim();

    if (wishText) {
        const wishListItems = document.getElementById('wishListItems');
        const listItem = document.createElement('li');
        listItem.textContent = wishText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function() {
            listItem.classList.add('fade-out');
            setTimeout(() => {
                wishListItems.removeChild(listItem);
            }, 500);
        };

        listItem.appendChild(removeBtn);
        wishListItems.appendChild(listItem);
        wishInput.value = '';
    } else {
        alert('bruv enter a wish');
    }
}
