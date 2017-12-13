<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light navbar-shrink" id="mainNav">
      <div class="container">
        <router-link to="/" class="navbar-brand js-scroll-trigger">Sync Raffle</router-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="navbar-brand js-scroll-trigger">Winners</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/users" class="navbar-brand js-scroll-trigger">Manage Users</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
	</div>
</template>