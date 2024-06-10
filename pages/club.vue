<template>
  <ItemsClubBanner />
  <ItemsClubTagList />

  <div class="container border-top">
    <div class="row">
      <div class="col-md-3 d-flex flex-column introduction">
        <ItemsIntroductionFrame/>
      </div>
      <div class="col-md-6 posts h-100">
        <PostFrame />
        <hr />
        <PostFrame />
        <hr />
      </div>
    </div>
  </div>
</template>
