<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-nav">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link :to="{name: 'home'}" class="nav-link" aria-current="page" style="font-size:16px"><b>NURI RAHMAT</b></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- render vue router -->
    <router-view></router-view>

  </div>
</template>

<script>
  export default {

  }
</script>

<style>
 body {
   background-color: #f1f1f1 !important;
 }
 .bg-nav{
   background-color: #16BFB1;
 }
 .mt-custom {
   margin-top: 90px;
 }
</style>