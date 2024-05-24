<template>
  <div class="border-bottom">
    <div class="container-lg container-fluid">
      <!-- 導航 -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="row w-100">
          <div class="col-lg-3 col-2">
            <UILogo></UILogo>
          </div>
          <div class="col-lg-6 col-8">
            <SearchInput></SearchInput>
          </div>
          <div class="col-lg-3 col-2 d-flex justify-content-end">
            <ButtonFlatBell class="d-none d-lg-block"></ButtonFlatBell>
            <ButtonFlatNotification class="d-none d-lg-block"></ButtonFlatNotification>
            <UIAvatar class="d-none d-lg-block" userId="abcd1234"></UIAvatar>
            <ButtonFilledBergurMenu class="d-lg-none"></ButtonFilledBergurMenu>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
