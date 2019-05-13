<template>
  <div class='sidenav-w'>
     <img alt="Vue logo" class='sidenav-title-img' src="../../assets/logo.png" />
        
        <router-link active-class="active" to='/' exact>
            <div class='sidenav-btn'> 
                <p v-text="$ml.with('VueJS').get('Home')"/> 
            </div>
        </router-link>
        <router-link to='/About'>
            <div class='sidenav-btn'>
                <p v-text="$ml.with('VueJS').get('About')"/> 
            </div>
        </router-link>
        <router-link to='/Search'>
            <div class='sidenav-btn'>
                <p v-text="$ml.with('VueJS').get('Advantages')"/> 
            </div>
        </router-link>
        <router-link to='/Syntax'>
            <div class='sidenav-btn'>
                <p v-text="$ml.with('VueJS').get('Syntax')"/> 
            </div>
        </router-link>
        <router-link to='/Charts'>
            <div class='sidenav-btn'>
                <p v-text="$ml.with('VueJS').get('Charts')"/> 
            </div>
        </router-link>
        <router-link to='/Unit-Testing'>
            <div class='sidenav-btn'>
                <p v-text="$ml.with('VueJS').get('Unittesting')"/> 
            </div>
        </router-link>
        <router-link to='/Samples'>
            <div class='sidenav-btn'>
                <p v-text="$ml.with('VueJS').get('Samplevueprograms')"/> 
            </div>
        </router-link>
        <br />
    </div>
</template>
