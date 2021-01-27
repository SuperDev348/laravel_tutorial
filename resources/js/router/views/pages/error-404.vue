<script>
import appConfig from "@/app.config";

export default {
   page: {
    title: "404",
    meta: [{ name: "description", content: appConfig.description }]
  },
}
</script>
<template>
  <div class="authentication-bg d-flex align-items-center pb-0 vh-100">
    <div class="content-center w-100">
      <div class="container">
        <div class="card mo-mt-2">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-lg-4 ml-auto">
                <div class="ex-page-content">
                  <h1 class="text-dark display-1 mt-4">404!</h1>
                  <h4 class="mb-4">Sorry, page not found</h4>
                  <p
                    class="mb-5"
                  >It will be as simple as Occidental in fact, it will be Occidental to an English person</p>
                  <router-link tag="a" class="btn btn-primary mb-5" to="/">
                    <i class="mdi mdi-home"></i> Back to Dashboard
                  </router-link>
                </div>
              </div>
              <div class="col-lg-5 mx-auto">
                <img src="@/assets/images/error.png" alt class="img-fluid mx-auto d-block" />
              </div>
            </div>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end container -->
    </div>
  </div>
</template>