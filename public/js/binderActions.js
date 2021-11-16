const addStoreItem = async (event) => {
  event.preventDefault();
  const response = await fetch("/api/inventory/addinventory", {
    method: "POST",
    body: JSON.stringify({
      card_id: cardEl,
      price: priceEl,
      stock: stockEl,
      action: actionEl,
      binder_id: binderEl,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

const addBinder = async (event) => {
  event.preventDefault();
  console.log("clicked....");
  let binderNameEl = document.getElementById("binderName").value;
  console.log(binderNameEl);
  const response = await fetch("/api/binder/new", {
    method: "POST",
    body: JSON.stringify({
      // binder_id: binderEl,
      // user_id: session.user_id,
      binder_name: binderNameEl,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

const addCardToBinder = async (event) => {
  event.preventDefault();
  const binder = event.target.getAttribute("binderId");
  const card = event.target.getAttribute("card");
  const response = await fetch(`/api/binder/addcard/${binder}/${card}`, {
    method: "PUT",
  });
};

const renameBinder = async (event) => {
  event.preventDefault();
  const binder = event.target.getAttribute("binderId");
  const response = await fetch(`/api/binder/addcard/${binder}`, {
    method: "PUT",
    body: JSON.stringify({ binder_name: newNameEl }),
    headers: { "Content-Type": "application/json" },
  });
};

const deleteBinder = async (event) => {
  event.preventDefault();
  const binder = event.target.getAttribute("binderId");
  const response = await fetch(`/api/binder/addcard/${binder}`, {
    method: "DELETE",
  });
};

// document.querySelector("#TBD").addEventListener("click", addStoreItem);
document.querySelector("#addBinder").addEventListener("click", addBinder);
// document.querySelector("#TBD").addEventListener("click", addCardToBinder);
// document.querySelector("#TBD").addEventListener("click", renameBinder);
// document.querySelector("#TBD").addEventListener("click", deleteBinder);
