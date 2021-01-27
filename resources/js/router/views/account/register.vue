<script>
import { authMethods } from "@/state/helpers";
import appConfig from "@/app.config";

/**
 * Register component
 */
export default {
  page: {
    title: "Register",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false
    };
  },
  methods: {
    ...authMethods,
    // Try to register the user in with the email, username
    // and password they provided.
    tryToRegisterIn() {
      this.tryingToRegister = true;
      // Reset the regError if it existed.
      this.regError = null;
      return (
        this.register({
          email: this.email,
          password: this.password
        })
          // eslint-disable-next-line no-unused-vars
          .then(token => {
            this.tryingToRegister = false;
            this.isRegisterError = false;
            this.registerSuccess = true;
            if (this.registerSuccess) {
              this.$router.push(
                this.$route.query.redirectFrom || { name: "home" }
              );
            }
          })
          .catch(error => {
            this.tryingToRegister = false;
            this.regError = error ? error : "";
            this.isRegisterError = true;
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
                <h5 class="text-white font-size-20">Free Register</h5>
                <p class="text-white-50">Get your free Veltrix account now.</p>
                <a href="/" class="logo logo-admin">
                  <img src="@/assets/images/logo-sm.png" height="24" alt="logo" />
                </a>
              </div>
            </div>

            <div class="card-body p-4">
              <div class="p-3">
                <b-alert
                  v-model="registerSuccess"
                  class="mt-3"
                  variant="success"
                  dismissible
                >Registration successfull.</b-alert>

                <b-alert
                  v-model="isRegisterError"
                  class="mt-3"
                  variant="danger"
                  dismissible
                >{{regError}}</b-alert>

                <b-form @submit.prevent="tryToRegisterIn" class="form-horizontal mt-4">
                  <b-form-group id="username-group" label="Username" label-for="username">
                    <b-form-input
                      id="username"
                      v-model="username"
                      type="text"
                      placeholder="Enter name"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="email-group" label="Email address" label-for="email">
                    <b-form-input id="email" v-model="email" type="email" placeholder="Enter email"></b-form-input>
                  </b-form-group>

                  <b-form-group id="password-group" label="Password" label-for="password">
                    <b-form-input
                      id="password"
                      v-model="password"
                      type="password"
                      placeholder="Enter password"
                    ></b-form-input>
                  </b-form-group>

                  <div class="form-group mb-0 text-center">
                    <div class="col-12 text-right">
                      <b-button type="submit" variant="primary" class="w-md">Register</b-button>
                    </div>
                  </div>
                  <div class="form-group mt-2 mb-0 row">
                    <div class="col-12 mt-4">
                      <p class="mb-0">
                        By registering you agree to the Veltrix
                        <a
                          href="#"
                          class="text-primary"
                        >Terms of Use</a>
                      </p>
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
              Already have an account ?
              <router-link tag="a" to="/login" class="font-weight-medium text-primary">Login</router-link>
            </p>
            <p>
              ©{{new Date().getFullYear()}} Veltrix. Crafted with
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
