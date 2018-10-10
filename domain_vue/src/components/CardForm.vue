<template>
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="m-3">
                <h2>hCard Builder</h2>
                <h6>Personal Details</h6>
                <form>
                    <div class="row mt-2">
                        <div class="col">
                            <label for="GivenName" class="mb-0 title">Given Name</label>
                            <input type="text" class="form-control" id="GivenName" placeholder="" v-model="givenname" >
                        </div>
                        <div class="col">
                            <label for="Surname" class="mb-0 title">Surname</label>
                            <input type="text" class="form-control" id="Surname" placeholder="" v-model="surname">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col">
                            <label for="Email" class="mb-0 title">Email</label>
                            <input type="text" class="form-control" id="Email" placeholder="" v-model="email">
                        </div>
                        <div class="col">
                            <label for="Phone" class="mb-0 title">Phone</label>
                            <input type="text" class="form-control" id="Phone" placeholder=" " v-model="phone">
                        </div>
                    </div>
                    <h6>Address</h6>
                    <div class="row mt-2">
                        <div class="col">
                            <label for="HouseName" class="mb-0 title">House Name or #</label>
                            <input type="text" class="form-control" id="HouseName" placeholder="" v-model="housename">
                        </div>
                        <div class="col">
                            <label for="Street" class="mb-0 title">Street</label>
                            <input type="text" class="form-control" id="Street" placeholder="" v-model="street">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col">
                            <label for="Suburb" class="mb-0 title">Suburb</label>
                            <input type="text" class="form-control" id="Suburb" placeholder="" v-model="suburb">
                        </div>
                        <div class="col">
                            <label for="State" class="mb-0 title">State</label>
                            <input type="text" class="form-control" id="State" placeholder="" v-model="state">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col">
                            <label for="Postcode" class="mb-0 title">Postcode</label>
                            <input type="text" class="form-control" id="Postcode" placeholder="" v-model="postcode">
                        </div>
                        <div class="col">
                            <label for="Country" class="mb-0 title">Country</label>
                            <input type="text" class="form-control" id="Country" placeholder="" v-model="country">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col">
                            <div class="upload-btn-wrapper btn-block">
                                <button type="button" class="btn btn-secondary btn-block mt-3" >Upload Avatar</button>
                                <input type="file" name="fileupload" @change="previewImage" accept="image/*">
                            </div>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-primary btn-block mt-3">Create hCard</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-lg-6 background">
            <CardPreview 
                :givenname="givenname"
                :surname="surname"
                :email="email"
                :phone="phone"
                :housename="housename"
                :street="street"
                :suburb="suburb"
                :state="state"
                :postcode="postcode"
                :country="country"
                :imageData="imageData"

                />
        </div> 
    </div>
</div>
</template>

<script>
import CardPreview from './CardPreview'

export default {
  name: 'CardForm',
  components: { CardPreview },
  props: {
    
  },
  data() {
    return {
     givenname: '',
     surname:'',
     email:'',
     phone:'',
     housename:'',
     street:'',
     suburb:'',
     state:'',
     postcode:'',
     country:'',
     imageData:""

    }
  },
  methods: {
      previewImage: function(event) {
          console.log(event);
          let input = event.target;

          if (input.files && input.files[0]) {
              let reader = new FileReader(); //webApi
              reader.onload = (e) => {
                  this.imageData = e.target.result;
              }
              reader.readAsDataURL(input.files[0]);
          }
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.background {
   background-color: #e1e4e7;
   justify-content: center;
   align-items: center;
   display: flex;
   
 }


.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.title {
 text-transform: uppercase;
 font-size:0.8em;
 font-family: Helvetica, sans-serif
}

h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    color: #2c3e50;
}

h6 {
    font-size: 0.8em;
    text-transform: uppercase;
    color:#95a5a6;
    border-bottom: solid 1px;
    margin-top:20px;
    margin-bottom:20px;
}

</style>
