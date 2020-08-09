<template>
  <b-container>
    <b-row class="justify-content-center align-items-center vh-100">
      <b-col lg="6" sm="12" md="12">
        <b-alert :show="isError === false" variant="success" dismissible>
          <h4 class="alert-heading">Thank you!</h4>
          <p>The feedback has been sent!</p>
        </b-alert>
        <b-alert :show="isError === true" variant="danger" dismissible>
          <h4 class="alert-heading">Something went wrong!</h4>
          <div v-for="(messages, field) in errors" :key="field">
            <p v-for="message in messages" :key="message">
              {{ message }}
            </p>
          </div>
        </b-alert>
        <b-card>
          <b-card-body>
            <b-form @submit.prevent="submit" ref="form">
              <b-form-group label-for="full_name">
                <b-form-input v-model="form.full_name" id="full_name" placeholder="Full name"></b-form-input>
              </b-form-group>
              <b-form-group label-for="phone">
                <b-form-input v-model="form.phone" id="phone" placeholder="Phone"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-textarea
                  v-model="form.content"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
              <b-button block type="submit" variant="primary">Submit</b-button>
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
    errors: {},
    isError: null,
    form: {
      full_name: "",
      phone: "",
      content: "",
    },
  }),
  methods: {
    submit() {
      this.$axios
        .post("feedbacks", this.form)
        .then((response) => {
          this.isError = false;
          this.$refs['form'].reset();
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.isError = true;
        });
    },
  },
};
</script>