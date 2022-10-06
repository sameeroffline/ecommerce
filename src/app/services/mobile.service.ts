import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
 
  constructor() { }
 



  //-----------------apple phone---------------------//

  order1 = [
    {
      id: 1,
      name: 'i phone 14 pro',
      price:160000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://i0.wp.com/icellindia.com/wp-content/uploads/2020/06/buy_apple_iphone_11_online_india3.jpg?fit=1200%2C1200&ssl=grocery1",
      rating: 4,


    },

    {
      id: 2,
      name: 'i phone 14 pro',
      price:110000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://i0.wp.com/icellindia.com/wp-content/uploads/2020/06/buy_apple_iphone_11_online_india4.jpg?fit=1200%2C1200&ssl=grocery1",
      rating: 3,

    },

    {
      id: 3,
      name: 'i phone 14 mini',
      price:70000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://images.macrumors.com/t/LjuOd4G8fzyQzaPOWYT2EB_Y9z8=/1200x1200/smart/article-new/2018/10/yellowxr.jpg",
      rating: 5,

    },

    {
      id: 4,
      name: 'i phone 13 pro max',
      price:150000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://www.luluhypermarket.in/medias/1058420-02.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MzkzM3xpbWFnZS9qcGVnfGhlOC9oYzMvODkzMzI3MzMzNzg4Ni8xMDU4NDIwLTAyLmpwZ18xMjAwV3gxMjAwSHxhMGI3ODA0ZjU0Mzk3YmVmM2EyODk4OWRlNDJmZTYyYWFmY2Q0NzU4MTdkNmRlYWQ0YWE1MmQ1ZDNmMzVmYjZl",
      rating: 3,

    },

    {
      id: 5,
      name: ' i phone 13 pro',
      price:100999,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://static.digit.in/default/2b414a3f6852a8c1c8b9b5d0bb60d5779cf377ce.jpeg?tr=w-600",
      rating: 5,

    },

    {
      id: 6,
      name: 'i phone 13 mini',
      price:60000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://m.media-amazon.com/images/I/516exyUpDbL._SL1200_.jpg",
      rating: 3,

    },
    {
      id: 7,
      name: 'i phone 12 pro max',
      price:120000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://static.digit.in/default/2b414a3f6852a8c1c8b9b5d0bb60d5779cf377ce.jpeg?tr=w-600",
      rating: 4,

    },

    {
      id: 8,
      name: 'i phone 12 pro ',
      price:80000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://phonewale.com/wp-content/uploads/2021/12/13-Pro-max-2.jpg",
      rating: 5,

    },

    {
      id: 9,
      name: 'i phone 12 mini',
      price:50000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://images.news18.com/ibnlive/uploads/2022/09/apple-iphone-14-pro-launch-2022-16625743583x2.jpg?im=FitAndFill,width=1200,height=1200",
      rating: 4,

    },

    {
      id: 10,
      name: 'i phone 11 pro max',
      price:70000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://www.luluhypermarket.in/medias/1611701-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTk5NzN8aW1hZ2UvanBlZ3xoOGMvaDU1LzkxNjg2Nzk2NjU2OTQvMTYxMTcwMS0wMS5qcGdfMTIwMFd4MTIwMEh8NmJhYmVlYzVhMzY2NjZjMjQyNDk2N2QzZGQyYTBkNjgzMzkyNTUwYjk5NjM3MWQ5ZjcxYWZiZDU0NTc3MzU3YQ",
      rating: 4,

    },

    {
      id: 11,
      name: ' i phone 11 pro',
      price:60000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://www.luluhypermarket.in/medias/1058420-02.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MzkzM3xpbWFnZS9qcGVnfGhlOC9oYzMvODkzMzI3MzMzNzg4Ni8xMDU4NDIwLTAyLmpwZ18xMjAwV3gxMjAwSHxhMGI3ODA0ZjU0Mzk3YmVmM2EyODk4OWRlNDJmZTYyYWFmY2Q0NzU4MTdkNmRlYWQ0YWE1MmQ1ZDNmMzVmYjZl",
      rating: 5,

    },

    {
      id: 12,
      name: 'i phone 11 mini',
      price:40000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://static.digit.in/default/2b414a3f6852a8c1c8b9b5d0bb60d5779cf377ce.jpeg?tr=w-600",
      rating: 4,

    },

  ]













  // addcart(applemobile:any){
  //   this.order1.push(applemobile)
  // }


  //---------------------------Mi phone--------------------------------//




  order2 = [

    {
      id: 1,
      name: 'Mi',
      price:25000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://static.digit.in/default/56df7a071797e0355cc2f6f95093fefd89c43c94.jpeg?tr=w-1200",
      rating: 4,



    },

    {
      id: 2,
      name: 'Mi',
      price:25000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://fdn.gsmarena.com/imgroot/news/22/03/xiaomi-12-global-renders-leak/pro/-1200x1200m/gsmarena_011.jpg",
      rating: 3,


    },

    {
      id: 3,
      name: 'Mi',
      price:25000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://www.xda-developers.com/files/2022/04/Xiaomi-Redmi-Note-Pro-Plus-5G.jpg",
      rating: 4,

    },

    {
      id: 4,
      name: 'Mi',
      price:25000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://instacash.blob.core.windows.net/static/img/products/6693.jpeg",
      rating: 5,

    },

    {
      id: 5,
      name: 'Mi',
      price:25000,

      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://fdn.gsmarena.com/imgroot/news/22/02/xiaomi-12-lite-first-render/inline/-1200/gsmarena_003.jpg",
      rating: 4,

    },

    {
      id: 6,
      name: 'Mi',
      price:25000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://static.digit.in/default/7bbf11c3408ebccdb8b4c74602753d53a7941c35.jpeg?tr=w-1200",
      rating: 2,

    },

    {
      id: 7,
      name: 'Mi',
      price:25000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://fdn.gsmarena.com/imgroot/news/22/03/xiaomi-12-global-renders-leak/pro/-1200x1200m/gsmarena_011.jpg",
      rating: 4,

    },

    {
      id: 8,
      name: 'Mi',
      price:25000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://www.xda-developers.com/files/2022/04/Xiaomi-Redmi-Note-Pro-Plus-5G.jpg",
      rating: 5,

    },

    {
      id: 9,
      name: 'Mi',
      price:25000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://instacash.blob.core.windows.net/static/img/products/6693.jpeg",
      rating: 4,

    },

    {
      id: 10,
      name: 'Mi',
      price:25000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://fdn.gsmarena.com/imgroot/news/22/02/xiaomi-12-lite-first-render/inline/-1200/gsmarena_003.jpg",
      rating: 3,

    },

  ]

  //-----------------------------vivo mobiles----------------------------------//



  order3 = [



    {
      id: 1,
      name: 'vivo',
      price:38000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://sc04.alicdn.com/kf/Hcd197fdea4ef4906b70d481f246503afU.jpg",
      rating: 5,


    },

    {
      id: 2,
      name: 'vivo',
      price:38000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://static.digit.in/product/2fc1e11862b2e32401fbfc8f6cca85a64076e3c8.jpeg?tr=w-1200",
      rating: 4,

    },

    {
      id: 3,
      name: 'vivo',
      price:38000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://m.media-amazon.com/images/I/51XUEG1XTkS._SL1200_.jpg",
      rating: 3,

    },

    {
      id: 4,
      name: 'vivo',
      price:38000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://images.fonearena.com/blog/wp-content/uploads/2021/09/vivo-X70-Pro-plus-2.jpg",
      rating: 4,

    },

    {
      id: 5,
      name: 'vivo',
      price:38000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://dealntechcdn.b-cdn.net/wp-content/uploads/2020/10/Vivo-V20.jpg",
      rating: 2,

    },

    {
      id: 6,
      name: 'vivo',
      price:38000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://www.reliancedigital.in/medias/Vivo-Y35-Mobile-Phone-493177356-i-grocery1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjM2NnxpbWFnZS9qcGVnfGltYWdlcy9oYjcvaGRlLzk4ODcyNTcxMDAzMTguanBnfDdhYWI1ZDdkMmVhZTExY2UxYzZiNDVkMjQ4ODQ2MzcyNGU5ODE4NzBjNjk3NDY2MTNhNjBlOTYyYTk2MjkyYjc",
      rating: 4,

    },


    {
      id: 7,
      name: 'vivo',
      price:38000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      rating: 4,
      image: "https://sc04.alicdn.com/kf/Hcd197fdea4ef4906b70d481f246503afU.jpg"
      ,

    },

    {
      id: 8,
      name: 'vivo',
      price:38000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://static.digit.in/product/2fc1e11862b2e32401fbfc8f6cca85a64076e3c8.jpeg?tr=w-1200",
      rating: 5,

    },

    {
      id: 9,
      name: 'vivo',
      price:38000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://m.media-amazon.com/images/I/51XUEG1XTkS._SL1200_.jpg",
      rating: 4,

    },

    {
      id: 10,
      name: 'vivo',
      price:38000,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "https://images.fonearena.com/blog/wp-content/uploads/2021/09/vivo-X70-Pro-plus-2.jpg",
      rating: 3,

    },
  ]




  //---------------------------------------------Grocery  grocery1   ------------------------------------------------------------------------//



  order4 = [

   

    {
      id: 5,
      name: 'sakthi',
      price: 200,
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "../../../assets/malg/g5.webp",
      rating: 3,

    },

    {
      id: 6,
      name: 'grocery1',
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "../../../assets/malg/g6.webp    ",
      rating: 4,

    },


    {
      id: 7,
      name: 'grocery1',
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      rating: 4,
      image: "../../../assets/malg/g7.webp    "
      ,

    },

    {
      id: 8,
      name: 'grocery1',
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "../../../assets/malg/g8.webp    ",
      rating: 5,

    },

    {
      id: 9,
      name: 'grocery1',
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "../../../assets/malg/g9.webp    ",
      rating: 4,

    },


    {
      id: 1,
      name: 'grocery1',
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "  ../../../assets/malg/g1.jpeg ",
      rating: 5,


    },


    {
      id: 2,
      name: 'grocery1',
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "  ../../../assets/malg/g2.jpeg",
      rating: 4,

    },

    {
      id: 3,
      name: 'grocery1',
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "../../../assets/malg/g3.webp",
      rating: 3,

    },

    {
      id: 4,
      name: 'grocery1',
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: " ../../../assets/malg/g4.webp",
      rating: 4,

    },

    
    {
      id: 10,
      name: 'grocery1',
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "../../../assets/malg/g10.webp    ",
      rating: 4,

    },


    {
      id: 11,
      name: 'grocery1',
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "../../../assets/malg/g11.webp",
      rating: 5,

    },


    {
      id: 12,
      name: 'grocery1',
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "../../../assets/malg/g12.jpeg    ",
      rating: 3,

    },



    {
      id: 13,
      name: 'grocery1',
      details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
      image: "../../../assets/malg/g13.jpg    ",
      rating: 5,

    },

  ]









  //  prod 2 = [




  //   {
  //     id: grocery1,
  //     name: 'vivo',
  // price:38000,
  //     details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
  //     image: "https://sc04.alicdn.com/kf/Hcd197fdea4ef4906b70d481f246503afU.jpg",
  //     rating: 5,


  //   },

  //   {
  //     id: 2,
  //     name: 'vivo',
  // price:38000,
  //     details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
  //     image: "https://static.digit.in/product/2fc1e11862b2e32401fbfc8f6cca85a64076e3c8.jpeg?tr=w-1200",
  //     rating: 4,

  //   },

  //   {
  //     id: 3,
  //     name: 'vivo',
  // price:38000,
  //     details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
  //     image: "https://m.media-amazon.com/images/I/51XUEG1XTkS._SL1200_.jpg",
  //     rating: 3,

  //   },

  //   {
  //     id: 4,
  //     name: 'vivo',
  // price:38000,
  //     details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
  //     image: "https://images.fonearena.com/blog/wp-content/uploads/2021/09/vivo-X70-Pro-plus-2.jpg",
  //     rating: 4,

  //   },

  //   {
  //     id: 5,
  //     name: 'vivo',
  // price:38000,
  //     details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
  //     image: "https://dealntechcdn.b-cdn.net/wp-content/uploads/2020/10/Vivo-V20.jpg",
  //     rating: 2,

  //   },

  //   {
  //     id: 6,
  //     name: 'vivo',
  // price:38000,
  //     details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
  //     image: "https://www.reliancedigital.in/medias/Vivo-Y35-Mobile-Phone-493177356-i-grocery1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjM2NnxpbWFnZS9qcGVnfGltYWdlcy9oYjcvaGRlLzk4ODcyNTcxMDAzMTguanBnfDdhYWI1ZDdkMmVhZTExY2UxYzZiNDVkMjQ4ODQ2MzcyNGU5ODE4NzBjNjk3NDY2MTNhNjBlOTYyYTk2MjkyYjc",
  //     rating: 4,

  //   },


  //   {
  //     id: 7,
  //     name: 'vivo',
  // price:38000,
  //     details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
  //     rating: 4,
  //     image: "https://sc04.alicdn.com/kf/Hcd197fdea4ef4906b70d481f246503afU.jpg"
  //     ,

  //   },

  //   {
  //     id: 8,
  //     name: 'vivo',
  // price:38000,
  //     details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
  //     image: "https://static.digit.in/product/2fc1e11862b2e32401fbfc8f6cca85a64076e3c8.jpeg?tr=w-1200",
  //     rating: 5,

  //   },

  //   {
  //     id: 9,
  //     name: 'vivo',
  // price:38000,
  //     details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
  //     image: "https://m.media-amazon.com/images/I/51XUEG1XTkS._SL1200_.jpg",
  //     rating: 4,

  //   },

  //   {
  //     id: 10,
  //     name: 'vivo',
  // price:38000,
  //     details: 'Flat INR 3000 Off on HDFC BankCards FREE Delivery by BUYit Usually dispatched in 3 days.',
  //     image: "https://images.fonearena.com/blog/wp-content/uploads/2021/09/vivo-X70-Pro-plus-2.jpg",
  //     rating: 3,

  //   },
  //  ]

}



