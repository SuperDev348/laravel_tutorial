<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Images component
 */
export default {
  page: {
    title: "Images",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Images",
      items: [
        {
          text: "Veltrix",
          href: "/"
        },
        {
          text: "UI Elements",
          href: "/"
        },
        {
          text: "Images",
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
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Image thumbnails</h4>
            <p class="card-title-desc">
              In addition to our border-radius utilities, you can use
              <code
                class="highlighter-rouge"
              >thumbnail</code> to give an image a
              rounded 1px border appearance.
            </p>

            <div class>
              <b-img
                :src="require('@/assets/images/small/img-3.jpg')"
                width="200"
                thumbnail
                alt="200x200"
              ></b-img>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Image Rounded & Circle</h4>
            <p class="card-title-desc">
              Use attribute
              <code>rounded</code> and
              <code>rounded='circle'</code>.
            </p>

            <div class>
              <b-img
                :src="require('@/assets/images/small/img-4.jpg')"
                rounded
                class="mr-2 mo-mb-2"
                width="200"
                alt="200x200"
              ></b-img>

              <b-img
                :src="require('@/assets/images/users/user-4.jpg')"
                rounded="circle"
                alt="200x200"
              ></b-img>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Responsive images</h4>
            <p class="card-title-desc">
              Images in Bootstrap are made responsive
              with
              <code
                class="highlighter-rouge"
              >fluid</code>.
              <code class="highlighter-rouge">max-width: 100%;</code> and
              <code class="highlighter-rouge">height: auto;</code> are applied to
              the image so that it scales with the parent element.
            </p>

            <div class>
              <b-img :src="require('@/assets/images/small/img-2.jpg')" fluid alt="Responsive image"></b-img>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Default media object</h4>
            <p class="card-title-desc">
              The default media displays a media
              object (images, video, audio) to the left or right of a content
              block.
            </p>

            <b-media class="mb-4">
              <template v-slot:aside>
                <b-img
                  :src="require('@/assets/images/users/user-6.jpg')"
                  rounded="circle"
                  height="64"
                  alt="Generic placeholder image"
                ></b-img>
              </template>
              <h5 class="mt-0 font-16">Media heading</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </b-media>

            <b-media class="mb-4">
              <template v-slot:aside>
                <b-img
                  :src="require('@/assets/images/users/user-2.jpg')"
                  rounded="circle"
                  height="64"
                  alt="Generic placeholder image"
                ></b-img>
              </template>
              <b-media-body>
                <h5 class="mt-0 font-16">Media heading</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                <b-media class="mt-3">
                  <template v-slot:aside>
                    <b-img
                      :src="require('@/assets/images/users/user-3.jpg')"
                      rounded="circle"
                      height="64"
                      alt="Generic placeholder image"
                    ></b-img>
                  </template>

                  <b-media-body>
                    <h5 class="mt-0 font-16">Media heading</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </b-media-body>
                </b-media>
              </b-media-body>
            </b-media>

            <b-media right-align>
              <b-media-body>
                <h5 class="mt-0 mb-1 font-16">Media object</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </b-media-body>
              <template v-slot:aside>
                <b-img
                  :src="require('@/assets/images/users/user-4.jpg')"
                  rounded="circle"
                  height="64"
                  alt="Generic placeholder image"
                ></b-img>
              </template>
            </b-media>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Media alignment</h4>
            <p class="card-title-desc">
              The images or other media can be
              aligned top, middle, or bottom. The default is top aligned.
            </p>

            <b-media class="mb-4" vertical-align="top">
              <template v-slot:aside>
                <b-img
                  :src="require('@/assets/images/users/user-3.jpg')"
                  rounded
                  height="64"
                  alt="Generic placeholder image"
                ></b-img>
              </template>
              <h5 class="mt-0 font-16">Top-aligned media</h5>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              <p
                class="mb-0"
              >Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </b-media>

            <b-media class="mb-4" vertical-align="center">
              <template v-slot:aside>
                <b-img
                  :src="require('@/assets/images/users/user-5.jpg')"
                  rounded
                  height="64"
                  alt="Generic placeholder image"
                ></b-img>
              </template>
              <h5 class="mt-0 font-16">Center-aligned media</h5>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              <p
                class="mb-0"
              >Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </b-media>

            <b-media class="mb-4" vertical-align="end">
              <template v-slot:aside>
                <b-img
                  :src="require('@/assets/images/users/user-1.jpg')"
                  rounded
                  height="64"
                  alt="Generic placeholder image"
                ></b-img>
              </template>
              <h5 class="mt-0 font-16">Bottom-aligned media</h5>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              <p
                class="mb-0"
              >Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </b-media>
          </div>
        </div>
      </div>
    </div>
    <!--end row-->
  </Layout>
</template>