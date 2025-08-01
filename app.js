// Toggle view box on Home page
function toggleViewBox(card) {
  if (card === 'orders') {
    document.getElementById('ordersViewBox').style.display = 'block';
  } else if (card === 'stock') {
    document.getElementById('stockViewBox').style.display = 'block';
  }
}

function navigateTo(page) {
  window.location.href = page;
}

// Orders Page Logic
if (document.getElementById('addOrderForm')) {
  const ordersTableBody = document.getElementById('ordersTableBody');
  const addOrderForm = document.getElementById('addOrderForm');
  let orders = [];

  addOrderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const product = document.getElementById('orderProduct').value;
    const quantity = document.getElementById('orderQuantity').value;
    const date = document.getElementById('orderDate').value;
    orders.push({ product, quantity, date });
    renderOrders();
    addOrderForm.reset();
  });

  function renderOrders() {
    ordersTableBody.innerHTML = '';
    orders.forEach((order, index) => {
      ordersTableBody.innerHTML += `
        <tr>
          <td>${order.product}</td>
          <td>${order.quantity}</td>
          <td>${order.date}</td>
          <td>
            <button onclick="deleteOrder(${index})">Delete</button>
          </td>
        </tr>
      `;
    });
  }

  window.deleteOrder = function(index) {
    orders.splice(index, 1);
    renderOrders();
  };
}

// Stock Page Logic
if (document.getElementById('addStockForm')) {
  const stockTableBody = document.getElementById('stockTableBody');
  const addStockForm = document.getElementById('addStockForm');
  let stocks = [];

  addStockForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const product = document.getElementById('stockProduct').value;
    const quantity = document.getElementById('stockQuantity').value;
    stocks.push({ product, quantity });
    renderStocks();
    addStockForm.reset();
  });

  function renderStocks() {
    stockTableBody.innerHTML = '';
    stocks.forEach((stock, index) => {
      stockTableBody.innerHTML += `
        <tr>
          <td>${stock.product}</td>
          <td>${stock.quantity}</td>
          <td>
            <button onclick="deleteStock(${index})">Delete</button>
          </td>
        </tr>
      `;
    });
  }

  window.deleteStock = function(index) {
    stocks.splice(index, 1);
    renderStocks();
  };
}
