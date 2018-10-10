<template>
  <div>
    <div class="cardSubtitle">
      <h7>hCard Preview</h7>
    </div>
    <div class='cardPreview'>
        <div class='header'>
          <h1>{{ givenname }} {{ surname }}</h1>
          <div v-if="imageData.length > 0">
          <img v-bind:src="imageData" class="img-thumbnail avatar shadow-sm bg-white rounded" >
          </div>
          <div v-else>
          <img src="./avatarpic.jpg" class="img-thumbnail avatar shadow-sm bg-white rounded"/>
          </div>
        </div>
        <div class='cardBody'>
          <div class='field title'>Email </div> 
          <div class='field'> {{ email }} </div>
          <div class='field title'>Phone</div>  
          <div class='field'> {{ phone }}</div>
          <div class='field title'>Address</div>  
          <div class='field'> {{ housename }} {{ street }}  </div>
          <div class='field' style="color:white;"> . </div>
          <div class='field'>{{ suburb }} {{state}}</div>
         
         
        </div>
        <div class='extraFields'>
          <div class='field title'>Postcode </div> 
          <div class='field'>{{ postcode }}</div>
          <div class='field title'>Country</div> 
          <div class='field'>{{ country }}</div>
        </div>

  
    </div>
 
  </div>
</template>

<script>
export default {
  name: 'CardPreview',
  props: [
  'givenname', 
  'surname', 
  'email', 
  'phone', 
  'housename',
  'street',
  'suburb',
  'state', 
  'postcode', 
  'country',
  'imageData']
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div h1 {
  color: white;
  font-size: 2em;
  font-family:Georgia, 'Times New Roman', Times, serif;
}

 
 .cardPreview {
  background-color: white;
  width: 430px;
  height:300px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
 }

 .header {
   background-color:#2c3e50;
   height:6em;
   margin-top:0;
   display: flex;
   align-items:flex-end;
   padding-left:1em;
   overflow: visible;
   position:relative;
 }

.cardBody {
   display: grid;
   grid-template-columns: 0.2fr 0.75fr;
   grid-template-rows: 1fr 1fr 1fr 1fr;
   padding-left: 1.5em;
   padding-top: 1.5em;
   align-items: flex-end;
   
   
}

.extraFields {
  display: grid;
  grid-template-columns: 80px 0.3fr 0.3fr 0.4fr;
  grid-template-rows: 40px;
  padding-left: 1.5em;
  padding-top: 0;
  align-items: flex-end;
  width:410px;
}


.field {
  grid-column: span 1;
  margin-top: 0.2em;
  border-bottom: solid 1px #dbdfe1;
  
}

.avatar {
  position:absolute;
  left:20.5em;
  top:1em;
  height:105px;
  width:85px;
}

.title {
 text-transform: uppercase;
 font-size:0.8em;
 font-family: Arial, Helvetica, sans-serif
}

.cardSubtitle {
  display:flex;
  justify-content: flex-end;
  margin-top:20px;
}

h7 {
  font-size: 0.8em;
  text-transform: uppercase;
  color:#95a5a6;
}

</style>
