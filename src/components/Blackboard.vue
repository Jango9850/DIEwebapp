<template>
    <div>
      <header>
        <h1>Blackboard</h1>
        <nav>
          <router-link to="/blackboard">Blackboard</router-link>
          <router-link to="/housing">DualHousing</router-link>
        </nav>
      </header>
  
      <div class="blackboard">
        <div class="header">
          <i class="fas fa-chalkboard-teacher icon"></i> DHBW Mannheim Digital Blackboard
        </div>
  
        <div class="content">
          <p>Welcome to the digital blackboard for our university. Here you'll find important announcements, updates, events and other usefull information.</p>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .blackboard {
    background-color: #666; /* Grey background */
    color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    width: 90%; /* Adjust the width for responsiveness */
    margin: 20px auto; /* Center the blackboard with some space */
  }
  </style>
  <script>
  // Your component logic here
  </script>
  
  