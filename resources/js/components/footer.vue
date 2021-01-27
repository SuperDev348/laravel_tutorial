<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <div class="mr-4">
            <a href="/">
              <span class="logo-lg">
                <img src="@/assets/images/logo-sm.png" alt height="50" width="50" />
              </span>
            </a>
          </div>
          <div class="navbar-expand-lg">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link tag="a" class="nav-link side-nav-link" to="/">
                  About
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class="nav-link side-nav-link" to="/">
                  Terms and Conditions
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class="nav-link side-nav-link" to="/">
                  Privacy and Policy
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-expand-lg">
          <div class="text-right">
            <p class="mb-1">Select Preferred Currency</p>
          </div>
          <ul class="navbar-nav currency">
            <li class="nav-item active pr-3">
              <b-img
                :src="require('@/assets/images/flags/britain_flag.jpg')"
                rounded="circle"
                width="15"
                height="15"
                alt="flag"
              ></b-img>
              <span>£ GBP</span>
            </li>
            <li class="nav-item pr-3">
              <b-img
                :src="require('@/assets/images/flags/europe_flag.jpg')"
                rounded="circle"
                width="15"
                height="15"
                alt="flag"
              ></b-img>
              <span>€ EUR</span>
            </li>
            <li class="nav-item">
              <b-img
                :src="require('@/assets/images/flags/us_flag.jpg')"
                rounded="circle"
                width="15"
                height="15"
                alt="flag"
              ></b-img>
              <span>$ USD</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- Copyright -->
      <div class="row">
        <div class="col-12">
          © {{new Date().getFullYear()}} 
          <span class="d-none d-sm-inline-block">
            - Copyright
            <i class="mdi mdi-heart text-danger"></i> by AudioTri.
          </span>
        </div>
      </div>
    </div>
  </footer>
  <!-- end footer -->
</template>
<style>
  .currency li {
    cursor: pointer;
  }
  .currency .active {
    color: white;
  }
</style>
