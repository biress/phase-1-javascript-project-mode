const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const itemList = document.getElementById("item-list");

const items = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 150 },
  { id: 2, name: "Running Shoes", category: "Sportswear", price: 80 },
  { id: 3, name: "Laptop Sleeve", category: "Accessories", price: 25 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 999 },
  { id: 5, name: "Fiction Novel", category: "Books", price: 20 }
];

const displayItems = (itemsToDisplay) => {
  itemList.innerHTML = ''; 
  itemsToDisplay.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>Category: ${item.category}</p>
      <p>Price: $${item.price}</p>
    `;
    itemList.appendChild(itemDiv);
  });
};

const searchItems = () => {
  const query = searchInput.value.toLowerCase();
  console.log('Search Query:', query);
  
  if (query === '') {
    displayItems(items); 
  } else {
    const filteredItems = items.filter(item => 
      item.category.toLowerCase().includes(query) 
    );
    console.log('Filtered Items:', filteredItems); 
    
    displayItems(filteredItems); 
  }
};
searchBtn.addEventListener("click", searchItems);

displayItems(items);
const toggleButton = document.getElementById("toggle-theme");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode"); 
};

toggleButton.addEventListener("click", toggleDarkMode);
