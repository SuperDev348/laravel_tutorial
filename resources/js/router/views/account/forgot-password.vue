<script>
import { authMethods } from "@/state/helpers";
import appConfig from "@/app.config";

/**
 * Forgot password component
 */
export default {
  page: {
    title: "Forgot Password",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      email: "",
      error: null,
      tryingToReset: false,
      isResetError: false
    };
  },
  methods: {
    ...authMethods,
    // Try to register the user in with the email, fullname
    // and password they provided.
    tryToReset() {
      this.tryingToReset = true;
      // Reset the authError if it existed.
      this.error = null;
      return (
        this.resetPassword({
          email: this.email
        })
          // eslint-disable-next-line no-unused-vars
          .then(token => {
            this.tryingToReset = false;
            this.isResetError = false;
          })
          .catch(error => {
            this.tryingToReset = false;
            this.error = error ? error : "";
            this.isResetError = true;
          })
      );
    }
  }
};
</script>

<template>
  <div class="account-pages my-5 pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="card overflow-hidden">
            <div class="bg-primary">
              <div class="text-primary text-center p-4">
                <h5 class="text-white font-size-20 p-2">Reset Password</h5>
                <a href="/" class="logo logo-admin">
                  <img src="@/assets/images/logo-sm.png" height="24" alt="logo" />
                </a>
              </div>
            </div>
            <div class="card-body p-4">
              <div class="p-3">
                <b-alert v-model="isResetError" class="mt-3" variant="danger" dismissible>{{error}}</b-alert>

                <b-form @submit.prevent="tryToReset" class="form-horizontal mt-4">
                  <b-form-group id="email-group" label="Email" label-for="email">
                    <b-form-input id="email" v-model="email" type="email" placeholder="Enter email"></b-form-input>
                  </b-form-group>

                  <div class="form-group row mb-0">
                    <div class="col-12 text-right">
                      <b-button type="submit" variant="primary" class="w-md">Reset</b-button>
                    </div>
                  </div>
                </b-form>
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
          <div class="mt-5 text-center">
            <p>
              Remember It ?
              <router-link tag="a" to="/login" class="font-weight-medium text-primary">Sign In here</router-link>
            </p>
            <p class="mb-0">
              © {{new Date().getFullYear()}} Veltrix. Crafted with
              <i
                class="mdi mdi-heart text-danger"
              ></i> by Themesbrand
            </p>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
  </div>
</template>

<style lang="scss" module></style>
