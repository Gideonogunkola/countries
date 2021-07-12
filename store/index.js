//state
export const state = () => ({
  countries: null,
  fetchloading: false
});

//getters
export const getters = {
  allCountries: state => state.countries,
  getFetchLoading: state => state.fetchloading
};

//  action
export const actions = {
  async fetchCountries({ commit }) {
    commit("SET_FETCH_LOADING", true);
    try {
      const countries = await this.$axios.$get(
        "https://restcountries.eu/rest/v2/all"
      );
      commit("SET_COUNTRY", countries);
      commit("SET_FETCH_LOADING", false);
    } catch (error) {
      console.log(error);
      commit("SET_FETCH_LOADING", false);
    }
  }
};

//mutation
export const mutations = {
  SET_COUNTRY(state, countries) {
    state.countries = countries;
  },
  SET_FETCH_LOADING(state, loading) {
    state.fetchloading = loading;
  }
};
