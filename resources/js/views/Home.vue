<template>
  <b-container>
    <b-row class="justify-content-center align-items-center flex-column">
      <b-col lg="6" sm="12" md="12" >
        <b-card>
          <b-card-body>
            <b-form @submit="submit" @reset="reset">
              <b-form-group label-for="full_name">
                <b-form-input v-model="form.full_name" id="full_name" placeholder="Full name"></b-form-input>
              </b-form-group>
              <b-form-group label-for="phone">
                <b-form-input v-model="form.phone" id="phone" placeholder="Phone"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-textarea v-model="form.content" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
              </b-form-group>
              <b-button block variant="primary">Submit</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data: () => ({
    form: {
      full_name: '',
      phone: '',
      content: ''
    }
  }),
  methods: {
    submit(event) {
      event.preventDefault();
      console.log(this.form);
    },
    reset() {
      console.log(this.form);
    }
  }
};
</script>

<style lang="scss">
  body {
    background-color: blue($color: rgb(93, 192, 223));
  }
</style>