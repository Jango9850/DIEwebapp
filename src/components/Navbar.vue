<template>
  <div class="navbar" :class="{ 'open': isOpen }">
    <!-- Toggle-Button -->
    <div class="toggle-button" @click="toggleNavbar">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <!-- Brand/Logo -->
    <div class="brand">Logo</div>

    <!-- Menü-Links -->
    <div class="menu">
      <router-link to="/" class="nav-link" @click="closeNavbar">
        <span>Blackboard</span>
      </router-link>
      <router-link to="/studybuddy" class="nav-link" @click="closeNavbar">
        <span>StudyBuddy</span>
      </router-link>
      <router-link to="/housing" class="nav-link" @click="closeNavbar">
        <span>DualHousing</span>
      </router-link>
      <!-- Weitere Links hinzufügen, falls erforderlich -->
    </div>

    <!-- Dropdown-Menü -->
    <div class="dropdown-menu">
      <router-link to="/submenu1" class="nav-link" @click="closeNavbar">
        <span>Submenu 1</span>
      </router-link>
      <router-link to="/submenu2" class="nav-link" @click="closeNavbar">
        <span>Submenu 2</span>
      </router-link>
      <!-- Weitere Submenü-Links hinzufügen, falls erforderlich -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen;
    },
    closeNavbar() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 0; /* Start mit Höhe 0, um ausgeblendet zu sein */
  width: 100%;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Links ausrichten */
  justify-content: flex-start; /* Links ausrichten */
  padding-top: 20px;
  z-index: 1000;
  overflow-x: hidden;
  padding-top: 40px;
  transition: height 0.3s; /* Füge eine Transition für eine sanfte Animation hinzu */
}

.open {
  height: 50vh; /* Maximale Höhe, wenn geöffnet */
}

.toggle-button {
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
}

.brand {
  color: #fff;
  font-size: 18px;
  margin-bottom: 40px;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Links ausrichten */
  padding-left: 10px; /* Zusätzlicher Abstand links */
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Links ausrichten */
  padding-left: 15px; /* Zusätzlicher Abstand links */
  width: 40px; /* Setze die Breite auf 'auto', um nur den benötigten Platz zu verwenden */
  background-color: #333; /* Hintergrundfarbe des Dropdown-Menüs */
}

.nav-link {
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #555;
  padding: 8px;
  border-radius: 5px;
}

.nav-link span {
  background-color: #444; /* Dunkelgraue Box hinter dem Text */
  padding: 8px;
  border-radius: 5px;
  display: inline-block;
}
</style>
