<script>
import appConfig from "@/app.config";

/**
 * Register-2 component
 */
export default {
  page: {
    title: "Register 2",
    meta: [{ name: "description", content: appConfig.description }]
  }
};
</script>
<template>
  <div>
    <!-- Begin page -->
    <div
      class="accountbg"
      :style="{'background': 'url(' + require('@/assets/images/bg.jpg') + ')', 'background-size': 'cover', 'background-position': 'center'}"
    ></div>

    <div class="wrapper-page account-page-full">
      <div class="card shadow-none">
        <div class="card-block">
          <div class="account-box">
            <div class="card-box shadow-none p-4">
              <div class="p-2">
                <div class="text-center mt-4">
                  <router-link tag="a" to="/">
                    <img src="@/assets/images/logo-dark.png" height="22" alt="logo" />
                  </router-link>
                </div>

                <h4 class="font-size-18 mt-5 text-center">Free Register</h4>
                <p class="text-muted text-center">Get your free Veltrix account now.</p>

                <form class="mt-4" action="#">
                  <div class="form-group">
                    <label for="useremail">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="useremail"
                      placeholder="Enter email"
                    />
                  </div>

                  <div class="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="Enter username"
                    />
                  </div>

                  <div class="form-group">
                    <label for="userpassword">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="userpassword"
                      placeholder="Enter password"
                    />
                  </div>

                  <div class="form-group row">
                    <div class="col-12 text-right">
                      <button class="btn btn-primary w-md" type="submit">Register</button>
                    </div>
                  </div>

                  <div class="form-group mt-2 mb-0 row">
                    <div class="col-12 mt-3">
                      <p class="mb-0">
                        By registering you agree to the Veltrix
                        <a
                          href="#"
                          class="text-primary"
                        >Terms of Use</a>
                      </p>
                    </div>
                  </div>
                </form>

                <div class="mt-5 pt-4 text-center">
                  <p>
                    Already have an account ?
                    <router-link
                      tag="a"
                      to="/pages/login-2"
                      class="font-weight-medium text-primary"
                    >Login</router-link>
                  </p>
                  <p>
                    ©
                    {{new Date().getFullYear()}}
                    Veltrix. Crafted with
                    <i
                      class="mdi mdi-heart text-danger"
                    ></i> by Themesbrand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>