<template>
    <div>        
        <form id="main" v-cloak>

            <div class="bar">
                <!-- Create a binding between the searchString model and the text field -->

                <input type="text" v-model="searchString" placeholder="Enter your search terms" />
            </div>

            <ul>
                <!-- Render a li element for every entry in the computed filteredArticles array. -->
                    
                <li v-for="product in filteredData" v-bind:key='product'>
                    <a v-bind:href="product.productid"> Price: {{ product.price }}</a>
                    <h2>{{product.name}} <span style="float:right;">Total: {{product.total}}</span></h2>
                
                    
                </li>
            </ul>
        </form>
    </div>
</template>



<script>
  export default {
    el: 'main',
    data () {
        return {
        searchString: "",

        // The data model. These items would normally be requested via AJAX,
        // but are hardcoded here for simplicity.

        data: [
            {
              "productid": "e544544f6a4e11d2b377eaa5fc2a9392",
              "name": "Apple",
              "instock": "12",
              "quantity": "1",
              "price": "12",
              "tax": "10",
              "total": "22"
            },
            {
              "productid": "ab284de861cde24e7219c0666962ccae",
              "name": "Mobile Phone",
              "instock": "102",
              "quantity": "1",
              "price": "9200",
              "tax": "22",
              "total": "9222"
            },
            {
              "productid": "9a29285677f16017f0a9b7b2ce80a0c5",
              "name": "iPhone",
              "instock": "1200",
              "quantity": "1",
              "price": "1200",
              "tax": "10",
              "total": "1210"
            },
            {
              "productid": "8b8499655052b750f7501cfb2f7e7e06",
              "name": "Pear",
              "instock": "124",
              "quantity": "1",
              "price": "120",
              "tax": "10",
              "total": "130"
            }
        ]
        }
    },
    computed: {
        // A computed property that holds only those data that match the searchString.
        filteredData: function () {
            var search_array = this.data,
                searchString = this.searchString;

            if(!searchString){
                return search_array;
            }

            searchString = searchString.trim().toLowerCase();

            search_array = search_array.filter(item => {
                if(item.name.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return search_array;
        }
    }
};


</script>

<style scoped>

/* Hide un-compiled mustache bindings
until the Vue instance is ready */

[v-cloak] {
  display: none;
}

*{
    margin:0;
    padding:0;
}

body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align:center;
}

a, a:visited {
    outline:none;
    color:#389dc1;
}

a:hover{
    text-decoration:none;
}

section, footer, header, aside, nav{
    display: block;
}


/*-------------------------
    The search input
--------------------------*/

.bar{
    background-color:#42b983;

    box-shadow: 0 1px 1px #ccc;
    border-radius: 2px;
    width: 90%;
    padding: 14px;
    margin: 45px auto 20px;
}

.bar input{
    background:#fff no-repeat 13px 13px;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NEY0RTlFMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NEY0RTlGMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0RjRFOUMxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk0RjRFOUQxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DjA/RAAABK0lEQVR42pTSQUdEURjG8dOY0TqmPkGmRcqYD9CmzZAWJRHVRIa0iFYtM6uofYaiEW2SRJtEi9YxIklp07ZkWswu0v/wnByve7vm5ee8M+85zz1jbt9Os+WiGkYdYxjCOx5wgFeXUHmtBSzpcCGa+5BJTCjEP+0nKWAT8xqe4ArPGEEVC1hHEbs2oBwdXkM7mj/JLZrad437sCGHOfUtcziutuYu2v8XUFF/4f6vMK/YgAH1HxkBYV60AR31gxkBYd6xAeF3VzMCwvzOBpypX8V4yuFRzX2d2gD/l5yjH4fYQEnzkj4fae5rJulF2sMXVrAsaTWttRFu4Osb+1jEDT71/ZveyhouTch2fINQL9hKefKjuYFfuznXWzXMTabyrvfyIV3M4vhXgAEAUMs7K0J9UJAAAAAASUVORK5CYII=);

    border: none;
    width: 100%;
    line-height: 19px;
    padding: 11px 0;

    border-radius: 2px;
    box-shadow: 0 2px 8px #c4c4c4 inset;
    text-align: left;
    font-size: 14px;
    font-family: inherit;
    color: #738289;
    font-weight: bold;
    outline: none;
    text-indent: 40px;
}

ul{
    list-style: none;
    width: 90%;
    margin: 0 auto;
    text-align: left;
}

ul li{
    border-bottom: 1px solid #ddd;
    padding: 10px;
    overflow: hidden;
}

ul li img{
    width:60px;
    height:60px;
    float:left;
    border:none;
}

ul li p{
    margin-left: 75px;
    font-weight: bold;
    padding-top: 12px;
    color:#6e7a7f;
}
</style>
