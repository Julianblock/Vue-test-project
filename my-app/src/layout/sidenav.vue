<template>
    <div class='sidenav'>
      <img alt="Vue logo" class='sidenav-title-img' src="../assets/logo.png" />
        
        <router-link to='/'>
            <div class='sidenav-btn'> 
                Home 
            </div>
        </router-link>
        <router-link to='/About'>
            <div class='sidenav-btn'>
                About Vue
            </div>
        </router-link>
        <router-link to='/Advantages'>
            <div class='sidenav-btn'>
                Advantages
            </div>
        </router-link>
        <router-link to='/Syntax'>
            <div class='sidenav-btn'>
                Syntax
            </div>
        </router-link>
        <router-link to='/Best-Practices'>
            <div class='sidenav-btn'>
                Best Practices
            </div>
        </router-link>
        <router-link to='/Unit-Testing'>
            <div class='sidenav-btn'>
                Unit Testing
            </div>
        </router-link>
        <router-link to='/Deploying'>
            <div class='sidenav-btn'>
                Deploying
            </div>
        </router-link>
        <router-link to='/Samples'>
            <div class='sidenav-btn'>
                Sample Programs - API call with axios
            </div>
        </router-link>
    </div>
</template>
