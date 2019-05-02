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
		<li  v-for="person in filteredPeople" v-bind:key="person" >{{ person.name }}</li>
	</ul>
  <div class='ehealth-row'>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <a >Silver 70 HMO</a>
        <p>Silver </p>
        <h1 v-text="$ml.with('VueJS').get('Featureplan')" />
        <checkbox />Compare
      </div>
    </div>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <p  v-text="$ml.with('VueJS').get('officevisit')" />
        <h2>$45</h2>
        <a  v-text="$ml.with('VueJS').get('Finddoctor')" />
      </div>
    </div>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <p v-text="$ml.with('VueJS').get('deductible')" />
        <h2>$2150</h2>
        <a  v-text="$ml.with('VueJS').get('Finddoctor')" />
      </div>
    </div>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <p v-text="$ml.with('VueJS').get('drugsavings')" />
        <a >Add RX savings</a>
        <h2 v-text="$ml.with('VueJS').get('Toseesavings')" />
      </div>
    </div>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <p v-text="$ml.with('VueJS').get('monthlycost')" />
        <h2>$102</h2>
        <a  class='Apply' v-text="$ml.with('VueJS').get('Apply')" />
        <a  class='Details' v-text="$ml.with('VueJS').get('Viewdetails')" />
      </div>
    </div>
  </div>
</div>
</div>
</template>


