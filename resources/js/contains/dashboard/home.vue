<script>
import Layout from "../layouts/main";
import appConfig from "@/app.config";
import CourseItem from '@/components/course-item';

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import {  } from "./data";

export default {
  page: {
    title: "Homepage",
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
      }
    };
  }
};
</script>

<template>
  <Layout>
    <!--header video start -->
    <div class="embed-responsive" style="position: fixed;z-index: -999;">
      <b-embed type="video" aspect="16by9" autoplay muted loop width="100%">
        <source src="/video/2.mp4" type="video/mp4">
      </b-embed>
    </div>
    <!--header video end -->
    <div class="section overlay d-flex align-items-center justify-content-center" style="height: 600px;">
      <div class="text-center">
        <h1 class="mb-4 display-4">Join The World's <code class="highlighter-rouge">Leading</code> Online <br><code class="highlighter-rouge">Electronic Music</code> Academy</h1>
        <h3 class="mb-5">Watch <code class="highlighter-rouge">1169+</code> hours of step-by-step masterclass tutorials from industry leading <br>A-List Producers & DJs and take your production skills to the next level!</h3>
        <div>
          <b-button class="mr-5" pill variant="primary" size="lg">Start your Free 7 Day Trial</b-button>
          <b-button pill variant="secondary" size="lg">
            Watch Video
            <i class="fas fa-play-circle"></i>
          </b-button>
        </div>
      </div>
    </div>
    <!-- owl-carousel -->
    <div class="section bg-white">
      <h1 class="black">What's New</h1>
      <p class="black">Latest Courses, Sounds, News and Features</p>
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
    <!-- owl-carousel end -->
    <div class="section text-center" style="background: #222736;">
      <h1 class="mb-3">
        Learn From
        <code class="highlighter-rouge">A-List Producers </code>
        Anytime, Anywhere
      </h1>
      <h4 class="mb-3">
        Meet some of the industries leading
        <code class="highlighter-rouge">producers </code>
        you'll be learning from!
      </h4>
      <div>
        <b-img :src="require('@/assets/images/gallery/home-logos.jpg')" fluid alt="logos"></b-img>
      </div>
      <b-button class="mt-3" pill variant="primary" size="lg">Start your Free 7 Day Trial</b-button>
    </div>
    <!-- carousel start -->
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <!-- Text slides with image -->
        <b-carousel-slide :img-src="require('@/assets/images/gallery/carousel-1.jpg')">
          <h3 class="text-white">First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide :img-src="require('@/assets/images/gallery/carousel-2.jpg')">
          <h3 class="text-white">Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide :img-src="require('@/assets/images/gallery/carousel-3.jpg')">
          <h3 class="text-white">Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <!-- carousel end-->
    <div class="section text-center" style="background: #222736;">
      <h1 class="mb-3">
        Why Join
        <code class="highlighter-rouge">A-List Producers </code>
        AudioTri
      </h1>
      <h4 class="mb-3">
        We have 
        <code class="highlighter-rouge"> more content </code>
        and A-List Artists than any other academy!
      </h4>
      <div class="row my-4">
        <div class="col-lg-3 col-md-6 col-sm-12 text-center">
          <i class="far fa-clock font-75 my-4"></i>
          <h4>1169+ Hours Of Tutorials</h4>
          <p>Access to 1169+ hours of A-List Producer Tutorials.</p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 text-center">
          <i class="fas fa-mobile-alt font-75 my-4"></i>
          <h4>Learn On The Go</h4>
          <p>Watch and learn on desktop, phone or TV.</p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 text-center">
          <i class="fas fa-headphones font-75 my-4"></i>
          <h4>New Tuts Every Week</h4>
          <p>Brand new masterclasses added every single week.</p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 text-center">
          <i class="fas fa-cloud-download-alt font-75 my-4"></i>
          <h4>Course Resources</h4>
          <p>Downloadable samples & project files provided.</p>
        </div>
      </div>
      <b-button class="mt-3" pill variant="primary" size="lg">Start your Free 7 Day Trial</b-button>
    </div>
    <div class="synthesiser-section">
      <div class="section row overlay">
        <div class="col-lg-6 d-flex align-items-center">
          <div>
            <h2>Browse Loops & <br>Sample Packs</h2>
            <b-button class="mt-3" pill variant="primary" size="lg">Shop Now</b-button>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center">
          <div>
            <h2>Browse Our <br>VSTi Plugins</h2>
            <b-button class="mt-3" pill variant="primary" size="lg">Shop Now</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="section bg-white black d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <i class="far fa-clock font-75 mr-3"></i>
        <div>
          <h4 style="font-weight: bold;">Stay up to date</h4>
          <p class="mb-0">Join our mailing list to get the latest news and exclusive discounts!</p>
        </div>
      </div>
      <div>
        <b-button class="" pill variant="primary" size="lg">Join Mail List</b-button>
      </div>
    </div>
  </Layout>
</template>
<style>
  .course-div .title {
    color: black;
  }
</style>
