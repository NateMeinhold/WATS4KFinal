<template>
  <div class="sol">
    <h2>Solar Site</h2>

    <form v-on:submit.prevent="findStation">
      <p></p>
    </form>
    <p>Where is the Internal Space Station right now?</p>

    <div class ="results">
      <p>Longitude: {{results.iss_position.longitude}} </p>
      <p>Latitude:{{results.iss_position.latitude}} </p> 
    </div>

    <div class="map">
      <p>This is where the (possible) map could go</p>
      </div>

    <!-- <div class="sunset"><p>this is where the sunset thing will go<button>click</button></p></div> -->
  </div>

  <!--add 2nd div for sunrise api-->
</template>


  