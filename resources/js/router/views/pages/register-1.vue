<script>
import appConfig from "@/app.config";

/**
 * Register-1 component
 */
export default {
  page: {
    title: "Register-1",
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
                  <h5 class="text-white font-size-20">Free Register</h5>
                  <p class="text-white-50">Get your free Veltrix account now.</p>
                  <router-link tag="a" to="/" class="logo logo-admin">
                    <img src="@/assets/images/logo-sm.png" height="24" alt="logo" />
                  </router-link>
                </div>
              </div>

              <div class="card-body p-4">
                <div class="p-3">
                  <form class="form-horizontal mt-4">
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
                  </form>
                </div>
              </div>
            </div>

            <div class="mt-5 text-center">
              <p>
                Already have an account ?
                <router-link
                  tag="a"
                  to="/pages/login-1"
                  class="font-weight-medium text-primary"
                >Login</router-link>
              </p>
              <p>
                ©
                {{ new Date().getFullYear()}}
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