import Loading from './loading.js';

let LoadingInstance;

function getLoadingInstance (render = undefined) {
    LoadingInstance = LoadingInstance || Loading.newInstance({
        render: render
    });

    return LoadingInstance;
}

function loading (options) {
    const render = ('render' in options) ? options.render : undefined;
    let instance  = getLoadingInstance(render);

    instance.show(options);
}

Loading.show = function (props = {}) {
    return loading(props);
};
Loading.hide = function () {
    if (!LoadingInstance) return false;

    const instance = getLoadingInstance();

    instance.remove(() => {
        LoadingInstance = null;
    });
};

export default Loading;