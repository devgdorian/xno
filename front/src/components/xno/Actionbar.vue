<template>
  <section id="actionbar" class="section">
    <div class="columns has-text-centered">
      <div class="column">
        <a @click.prevent="$emit('showcharacter')">
          <p class="title">Islanzadi</p>
          <p class="heading">Status</p>
          <p class="heading">Sick</p>
        </a>
      </div>
      <div class="column">
        <a @click.prevent="$emit('showship')">
          <p class="title">The Vestoya</p>
          <p class="heading">Status</p>
          <p class="heading">Landed</p>
        </a>
      </div>
      <div class="column">
        <a @click.prevent="$emit('showxnocare')">
          <p class="title">Xnocare</p>
          <p class="heading">Needs tending : 3</p>
          <p class="heading">Can be harvested : 5</p>
        </a>
      </div>
      <div class="column">
        <a @click.prevent="$emit('showmap')">
          <p class="title">Map</p>
          <p class="heading">Current location : Helos City</p>
          <p class="heading">
            Current planet : <span class="tag is-warning">Mora</span>
          </p>
        </a>
      </div>
      <div class="column is-offset-2">
        <div>
          <p class="title">Event</p>
          <p class="heading">Next choice : Fight or flee</p>
          <p class="heading">Last choice : Take the bait</p>
        </div>
      </div>
      <div class="column">
        <div>
          <p class="title" title="xno standard time">9:79</p>
          <p class="heading">Ilupso | 5/9</p>
          <p class="heading">Cycle 820</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Actionbar",
};
</script>
