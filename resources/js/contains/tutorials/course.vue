<script>
  import {mapActions, mapGetters} from 'vuex';

  import Layout from "./subcomponent/layout";
  import appConfig from "@/app.config";
  import StarRating from "vue-star-rating";
  import CourseItem from '@/components/course-item';
  
  export default {
    page: {
      title: "TutoiralCourse",
      meta: [{ name: "description", content: appConfig.description }]
    },
    components: {
      Layout,
      StarRating,
      CourseItem
    },
    methods: {
      ...mapActions([
        'getCourseById',
      ]),
      selectTutorial(id) {
        let cnt = this.getCourse.tutorials.length;
        this.getCourse.tutorials.forEach((tutorial, index) => {
          if(tutorial.id == id){
            this.tutorial = tutorial;
            if(index + 1 < cnt)
              this.next_tutorial = this.getCourse.tutorials[index + 1];
            else
              this.next_tutorial = {};

          }
        })
      }
    },
    computed: {
      ...mapGetters([
        'getCourse',
      ]),
    },
    watch: {
      getCourse: function(course) {
        if (course.tutorials.length != 0)
          this.tutorial = course.tutorials[0];
        if (course.tutorials.length > 1)
          this.next_tutorial = course.tutorials[1];
      }
    },
    mounted() {
      this.getCourseById(this.$route.params.title);
    },
    data() {
      return {
        courses: [1, 2, 3, 4],
        tutorial: {},
        next_tutorial: {},
      };
    }
  };
</script>
    
<template>
  <Layout>
    <div style="padding: 50px 40px;">
      <div class="d-flex justify-content-between align-items-center pb-4">
        <div>
          <div style="border-left: solid #52ec52 3px;padding-left: 10px;">
            {{ getCourse.category != undefined ? getCourse.category.name : null }}
          </div>
          <h1 class="my-3">{{ getCourse.title }}</h1>
          <div class="d-flex">
            <div class="pr-2" style="border-right: 1px solid grey;;" v-b-tooltip.hover title="Subscribe to rate this course">
              <star-rating :rtl="true" :rating="getCourse.rate" :read-only="true" :increment="0.1" :star-size="23"></star-rating>
            </div>
            <div class="pl-2 pt-1" v-b-tooltip.hover title="Sign in to add to favorites">
              <span class="pr-2">Add to my course</span>
              <i class="fas fa-plus-circle fa-fw"></i>
            </div>
          </div>
        </div>
        <div class="tutor">
          <b-media class="" vertical-align="center">
            <template v-slot:aside>
              <b-img
                :src="getCourse.tutor != undefined? getCourse.tutor.avatar : ''"
                rounded
                height="100"
                alt="Generic tutor image"
              ></b-img>
            </template>
            <p class="pt-4"><span>by</span> {{ getCourse.tutor != undefined? getCourse.tutor.name : null }}<br>Beginner and Intermediate<br>00h 55m</p>
          </b-media>
        </div>
      </div>
      <!-- Tutorial Video -->
      <div class="py-4" style="border-top: 1px solid grey;">
        <b-embed
          type="iframe"
          aspect="21by9"
          class="embed-responsive-item"
          :src="tutorial.source"
        ></b-embed>
        <div class="d-flex justify-content-between bg-black p-4">
          <div>
            <p class="text-muted mb-0">NOW PLAYING</p>
            <p class="mb-0">Tutorial {{ tutorial.priority }} - {{ tutorial.name }}</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="text-right pr-4">
              <p class="text-muted mb-0">UP NEXT</p>
              <p class="mb-0" style="cursor: pointer;">{{ next_tutorial.priority!= undefined? "Tutorial " + next_tutorial.priority + " - " + next_tutorial.name : " "}}</p>
            </div>
            <a href="#">
              <i class="fas fa-bars font-30"></i>
            </a>
          </div>
        </div>
        <div class="row mx-0 p-4" style="background-color: #a7a7a71c;">
          <div class="col-4 pb-3">
            <h5 class="text-muted">TUTORIAL DESCRIPTION</h5>
            <p class="mb-0">{{ tutorial.description }}</p>
          </div>
          <div class="col-4 pb-3" style="border-left: 1px solid grey;">
            <h5 class="text-muted">SOFTWARE</h5>
            <p class="mb-0">{{ getCourse.software != undefined? getCourse.software.name: "" }}</p>
          </div>
          <div class="col-4 pb-3" style="border-left: 1px solid grey;">
            <h5 class="text-muted">COURSE PROGRESS</h5>
            <b-progress :value="25" :max="100"></b-progress>
          </div>
        </div>
      </div>
      <!-- Video end -->
      <!-- Tutorial list -->
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <b-tabs content-class="p-0">
            <b-tab active class="border-0">
              <template v-slot:title>
                <span class="d-none d-sm-inline-block">Tutorials</span>
              </template>
              <ul class="p-0">
                <li class="tutorial-list d-flex justify-content-between align-items-center p-3" v-for="(tutorial, index) in getCourse.tutorials" :key="index">
                  <div class="title d-flex align-items-center" @click="selectTutorial(tutorial.id)">
                    <i class="fas fa-play-circle font-24 mr-3"></i>
                    <p class="mb-0">Tutorial {{ index+1 }} - {{ tutorial.name }}</p>
                  </div>
                  <div>
                    <span class="pr-3 text-muted">{{ Math.floor(tutorial.time/60) + ":" + tutorial.time%60 }}</span>
                    <i class="far fa-star pr-3" v-b-tooltip.hover title="Sign in to add to favorites"></i>
                    <i class="fas fa-bars" v-b-tooltip.hover title="Sign in to add to list"></i>
                  </div>
                </li>
              </ul>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <span class="d-none d-sm-inline-block">Details</span>
              </template>
              <div class="p-3">
                <h5 class="text-muted">COURSE DESCRIPTION</h5>
                <p>{{ getCourse.detail }}</p>
              </div>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <span class="d-none d-sm-inline-block">Comments</span>
              </template>
              <div class="pt-5">
                <h5 class="text-muted">COMMENTS</h5>
                <div class="text-center mt-5 mb-3">
                  <b-button pill size="lg" variant="outline-light">Please sign in to comment</b-button><br>
                </div>
                <div class="text-center">
                  <a href="#" class="text-muted">continue the discussion on the forums</a>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
        <div class="col-lg-4 col-md-12 row pt-5 pb-4"> 
          <div class="col-lg-12 col-md-4">
            <b-button variant="info" size="lg" class="w-100">Unlock all courses £9.99</b-button>
            <div class="text-center my-4">
              <p style="font-weight: 500;">Subscribe for UNLIMITED ACCESS</p>
              <p>Subscribe to get UNLIMITED streaming access to all AudioTri courses including all project files, samples & resources</p>
              <a href="#">What's included?</a>
            </div>
          </div>
          <div class="col-lg-12 col-md-4">
            <b-button variant="dark" size="lg" class="w-100">Download £11.96</b-button>
            <div class="text-center my-4">
              <p style="font-weight: 500;">20% off SALE price - was <del>£14.95</del></p>
              <p>For a one time purchase price you can download and view the videos from this course offline, forever</p>
            </div>
          </div>
          <div class="col-lg-12 col-md-4 text-center text-muted">
            <p style="font-weight: 500;">SHARE: </p>
            <i class="fab fa-facebook-f font-30 fa-fw"></i>
            <i class="fab fa-twitter font-30 fa-fw"></i>
            <i class="fab fa-google-plus-g font-30 fa-fw"></i>
            <i class="fas fa-envelope font-30 fa-fw"></i>
          </div>
        </div>
      </div>
      <!-- List end -->
      <!-- Related Courses -->
      <div class="py-4" style="border-top: 1px solid grey;">
        <h5 class="text-muted mb-4">Related Courses</h5>
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6" v-for="(number, index) in courses" :key="index">
            <CourseItem 
              image="/upload/image/1.png"
              category="HOW TO USE"
              title="Novation AFX Station Review With King Unique"
              link="1"
            >
            </CourseItem>
          </div>
        </div>
      </div>
      <!-- Related Courses end -->
    </div>
  </Layout>
</template>

<style>
  i {
    cursor: pointer;
  }
  .tutor{
    border-left: 1px solid grey;
    padding-left: 25px;
    cursor: pointer;
  }
  .tutor:hover{
    background-color: #a7a7a71c;
  }
  .bg-black {
    background-color: black;
  }
  .font-30 {
    font-size: 30px;
  }
  .font-24 {
    font-size: 24px;
  }
  .tutorial-list {
    background-color:  #00000063;
  }
  .tutorial-list:hover {
    background-color: black;
  }
  .tutorial-list .title {
    cursor: pointer;
    color: #ffffff94;
  }
  .tutorial-list .title:hover {
    color: white;
  }
  </style>