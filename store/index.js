//state
export const state = () => ({
  countries: []
});

//get
export const getters = {
  allCountries: state => state.countries
};

//  action
export const actions = {
  async getCountries({ commit }) {
    const countries = await this.$axios.$get(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    console.log(countries.data);
    commit("addCountry", countries);
  }
};

//mutation
export const mutations = {
  addCountry(state, countries) {
    state.countries.push(countries);
  }
};
