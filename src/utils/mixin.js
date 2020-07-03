/* 局部混入 */
const mixin = {
  data() {
    return {
      msg: 'aa'
    }
  },
  methods: {
    mixinMethod() {
      // console.log(this.msg + ',这是mixin混入的方法')
    }
  }
}

export default mixin
