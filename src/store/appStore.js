import lStorage from 'store'

export default {
  state: {
    tabIndex: 0
  },
  getters: {
    getTabIndex() {
      const value = lStorage.get("tabIndex");
      return value ? value : 0;
    }
  },
  mutations: {
    setTabIndex(state, payload) {
      state.tabIndex = payload;
      lStorage.set("tabIndex", state.tabIndex);
    }
  },
  actions: {
    initData({
      commit
    }, payload) {
      if (payload.company) {
        commit('setCompanyTreeData', payload.company);
      }
      if (payload.orgTreeData) {
        commit('setOrgTreeData', payload.orgTreeData);
      }
      if (payload.propertyType) {
        commit('setPropertyTypeList', payload.propertyType);
      }
      if (payload.entrustType) {
        commit('setEntrustTypeList', payload.entrustType);
      }
    }
  }
}
