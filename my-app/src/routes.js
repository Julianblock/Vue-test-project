import Home from './components/index.vue'
import About from './components/About/index.vue'
import Search from './components/Search/index.vue'
import Syntax from './components/Syntax/index.vue'
import Charts from './components/Charts/index.vue'
import UnitTesting from './components/Unit-Testing/index.vue'
import Samples from './components/Samples/index.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/About', component: About },
    { path: '/Search', component: Search },
    { path: '/Syntax', component: Syntax },
    { path: '/Charts', component: Charts },
    { path: '/Unit-Testing', component: UnitTesting },
    { path: '/Samples', component: Samples }
]