<script>
  import Layout from "./subcomponent/layout";
  import appConfig from "@/app.config";
  import CourseItem from '@/components/course-item';
  
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    page: {
      title: "TutorialDashboard",
      meta: [{ name: "description", content: appConfig.description }]
    },
    components: {
      Layout,
      VueSlickCarousel,
      CourseItem
    },
    data() {
      return {
        courses : [1, 2, 3, 4, 5, 6],
        settings: {
          "focusOnSelect": true,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 4,
          "slidesToScroll": 4,
          "touchThreshold": 4,
          "responsive": [
            {
              "breakpoint": 1024,
              "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "infinite": true,
                "dots": true
              }
            },
            {
              "breakpoint": 600,
              "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 2,
                "initialSlide": 2
              }
            },
            {
              "breakpoint": 480,
              "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1
              }
            }
          ]
        },
        origin_settings: {
          "arrows": false,
          "dots": true,
          "dotsClass": "slick-dots custom-dot-class",
          "edgeFriction": 0.35,
          "infinite": false,
          "speed": 1000,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      };
    }
  };
</script>
  
<template>
  <Layout>
    <div class="px-5 py-4">
      <div class="mb-5">
        <h2 class="mb-4">Featured Course</h2>
        <VueSlickCarousel v-bind="origin_settings">
          <div class="row d-flex mx-0 mb-5">
            <div class="col-lg-6 pl-0 pr-4">
              <b-img
                :src="require('@/assets/images/small/img-1.jpg')"
                rounded
                class="w-100"
                height="350"
                alt="carousel"
              ></b-img>
            </div>
            <div class="col-lg-6 pl-4 pr-0">
              <div class="category-name">
                HOW TO USE
              </div>
              <h1 class="my-4">Novation AFX Station Review with King Unique</h1>
              <p>Want to know more about Ableton Live's Beat Repeat? We’ve got you covered!</p>
            </div>
          </div>
          <div>
            1
          </div>
        </VueSlickCarousel>
      </div>
      <div class="mb-5">
        <h2 class="mb-4">Recently added</h2>
        <VueSlickCarousel v-bind="settings">
          <div class="px-2" v-for="(number, index) in courses" :key="index">
            <CourseItem 
              image="/upload/image/1.png"
              category="HOW TO USE"
              title="Novation AFX Station Review With King Unique"
              link="1"
            >
            </CourseItem>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="mb-5">
        <h2 class="mb-4">Trending</h2>
        <VueSlickCarousel v-bind="settings">
          <div class="px-2" v-for="(number, index) in courses" :key="index">
            <CourseItem 
              image="/upload/image/1.png"
              category="HOW TO USE"
              title="Novation AFX Station Review With King Unique"
              link="1"
            >
            </CourseItem>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="mb-5">
        <h2 class="mb-4">Popular This Month</h2>
        <VueSlickCarousel v-bind="settings">
          <div class="px-2" v-for="(number, index) in courses" :key="index">
            <CourseItem 
              image="/upload/image/1.png"
              category="HOW TO USE"
              title="Novation AFX Station Review With King Unique"
              link="1"
            >
            </CourseItem>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
    <div class="synthesiser-section">
      <div class="section overlay d-flex align-items-center">
        <div class="text-center px-5">
          <h1>"Sonic Academy is a great resource for producers of all levels, their tutorials can guide newer producers but also include advanced tips for experienced producers"</h1>
          <h2><code class="highlighter-rouge">Enamour</code></h2>
          <h6>WORLD FAMOUS DJ & PRODUCER</h6>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style>
.slick-dots {
  bottom: 0;
}
.slick-dots li button:before {
  color: white !important;
}
.slick-dots li.slick-active button:before {
  color: white !important;
}
.slick-dots li button:before {
  font-size: 10px !important;
}
.category-name {
  border-left: solid #52ec52 3px;
  padding-left: 10px;
  margin-top: 10px;
}
</style>