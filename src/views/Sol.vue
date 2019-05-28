<template>
  <div class="sol">
     <h2>Solar Site</h2>
     <!-- <p>
       Where is the Space Station?
       </P>-->
    <form v-on:submit.prevent="findStation">
      <!--<p>Find rhymes for <input type="text" v-model="rhyme"> related to <input type="text" v-model="phrase">--> <p><button type="submit">Where is the Space Station?</button></p>
    </form>

    <!--need to clean up results...splice?-->
    <ul class="results" v-if="results && results.length > 0">
      
      <li class="latitude" v-for="(item, index) of results" :key="index">
        <p><strong>{{item.latitude}}</strong></p>
        <p>{{item.score}}</p>
      </li>
      <li class="longitude" v-for="(item, index) of results" :key="index">
        <p><strong>{{item.longitude}}</strong></p>
        <p>{{item.score}}</p>
      </li>
    </ul>

    
    <div class="no-results" v-else-if="results && results.length === 0">
      <h2>No Words Found</h2>
      <p>Please adjust your search to find more words.</p>
    </div>

    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(error, index) of errors" :key="index">
        {{error.message}}
      </li>
    </ul>
    <div>{{results}}</div>
  </div>

  <!--add 2nd div for sunrise api-->
</template>

<script>
import axios from 'axios'

export default {
  name: 'Rhymesaurus',
  data () {
    return {
      results: null,
      errors: [],
      phrase: '',
      rhyme: ''
    }
  }, 
  methods: {
  findStation: function() {
    axios.get('http://api.open-notify.org/iss-now.json?callback', {
    })
    .then(response => {
      this.results = response.data;
    })
    .catch(error => {
      this.errors.push(error);
    });
  }
}
    
}
</script>

<style scoped>
.sol {
  font-size: 1.4rem;
}

input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
}
button{
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1, h2 {
  font-weight: normal;
}

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0,0,0,0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

a {
  color: #42b983;
}
</style>
