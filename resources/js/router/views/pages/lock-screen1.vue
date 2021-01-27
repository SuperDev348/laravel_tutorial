<script>
import appConfig from "@/app.config";

/**
 * Lock-screen-1 component
 */
export default {
  page: {
    title: "Lock screen-1",
    meta: [{ name: "description", content: appConfig.description }]
  }};
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
                  <h5 class="text-white font-size-20">Locked</h5>
                  <p class="text-white-50">Hello Smith, enter your password to unlock the screen!</p>
                  <router-link tag="a" to="/" class="logo logo-admin">
                    <img src="@/assets/images/logo-sm.png" height="24" alt="logo" />
                  </router-link>
                </div>
              </div>

              <div class="card-body p-4">
                <div class="p-3">
                  <form class="form-horizontal mt-4">
                    <div class="pt-3 text-center">
                      <img
                        src="@/assets/images/users/user-6.jpg"
                        class="rounded-circle img-thumbnail avatar-lg"
                        alt="thumbnail"
                      />
                      <h6 class="font-size-16 mt-3">Robert Smith</h6>
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

                    <div class="form-group row mb-0">
                      <div class="col-12 text-right">
                        <button class="btn btn-primary w-md" type="submit">Unlock</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="mt-5 text-center">
              <p>
                Not you ? return
                <router-link
                  tag="a"
                  to="/pages/login-1"
                  class="font-weight-medium text-primary"
                >Sign In</router-link>
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
      <!-- end container -->
    </div>
  </div>
</template>