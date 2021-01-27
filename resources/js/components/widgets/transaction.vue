<script>
/**
 * Transaction component
 */
export default {
  props: {
    transactions: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<template>
  <div class="table-responsive mb-0">
    <table class="table table-hover table-centered table-nowrap">
      <thead>
        <tr>
          <th scope="col">(#) Id</th>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col" colspan="2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in transactions" :key="data.id">
          <th scope="row">{{data.id}}</th>
          <td>
            <div>
              <img :src="`${data.image}`" alt class="avatar-xs rounded-circle mr-2" />
              {{data.name}}
            </div>
          </td>
          <td>{{data.date}}</td>
          <td>{{data.amount}}</td>
          <td>
            <span
              class="badge"
              :class="{
              'badge-danger': data.status === 'Cancel',
              'badge-warning': data.status === 'Pending',
              'badge-success': data.status === 'Delivered'
          }"
            >{{data.status}}</span>
          </td>
          <td>
            <div>
              <a href="#" class="btn btn-primary btn-sm">Edit</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>