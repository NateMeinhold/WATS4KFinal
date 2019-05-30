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
 <p>
       <router-link to="/views/sunrise">Sunrise App</router-link>
       </P>
    <div class="sunset"><p>what time of day is it there?<button>click</button></p></div> 
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Sol",
  data() {
    return {
      results: null
    };
  },
  mounted: function() {
    axios
        .get("http://api.open-notify.org/iss-now.json?callback", {})
        .then(response => {
          this.results = response.data;
        })
        .catch(error => {
          this.errors.push(error);
        });
  },
};
// export default {
//   name: 'Sunrise',
//   data () {
//     return {
//       posts: [],
//       errors: []
//     }
//   },
//   created () {
//     axios.get(`https://api.sunrise-sunset.org/json?lat={{results.iss_position.longitude}}&lng={{results.iss_position.latitude}}`)
//     .then(response => {
//       this.posts = response.data
//     })
//     .catch(e => {
//       this.errors.push(e)
//     })
//   }
// }


  