<script>
import appConfig from "@/app.config";

/**
 * Login-1 component
 */
export default {
  page: {
    title: "Login-1",
    meta: [{ name: "description", content: appConfig.description }]
  }
};
</script>
<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <router-link tag="a" to="/" class="text-dark">
        <i class="fas fa-home h2"></i>
      </router-link>
    </div>
    <div class="account-pages my-5 pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card overflow-hidden">
              <div class="bg-primary">
                <div class="text-primary text-center p-4">
                  <h5 class="text-white font-size-20">Welcome Back !</h5>
                  <p class="text-white-50">Sign in to continue to Veltrix.</p>
                  <router-link tag="a" to="/" class="logo logo-admin">
                    <img src="@/assets/images/logo-sm.png" height="24" alt="logo" />
                  </router-link>
                </div>
              </div>

              <div class="card-body p-4">
                <div class="p-3">
                  <form class="form-horizontal mt-4">
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
                      <div class="col-sm-6">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customControlInline"
                          />
                          <label class="custom-control-label" for="customControlInline">Remember me</label>
                        </div>
                      </div>
                      <div class="col-sm-6 text-right">
                        <button class="btn btn-primary w-md" type="submit">Log In</button>
                      </div>
                    </div>

                    <div class="form-group mt-2 mb-0 row">
                      <div class="col-12 mt-4">
                        <router-link tag="a" to="/pages/recoverpwd-1">
                          <i class="mdi mdi-lock"></i> Forgot your password?
                        </router-link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="mt-5 text-center">
              <p>
                Don't have an account ?
                <router-link
                  tag="a"
                  to="/pages/register-1"
                  class="font-weight-medium text-primary"
                >Signup now</router-link>
              </p>
              <p class="mb-0">
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
</template>