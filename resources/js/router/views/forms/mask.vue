<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Form Mask component
 */
export default {
  page: {
    title: "Form Mask",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Form Mask",
      items: [
        {
          text: "Veltrix",
          href: "/"
        },
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Form Mask",
          active: true
        }
      ],
      date: "",
      hour: "",
      datetime: "",
      ipaddress: "",
      cnpj: "",
      cpf: "",
      celphone: "",
      ustelephone: "",
      areacode: "",
      telephone: "",
      zipcode: "",
      crazyzip: "",
      money: "",
      digit: ""
    };
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
            <h4 class="card-title mb-4">Example</h4>

            <div class="row">
              <div class="col-md-6">
                <form action="#">
                  <div class="form-group mb-4">
                    <label>Date</label>
                    <input v-model="date" v-mask="'##/##/####'" type="text" class="form-control" />
                    <span class="font-13 text-muted">e.g "DD/MM/YYYY"</span>
                  </div>
                  <div class="form-group mb-4">
                    <label>Hour</label>
                    <input v-model="hour" v-mask="'##:##:##'" type="text" class="form-control" />
                    <span class="font-13 text-muted">e.g "HH:MM:SS"</span>
                  </div>
                  <div class="form-group mb-4">
                    <label>Date & Hour</label>
                    <input
                      v-model="datetime"
                      v-mask="'##/##/#### ##:##:##'"
                      type="text"
                      class="form-control"
                    />
                    <span class="font-13 text-muted">e.g "DD/MM/YYYY HH:MM:SS"</span>
                  </div>
                  <div class="form-group mb-4">
                    <label>ZIP Code</label>
                    <input v-model="zipcode" v-mask="'#####-###'" type="text" class="form-control" />
                    <span class="font-13 text-muted">e.g "xxxxx-xxx"</span>
                  </div>
                  <div class="form-group mb-4">
                    <label>Crazy Zip Code</label>
                    <input
                      v-model="crazyzip"
                      v-mask="'#-##-##-##'"
                      type="text"
                      class="form-control"
                    />
                    <span class="font-13 text-muted">e.g "x-xx-xx-xx"</span>
                  </div>
                  <div class="form-group mb-4">
                    <label>Money</label>
                    <input
                      v-model="money"
                      v-mask="'###.###.###.###.###,##'"
                      type="text"
                      class="form-control"
                    />
                    <span class="font-13 text-muted">e.g "Your money"</span>
                  </div>
                  <div class="form-group mb-4">
                    <label>4 digit Group</label>
                    <input
                      v-model="digit"
                      v-mask="'#,####,####,####'"
                      type="text"
                      class="form-control"
                    />
                    <span class="font-13 text-muted">e.g. "x,xxxx,xxxx,xxxx"</span>
                  </div>
                </form>
              </div>
              <!-- end col -->

              <div class="col-md-6">
                <form action="#">
                  <div class="form-group mb-4">
                    <label>Telephone</label>
                    <input
                      v-model="telephone"
                      v-mask="'####-####'"
                      type="text"
                      class="form-control"
                    />
                    <span class="font-13 text-muted">e.g "xxxx-xxxx"</span>
                  </div>
                  <div class="form-group mb-4">
                    <label>Telephone with Code Area</label>
                    <input
                      v-model="areacode"
                      v-mask="'(##) ####-####'"
                      type="text"
                      class="form-control"
                    />
                    <span class="font-13 text-muted">e.g "(xx) xxxx-xxxx"</span>
                  </div>
                  <div class="form-group mb-4">
                    <label>US Telephone</label>
                    <input
                      v-model="ustelephone"
                      v-mask="'(###) ###-####'"
                      type="text"
                      class="form-control"
                    />
                    <span class="font-13 text-muted">e.g "(xxx) xxx-xxxx"</span>
                  </div>
                  <div class="form-group mb-4">
                    <label>São Paulo Celphones</label>
                    <input
                      v-model="celphone"
                      v-mask="'(##) #####-####'"
                      type="text"
                      class="form-control"
                    />
                    <span class="font-13 text-muted">e.g "(xx) xxxxx-xxxx"</span>
                  </div>
                  <div class="form-group mb-4">
                    <label>CPF</label>
                    <input v-model="cpf" v-mask="'###.###.###-##'" type="text" class="form-control" />
                    <span class="font-13 text-muted">e.g "xxx.xxx.xxxx-xx"</span>
                  </div>
                  <div class="form-group mb-4">
                    <label>CNPJ</label>
                    <input
                      v-model="cnpj"
                      v-mask="'##.###.###/####-##'"
                      type="text"
                      class="form-control"
                    />
                    <span class="font-13 text-muted">e.g "xx.xxx.xxx/xxxx-xx"</span>
                  </div>
                  <div class="form-group mb-4">
                    <label>IP Address</label>
                    <input
                      v-model="ipaddress"
                      v-mask="'###.###.###.###'"
                      type="text"
                      class="form-control"
                    />
                    <span class="font-13 text-muted">e.g "xxx.xxx.xxx.xxx"</span>
                  </div>
                </form>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>