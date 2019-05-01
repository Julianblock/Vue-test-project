import Home from './components/HelloWorld.vue'
import About from './components/About.vue'
import Advantages from './components/Advantages.vue'
import Syntax from './components/Syntax.vue'
import BestPractices from './components/Best-Practices.vue'
import UnitTesting from './components/Unit-Testing.vue'

export const routes = [
    { path: '', component: Home },
    { path: './About', component: About },
    { path: './Advantages', component: Advantages },
    { path: './Syntax', component: Syntax },
    { path: './Best-Practices', component: BestPractices },
    { path: './Unit-Testing', component: UnitTesting }
]