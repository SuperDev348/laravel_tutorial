<script>
import {mapActions, mapGetters} from 'vuex';

import Layout from "./subcomponent/layout";
import appConfig from "@/app.config";
import CourseItem from '@/components/course-item';
import Multiselect from "vue-multiselect";

import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  page: {
    title: "TutoiralAllCourses",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
    CourseItem,
    VueSlickCarousel,
    Multiselect
  },
  methods: {
    ...mapActions([
      'initCourse'
    ]),
  },
  computed: {
    ...mapGetters([
      'getCourses',
    ])
  },
  mounted() {
    this.initCourse();
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
      values: [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      options: [
        [
        "Alaska",
        "Hawaii"
        ],
        [
        "Alaska",
        "Hawaii"
        ],
        [
        "Alaska",
        "Hawaii"
        ],
        [
        "Alaska",
        "Hawaii"
        ],
        [
        "Alaska",
        "Hawaii"
        ],
        [
        "Alaska",
        "Hawaii"
        ]
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <div class="px-5 py-4">
      <div class="mb-5">
        <h2 class="mb-4">Featured Course</h2>
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
        <h2 class="mb-3">Browse</h2>
        <!-- Search Form -->
        <form class="app-search">
          <div class="position-relative">
            <span class="fa fa-search"></span>
            <input type="text" class="form-control" placeholder="Search..." />
          </div>
        </form>
        <!-- Search Form End -->
        <!-- Category -->
        <div class="row mt-3">
          <div class="col-lg-2">
            <label>CATEGORY</label>
            <multiselect v-model="values[0]" :options="options[0]"></multiselect>
          </div>

          <div class="col-lg-2">
            <label>GENRE</label>
            <multiselect v-model="values[1]" :options="options[1]"></multiselect>
          </div>

          <div class="col-lg-2">
            <label>SOFTWARE</label>
            <multiselect v-model="values[2]" :options="options[2]"></multiselect>
          </div>

          <div class="col-lg-2">
            <label>DIFFICULTY</label>
            <multiselect v-model="values[3]" :options="options[3]"></multiselect>
          </div>

          <div class="col-lg-2">
            <label>TOPIC</label>
            <multiselect v-model="values[4]" :options="options[4]"></multiselect>
          </div>

          <div class="col-lg-2">
            <label>SOUNDS LIKE</label>
            <multiselect v-model="values[5]" :options="options[5]"></multiselect>
          </div>
        </div>
        <!-- Category End -->
        <!-- Free Check -->
        <div class="mt-2">
          <div class="custom-control custom-checkbox">
            <input id="customCheck1" type="checkbox" class="custom-control-input" />
            <label
              class="custom-control-label"
              for="customCheck1"
            >Display Free Courses</label>
          </div>
        </div>
        <!-- Free Check End -->
        <!-- Todo List -->
        <div class="text-right mt-4" style="border-bottom: 1px solid grey;">
          <span>Clear all filters</span>
        </div>
        <!-- Todo List End -->
        <!-- Courses List -->
        <div>
          <div class="py-3 d-flex justify-content-between align-items-center" style="border-bottom: 1px solid grey;">
            <p class="mb-0">94 results found in 3ms</p>
            <div style="width: 15%;">
              <multiselect v-model="values[0]" :options="options[0]"></multiselect>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6" v-for="(course, index) in getCourses" :key="index">
              <CourseItem 
                :image="course.image"
	          :category="course.category.name"
	          :title="course.category.title"
	          :link="course.id"
              >
              </CourseItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>