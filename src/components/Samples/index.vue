<template>
<div class='sample-work-wrapper'><br />
    <h1 v-text="$ml.with('VueJS').get('Samplevueprograms')" />
    <p v-text="$ml.with('VueJS').get('msg')" />
  <div class="container" id="people">
  <div class="filter">
		<label><input type="radio" v-model="selectedCategory" value="All" /> All</label>
		<label><input type="radio" v-model="selectedCategory" value="Tech" /> Tech</label>
		<label><input type="radio" v-model="selectedCategory" value="Entertainment" /> Entertainment</label>
		<label><input type="radio" v-model="selectedCategory" value="Fictional" /> Fictional</label>
	</div>
	
	<ul class="people-list">
		<li  v-for="person in filteredPeople" v-bind:key='person' >{{ person.name }}</li>
	</ul>
    <Search />
    <Graph2 />
    <Graph />
</div>




</div>
</template>


<script>
import Search from '../Search/index.vue';
import Graph from '../Charts/Graph.vue';
import Graph2 from '../Charts/Graph2.vue';

export default {
  components: {
    Search,
    Graph,
    Graph2
  },
  el:  "people",
    data () {
      return {
      people: [
        { name: "Bill Gates", category: "Tech" },
        { name: "Steve Jobs", category: "Tech" },
        { name: "Jeff Bezos", category: "Tech" },
        { name: "George Clooney", category: "Entertainment" },
        { name: "Meryl Streep", category: "Entertainment" },
        { name: "Amy Poehler", category: "Entertainment" },
        { name: "Lady of Lórien", category: "Fictional" },
        { name: "BB8", category: "Fictional" },
        { name: "Michael Scott", category: "Fictional" }
      ],
      selectedCategory: "All"
      }
    },
    computed: {
      filteredPeople: function() {
        var vm = this;
        var category = vm.selectedCategory;
        
        if(category === "All") {
          return vm.people;
        } else {
          return vm.people.filter(function(person) {
            return person.category === category;
          });
        }
      }
    }
  }
</script>
