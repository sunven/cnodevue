import Vue from 'vue';
import {
  Loading
} from 'vux'

Vue.component('loading', Loading)
Loading.show1 = true;
Loading.newInstance = function (properties) {
  const that = this;
  const _props = properties || {};
  const Instance = new Vue({
    data: Object.assign({}, _props, {

    }),
    render(h) {
      //let vnode = '';
      //   let vnode = h(Loading, {
      //     props: {
      //       show: true,
      //       text: 'loading',
      //       position: 'fixed',
      //       transition: "vux-mask"
      //     }
      //   });
      return h('loading', {
        'props': {
          "show": that.show1
        },
        on: {
          'update:show': console.log,
        },
        'style': {
          // 'z-index': 2010 + tIndex
        }
      }, []);
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const loading = Instance.$children[0];

  return {
    show() {
      console.dir(loading.$watch);
      loading.show1 = false
      console.dir(loading.show);
    },
    remove(cb) {
      loading.show = false;
      setTimeout(function () {
        loading.$parent.$destroy();
        if (document.getElementsByClassName('vux-loading-fullscreen')[0] !== undefined) {
          document.body.removeChild(document.getElementsByClassName('vux-loading-fullscreen')[0]);
        }
        cb();
      }, 500);
    },
    component: loading
  };
};

export default Loading;
