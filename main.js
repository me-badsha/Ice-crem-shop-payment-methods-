const app = Vue.createApp({
  data: function() {
    return{
      variants: [
        {id: 1, name: 'Vanilla', price: 100},
        {id: 2, name: 'Orange', price: 200},
        {id: 3, name: 'Lemon', price: 70},
        {id: 4, name: 'Strawberry', price: 300},
        {id: 5, name: 'Chocolate', price: 300},

      ], 
      cart: [], 
      showModal: false
    }
  },
  methods: {
    addToCart(varianId){
      // console.log(varianId);
      this.cart.push(this.variants.find(variant => variant.id === varianId));
    },
    removeFromCart(varianId){
      let position = this.cart.findIndex(variant => variant.id === varianId);
      this.cart.splice(position, 1);
    },
    clearCart(){
      this.cart = [];
    },
    toggoleModal(){
      this.showModal = !this.showModal
    }
  },
  computed: {
    total(){
      return this.cart.reduce((total, variant) => total + variant.price, 0);
    }
  },
});