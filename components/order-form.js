app.component("order-form", {
  props: {
    cart: {
      type: Array,
      required: true
    },
    total:{
      type: Number,
      required: true
    }
  },
  template:
  /*html*/
  `
      <div class="react" id="modal">
      <div class="backdrop" @click='hideOrderForm'></div>
      <div class="modalBody">
        <div class="formContainer react" id="orderForm">
          <h1>Complete the form below and hit submit</h1>
          <form class="orderForm" @submit.prevent="onSubmit">
            <ul>
              <li>
                <input
                  type="text"
                  v-model = 'name'
                  class="fieldStyle fieldSplit alignLeft"
                  placeholder="Name"
                />
                <input
                  type="text"
                  v-model = 'phone'
                  class="fieldStyle fieldSplit alignRight"
                  placeholder="Phone no."
                />
              </li>
              <li>
                <input
                  type="text"
                  v-model = 'email'
                  class="fieldStyle fieldFull"
                  placeholder="Email"
                />
              </li>
              <li>
                <textarea
                  v-model = "address"
                  class="fieldStyle"
                  placeholder="Address"
                ></textarea>
              </li>
              <li>
                <input
                  type="hidden"
                  v-model.number='total'
                  class="fieldStyle fieldSplit alignRight"
                  placeholder="Phone no."
                />
                <input type="submit" value="Submit Order" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  `,
  data(){
    return{
      name:'',
      phone: '',
      address: '',
      email: '',
     
    }
  },
  methods:{
    hideOrderForm(){
      this.$emit('toggle-order-form');;
    },
    onSubmit(){
      let orderDetails = {
        name: this.name,
        phone: this.phone,
        address: this.address,
        email: this.email, 
        total: this.total
      }
      console.log(orderDetails);
      this.hideOrderForm();
      this.$emit("cart-clear");
    }

  }
})