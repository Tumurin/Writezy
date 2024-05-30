<template>
  <SearchInput></SearchInput>
  <Icon name="bi:facebook"/>
  <Icon name="bi:youtube"/>
  <Icon name="ph:instagram-logo-bold"/>
  <Icon name="material-symbols:menu-rounded"/>
  <Icon name="material-symbols:arrow-forward-ios"/>
  <Icon name="material-symbols:arrow-back-ios-new-rounded"/>
  <Icon name="ph:magnifying-glass"/>
  <Icon name="ic:outline-clear"/>
  <Icon name="material-symbols:more-horiz"/>
  <Icon name="tabler:pencil"/>
  <Icon name="material-symbols:bookmark-outline-rounded"/>
  <Icon name="material-symbols:person-outline-rounded"/>
  <Icon name="material-symbols:person-rounded" class="text-light"/>
  <Icon name="ic:baseline-notifications-none"/>
  <Icon name="ic:baseline-notifications" class="text-light"/>
  <Icon name="material-symbols:inbox-outline"/>
  <Icon name="material-symbols:inbox"/>
  <Icon name="mdi:heart-outline"/>
  <Icon name="ic:outline-keyboard-arrow-left"/>
  <Icon name="ic:outline-keyboard-arrow-right"/>
  <Icon name="ic:outline-keyboard-arrow-up"/>
  <Icon name="ic:outline-keyboard-arrow-down"/>
  <Icon name="mdi:fire"/>
  <Icon name="mdi:tag-outline"/>
  <Icon name="cil:image-plus"/>
  <Icon name="basil:share-outline"/>
  <Icon name="mdi-light:comment"/>
  <Icon name="bx:dislike"/>
  <Icon name="lucide:thumbs-up"/>
  <Icon name="ion:thumbs-up-sharp"/>
  <Icon name="quill:pause"/>
  <Icon name="teenyicons:play-outline"/>
  <Icon name="fluent:speaker-0-48-regular"/>
  <Icon name="fluent:speaker-mute-28-regular"/>
  <Icon name="fluent:speaker-2-32-regular"/>
  <Icon name="f7:speaker-1"/>
  <Icon name="octicon:screen-full-24"/>
  <Icon name="streamline:interface-user-delete-actions-close-delete-deny-fail-geometric-human-person-remove-single-up-user"/>
  <Icon name="ph:gear-bold"/>
  <Icon name="mdi:clock-outline"/>
  <Icon name="akar-icons:people-group"/>
  <Icon name="ic:sharp-group"/>
  <Icon name="ic:outline-insert-drive-file"/>
  <Icon name="material-symbols:layers-outline"/>
  <br/>
  <div class="bg-black p-2">
    <TagOrangeM></TagOrangeM>
    <TagOrange></TagOrange>
    <TagBlue></TagBlue>
    <TagYellow></TagYellow>
    <TagPink></TagPink>
    <TagGreen></TagGreen>
  </div>
  <br/>
  <ButtonFilledArrowLeft></ButtonFilledArrowLeft>
  <ButtonFilledArrowRight></ButtonFilledArrowRight>
  <ButtonFilledBergurMenu></ButtonFilledBergurMenu>
  <ButtonFilledPlay></ButtonFilledPlay>
  <ButtonFilledPause></ButtonFilledPause>
  <br/>

  <div class="bg-black p-2">
    <ButtonFlatArrowLeft></ButtonFlatArrowLeft>
    <ButtonFlatArrowRight></ButtonFlatArrowRight>
    <ButtonFlatBergurMenu></ButtonFlatBergurMenu>
    <ButtonFlatUser></ButtonFlatUser>
    <ButtonFlatBell></ButtonFlatBell>
    <ButtonFlatNotification></ButtonFlatNotification>
    <ButtonFlatPhoto></ButtonFlatPhoto>
    <ButtonFlatClear></ButtonFlatClear>
    <ButtonFlatArrowLeftSmall></ButtonFlatArrowLeftSmall>
  </div>
  <br/>
  <ButtonOutlinedPhoto></ButtonOutlinedPhoto>
  <CardStraight></CardStraight>
  <CardHorizontal></CardHorizontal>
  <CardIntroduce></CardIntroduce>
    發文區
    <div class="middle-wrapper d-flex">
      <UIAvatar class="me-3" userId="abcd1234"></UIAvatar>
      <input type="text" class="form-control" placeholder="發布心情..." />
    </div>
    <div class="horizontal-line-grey my-3"></div>
    貼文串
    <div class="bg-xc" v-for="post in posts" :key="post.id">
      <div class="row mx-0 mb-3">
        頭像、姓名、發文日期
        <div class="col-11 d-flex">
          <UIAvatar class="me-3" userId="abcd1234"></UIAvatar>
          <div>
            <p class="mb-0 fw-700">林小明<span class="ms-3 fw-0 text-grey-04 ">3月16日 18:03</span></p>
            <p class="mb-0 fw-400 fs-8 text-grey-08">汽車維修員</p>
          </div>
        </div>
        ... 編輯按鈕
        <div class="col-1 d-flex justify-content-end">
          <Icon name="material-symbols:more-horiz"/>
        </div>
      </div>
      內容、照片或影片
      <div class="row mx-0 d-flex justify-content-between">
        <div v-if="post.pic">
          <div class="col-7">
            <p class="mb-0 multiline-ellipsis" style="margin-left: 3.5rem;">{{ post.content }}</p>
          </div>
          <div class="col-5">
            <img :src="post.pic" alt="">
          </div>
        </div>

        <div v-else-if="post.video">
          <div class="col-12">
            <p class="mb-0 multiline-ellipsis" style="margin-left: 3.5rem;">{{ post.content }}</p>
          </div>
          <div class="col-12">{{ post.video }}</div>
        </div>

        <div v-else>

        </div>
      </div>
      <div class="d-flex justify-content-center mb-3">
        <button type="button" class="btn">看更多</button>
      </div>
      按讚、留言..區塊
      <div class="row mx-0 like-margin">
        <div class="col-11">
          <span class="me-3">
            <Icon name="carbon:thumbs-up" class="fs-6 me-2"/>
            <span>99</span>
          </span>
          <span class="me-3">
            <Icon name="octicon:comment-24" class="fs-6 me-2"/>
            <span>99</span>
          </span>
          <span>
            <Icon name="basil:share-outline" class="fs-6 me-2"/>
            <span>99</span>
          </span>
        </div>
        <div class="col-1 d-flex justify-content-end">
          <span>
            <Icon name="bi:bookmark" class="fs-6"/>
          </span>
        </div>
      </div>
      <div class="horizontal-line-grey my-3"></div>
    </div>
  </div> -->
</template>