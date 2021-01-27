<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Directory component
 */
export default {
  page: {
    title: "Directory",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Directory",
      items: [
        {
          text: "Veltrix",
          href: "/"
        },
        {
          text: "Extra Pages",
          href: "/"
        },
        {
          text: "Directory",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-4 col-md-6">
        <div class="card directory-card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/images/users/user-2.jpg"
                alt
                class="img-fluid img-thumbnail rounded-circle avatar-lg"
              />
              <div class="media-body ml-3">
                <h5 class="text-primary font-size-18 mt-0 mb-1">Jerome A. Hebert</h5>
                <p class="font-size-12 mb-2">Creative Director</p>
                <p class="mb-0">Jerome@veltrix.com</p>
              </div>
              <ul class="list-unstyled social-links float-right">
                <li>
                  <a href="#" class="btn-primary">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="btn-info">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <p class="mb-0">
              <b>Intro :</b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...
              <a href="#" class="text-primary">Read More</a>
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-4 col-md-6">
        <div class="card directory-card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/images/users/user-3.jpg"
                alt
                class="img-fluid img-thumbnail rounded-circle avatar-lg"
              />
              <div class="media-body ml-3">
                <h5 class="text-primary font-size-18 mt-0 mb-1">Adam V. Acker</h5>
                <p class="font-size-12 mb-2">Creative Director</p>
                <p class="mb-0">Adam@veltrix.com</p>
              </div>
              <ul class="list-unstyled social-links float-right">
                <li>
                  <a href="#" class="btn-primary">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="btn-info">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <p class="mb-0">
              <b>Intro :</b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...
              <a href="#" class="text-primary">Read More</a>
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-4 col-md-6">
        <div class="card directory-card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/images/users/user-4.jpg"
                alt
                class="img-fluid img-thumbnail rounded-circle avatar-lg"
              />
              <div class="media-body ml-3">
                <h5 class="text-primary font-size-18 mt-0 mb-1">Stanley M. Dyke</h5>
                <p class="font-size-12 mb-2">Creative Director</p>
                <p class="mb-0">Stanley@veltrix.com</p>
              </div>
              <ul class="list-unstyled social-links float-right">
                <li>
                  <a href="#" class="btn-primary">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="btn-info">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <p class="mb-0">
              <b>Intro :</b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...
              <a href="#" class="text-primary">Read More</a>
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-xl-4 col-md-6">
        <div class="card directory-card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/images/users/user-5.jpg"
                alt
                class="img-fluid img-thumbnail rounded-circle avatar-lg"
              />
              <div class="media-body ml-3">
                <h5 class="text-primary font-size-18 mt-0 mb-1">Ben J. Mathison</h5>
                <p class="font-size-12 mb-2">Creative Director</p>
                <p class="mb-0">Ben@veltrix.com</p>
              </div>
              <ul class="list-unstyled social-links float-right">
                <li>
                  <a href="#" class="btn-primary">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="btn-info">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <p class="mb-0">
              <b>Intro :</b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...
              <a href="#" class="text-primary">Read More</a>
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-4 col-md-6">
        <div class="card directory-card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/images/users/user-6.jpg"
                alt
                class="img-fluid img-thumbnail rounded-circle avatar-lg"
              />
              <div class="media-body ml-3">
                <h5 class="text-primary font-size-18 mt-0 mb-1">John V. Bailey</h5>
                <p class="font-size-12 mb-2">Creative Director</p>
                <p class="mb-0">John@veltrix.com</p>
              </div>
              <ul class="list-unstyled social-links float-right">
                <li>
                  <a href="#" class="btn-primary">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="btn-info">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <p class="mb-0">
              <b>Intro :</b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...
              <a href="#" class="text-primary">Read More</a>
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-4 col-md-6">
        <div class="card directory-card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/images/users/user-7.jpg"
                alt
                class="img-fluid img-thumbnail rounded-circle avatar-lg"
              />
              <div class="media-body ml-3">
                <h5 class="text-primary font-size-18 mt-0 mb-1">Antonio J. Thomas</h5>
                <p class="font-size-12 mb-2">Creative Director</p>
                <p class="mb-0">Antonio@veltrix.com</p>
              </div>
              <ul class="list-unstyled social-links float-right">
                <li>
                  <a href="#" class="btn-primary">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="btn-info">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <p class="mb-0">
              <b>Intro :</b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...
              <a href="#" class="text-primary">Read More</a>
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-xl-4 col-md-6">
        <div class="card directory-card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/images/users/user-8.jpg"
                alt
                class="img-fluid img-thumbnail rounded-circle avatar-lg"
              />
              <div class="media-body ml-3">
                <h5 class="text-primary font-size-18 mt-0 mb-1">Jerome A. Hebert</h5>
                <p class="font-size-12 mb-2">Creative Director</p>
                <p class="mb-0">Jerome@veltrix.com</p>
              </div>
              <ul class="list-unstyled social-links float-right">
                <li>
                  <a href="#" class="btn-primary">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="btn-info">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <p class="mb-0">
              <b>Intro :</b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...
              <a href="#" class="text-primary">Read More</a>
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-4 col-md-6">
        <div class="card directory-card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/images/users/user-9.jpg"
                alt
                class="img-fluid img-thumbnail rounded-circle avatar-lg"
              />
              <div class="media-body ml-3">
                <h5 class="text-primary font-size-18 mt-0 mb-1">Adam V. Acker</h5>
                <p class="font-size-12 mb-2">Creative Director</p>
                <p class="mb-0">Adam@veltrix.com</p>
              </div>
              <ul class="list-unstyled social-links float-right">
                <li>
                  <a href="#" class="btn-primary">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="btn-info">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <p class="mb-0">
              <b>Intro :</b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...
              <a href="#" class="text-primary">Read More</a>
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-4 col-md-6">
        <div class="card directory-card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/images/users/user-10.jpg"
                alt
                class="img-fluid img-thumbnail rounded-circle avatar-lg"
              />
              <div class="media-body ml-3">
                <h5 class="text-primary font--size18 mt-0 mb-1">Stanley M. Dyke</h5>
                <p class="font-size-12 mb-2">Creative Director</p>
                <p class="mb-0">Stanley@veltrix.com</p>
              </div>
              <ul class="list-unstyled social-links float-right">
                <li>
                  <a href="#" class="btn-primary">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="btn-info">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <p class="mb-0">
              <b>Intro :</b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...
              <a href="#" class="text-primary">Read More</a>
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>