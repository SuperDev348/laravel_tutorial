<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";
import { required } from "vuelidate/lib/validators";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { calendarEvents } from "./data";

export default {
  page: {
    title: "Calendar",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    FullCalendar,
    Layout,
    PageHeader
  },
  data() {
    return {
      title: "Calendar",
      items: [
        {
          text: "Veltrix",
          href: "/"
        },
        {
          text: "Calendar",
          active: true
        }
      ],
      calendarWeekends: true,
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        bootstrapPlugin,
        listPlugin
      ],
      themeSystem: "bootstrap",
      calendarEvents: calendarEvents,
      showmodal: false,
      submitted: false,
      date: "",
      event: {
        title: ""
      }
    };
  },
  validations: {
    event: {
      title: { required }
    }
  },
  methods: {
    /**
     * Date clicked and show the modal
     */
    dateClicked(arg) {
      this.newEventData = arg;
      this.showmodal = true;
      this.date = arg.date;
    },

    /**
     * Modal form submit
     */
    handleSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        const title = this.event.title;
        this.calendarEvents = this.calendarEvents.concat({
          id: this.calendarEvents.length + 1,
          title: title,
          start: this.date,
          backgroundColor: "#626ed4"
        });
        this.showmodal = false;
        this.newEventData = {};
      }
      this.submitted = false;
      this.event = {};
    },

    /**
     * Hide modal along with form reset
     */
    hideModal() {
      this.submitted = false;
      this.showmodal = false;
      this.event = {};
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="app-calendar">
              <!-- Calendar -->
              <FullCalendar
                ref="fullCalendar"
                default-view="dayGridMonth"
                :header="{ left: 'prev,next today',center: 'title',right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek' }"
                :editable="true"
                :droppable="true"
                :plugins="calendarPlugins"
                :events="calendarEvents"
                :weekends="calendarWeekends"
                :theme-system="themeSystem"
                @dateClick="dateClicked($event)"
              />
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <!-- modal -->
      <b-modal
        v-model="showmodal"
        title="Add New Event"
        title-class="text-black font-18"
        hide-footer
      >
        <form @submit.prevent="handleSubmit">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="name">Event Name</label>
                <input
                  id="name"
                  v-model="event.title"
                  type="text"
                  class="form-control"
                  placeholder="Enter name"
                  :class="{ 'is-invalid': submitted && $v.event.title.$error }"
                />
                <div
                  v-if="submitted && !$v.event.title.required"
                  class="invalid-feedback"
                >This value is required.</div>
              </div>
            </div>

            <div class="text-right p-3">
              <button type="submit" class="btn btn-primary">Save</button>
              <b-button class="ml-1" variant="light" @click="hideModal">Close</b-button>
            </div>
          </div>
        </form>
      </b-modal>
      <!-- end modal -->
    </div>
    <!-- end row -->
  </Layout>
</template>