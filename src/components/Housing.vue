<template>
  <div>
    <header>
      <h1>DualHousing Mannheim</h1>

      <button @click="openModal">Offer Your Flat</button>
      <nav>
        <router-link to="/blackboard">Blackboard</router-link>
        <router-link to="/housing">DualHousing</router-link>
      </nav>
    </header>

    <div id="entries">
      <div v-for="entry in entries" :key="entry.id" class="entry">
        <img :src="entry.imageUrl" alt="Flat Image" />

        <div class="entry-info">
          <p>
            <i class="fas fa-clock"></i> Availability: {{ entry.availability }}
          </p>

          <p>
            <i class="fas fa-money-bill"></i> Cost: {{ entry.cost }} EUR / month
          </p>

          <p>
            <i class="fas fa-map-marker-alt"></i> Address: {{ entry.address }}
          </p>
        </div>
      </div>
    </div>

    <!-- Modal for adding new entries -->

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>

        <div class="form-info">
          <p>Offer Your Flat</p>

          <p>
            Share your flat during the semester breaks and help a fellow
            student!
          </p>
        </div>

        <form @submit.prevent="addEntry">
          <label for="flatImage">Flat Image:</label>

          <input
            type="url"
            id="flatImage"
            placeholder="Picture URL"
            v-model="newEntry.imageUrl"
            required
          />

          <label for="availability">Availability:</label>

          <input
            type="text"
            id="availability"
            placeholder="From - To"
            v-model="newEntry.availability"
            required
          />

          <label for="cost">Cost:</label>

          <input
            type="number"
            id="cost"
            placeholder="Enter monthly cost in EUR"
            v-model="newEntry.cost"
            required
          />

          <label for="address">Address:</label>

          <input
            type="text"
            id="address"
            placeholder="Enter address"
            v-model="newEntry.address"
            required
          />

          <button type="submit">Offer Flat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entries: [
        {
          id: 1,
          imageUrl:
            'https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg',
          availability: '01.01.2023 - 01.04.2023',
          cost: 500,
          address: '123 Main St',
        },

        {
          id: 2,
          imageUrl:
            'https://www.1stfloorkoeln.com/wp-content/uploads/2020/01/1st-Floor-Koeln-Apartments-Lindenthal_Header_UG.jpg',
          availability: '01.04.2023 - 01.08.2023',
          cost: 450,
          address: '456 Oak St',
        },

        {
          id: 3,
          imageUrl:
            "https://www.kirche-und-leben.de/fileadmin/redaktion/bild/2019/07/frankfurt-hbf.jpg",
          availability: "immer",
          cost: 0,
          address: "Frankfurt HBF",
        },

        // Add more entries as needed
      ],

      showModal: false,

      newEntry: {
        imageUrl: '',

        availability: '',

        cost: '',

        address: '',
      },
    }
  },

  methods: {
    openModal() {
      this.showModal = true
    },

    closeModal() {
      this.showModal = false
    },

    addEntry() {
      // You can implement the logic to add a new entry here

      // For simplicity, let's just push the new entry to the existing array

      this.entries.push({ ...this.newEntry, id: this.entries.length + 1 })

      // Clear the form

      this.newEntry = { imageUrl: '', availability: '', cost: '', address: '' }

      // Close the modal

      this.closeModal()
    },
  },
}
</script>
<style></style>
