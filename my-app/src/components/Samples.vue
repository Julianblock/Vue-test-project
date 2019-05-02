<template>
<div>
  <h1>Hello man</h1><br />
  <h1>Hello man</h1><br />
  <h1>Hello man</h1><br />
  <div id="app">
  </div>
    <p v-text="$ml.with('VueJS').get('msg')" />
  <div class="container" id="people">
  <div class="filter">
		<label><input type="radio" v-model="selectedCategory" value="All" /> All</label>
		<label><input type="radio" v-model="selectedCategory" value="Tech" /> Tech</label>
		<label><input type="radio" v-model="selectedCategory" value="Entertainment" /> Entertainment</label>
		<label><input type="radio" v-model="selectedCategory" value="Fictional" /> Fictional</label>
	</div>
	
	<ul class="people-list">
		<li  v-for="person in filteredPeople" v-bind:key="person" >{{ person.name }}</li>
	</ul>
  <div class='ehealth-row'>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <a href=''>Silver 70 HMO</a>
        <p>Silver </p>
        <h1>Feature Plan</h1>
        <checkbox />Compare
      </div>
    </div>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <p  v-text="$ml.with('VueJS').get('officevisit')" />
        <h2>$45</h2>
        <a href=''>Find Doctor</a>
      </div>
    </div>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <p v-text="$ml.with('VueJS').get('deductible')" />
        <h2>$2150</h2>
        <a href=''>Find Doctor</a>
      </div>
    </div>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <p v-text="$ml.with('VueJS').get('drugsavings')" />
        <a href=''>Add RX savings</a>
        <h2> to see savings</h2>
      </div>
    </div>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <p v-text="$ml.with('VueJS').get('monthlycost')" />
        <h2>$102</h2>
        <a href='' class='Apply' > Apply </a>
        <a href='' class='Details'> View Details </a>
      </div>
    </div>
  </div>
</div>
</div>
</template>


