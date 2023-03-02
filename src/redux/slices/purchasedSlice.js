import { createSlice } from "@reduxjs/toolkit";

const test_data = [
  {
    order_id: "1",
    user_id: "user1",
    orderItems: [
      {
        image:
          "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
        productName: "Air Jordan 1 Retro High OG 'Shadow' 2018",
        price: 16000,
        quantity: 3,
      },
      {
        image:
          "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
        productName: "Air Jordan 1 Retro High OG 'Shadow' 2018",
        price: 2500,
        quantity: 2,
      },
      {
        image:
          "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
        productName: "Air Jordan 1 Retro High OG 'Shadow' 2018",
        price: 2400,
        quantity: 5,
      },
    ],
    totalAmount: 420,
    totalQuantity: 12,
  },
  {
    order_id: "3",
    user_id: "user1",
    orderItems: [
      {
        image:
          "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
        productName: "Air Jordan 1 Retro High OG 'Shadow' 2018",
        price: 16000,
        quantity: 3,
      },
      {
        image:
          "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
        productName: "Air Jordan 1 Retro High OG 'Shadow' 2018",
        price: 2500,
        quantity: 2,
      },
      {
        image:
          "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
        productName: "Air Jordan 1 Retro High OG 'Shadow' 2018",
        price: 2400,
        quantity: 5,
      },
    ],
    totalAmount: 850,
    totalQuantity: 12,
  },
  {
    order_id: "2",
    user_id: "user1",
    orderItems: [
      {
        image:
          "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
        productName: "Air Jordan 1 Retro High OG 'Shadow' 2018",
        price: 16000,
        quantity: 3,
      },
      {
        image:
          "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
        productName: "Air Jordan 1 Retro High OG 'Shadow' 2018",
        price: 2500,
        quantity: 2,
      },
      {
        image:
          "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
        productName: "Air Jordan 1 Retro High OG 'Shadow' 2018",
        price: 2400,
        quantity: 5,
      },
    ],
    totalAmount: 120,
    totalQuantity: 12,
  },
];

const initialState = {
  orderList: [...test_data],
  totalSpent: 0,
};

const purchasedSlice = createSlice({
  name: "purchased",
  initialState,
  reducers: {
    calculateTotalSpent: (state) => {
      let amount = 0;
      state.orderList.forEach((order) => {
        amount += order.totalAmount;
      });
      state.totalSpent = amount;
    },
  },
});

export const purchasedActions = purchasedSlice.actions;

export default purchasedSlice.reducer;
