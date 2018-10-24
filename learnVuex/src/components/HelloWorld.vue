<template>
  <div class="hello">
    {{gettersName}},{{gettersAge}}
    <hr/>
    <div>
      <button @click="setName('王宾')">click</button>
      <button @click="setAge(24)">click</button>
    </div>
    <button @click="actionsSetName('lufei')">actions click</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters([
      'gettersName',
      'gettersAge'
    ])
  },
  methods: {
    ...mapMutations({
      setName: 'SET_NAME',
      setAge: 'SET_AGE'
    }),
    ...mapActions({
      actionsSetName: 'actionName'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
