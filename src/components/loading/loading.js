import Vue from 'vue';
import {
  Loading
} from 'vux'

const Loading1 = Vue.extend(Loading)
Loading1.newInstance = function (properties) {

  let $vm = new Loading1({
    el: document.createElement('div')
  })
  $vm.text = "loading";
  document.body.appendChild($vm.$el);

  return {
    show() {
      $vm.show = true
    },
    remove(cb) {
      $vm.show = false;
    },
  };
};

export default Loading1;
