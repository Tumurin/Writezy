<template>
  <div class="container-fluid">
    <div class="hero-image">
      <div class="hero-text py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-8 d-flex">
              <div class="club-img rounded-circle position-relative">
                <div
                  class="bg-white rounded-circle position-absolute img-frame top-50 start-50 d-flex justify-content-center align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-image text-black bg-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    <path
                      d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"
                    />
                  </svg>
                </div>
              </div>
              <div class="ms-4 d-flex flex-column">
                <span class="d-block fs-2">六角學院</span>
                <span class="d-block fs-6">高雄最大軟體學習平台</span>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-end align-items-center">
              <button
                type="button"
                class="three-dots d-flex align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
                  />
                </svg>
              </button>
              <button
                class="btn add-club rounded-0 text-white ms-3"
                data-bs-toggle="modal"
                data-bs-target="#applyLists"
              >
                加入社團
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalClubRemoveMember/>
  <ModalClubApplyList/>
</template>
<style scoped>
.img-frame {
  width: 40px;
  height: 40px;
}
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://images.unsplash.com/photo-1537884944318-390069bb8665?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8fDA%3D);
  padding: 200px 2rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-text {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
}
@media (max-width: 767px) {
  .hero-image {
    padding: 100px 2rem;
  }
  .hero-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
  }
}
.club-img {
  background-image: url(https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfHwwfHx8MA%3D%3D);
  background-position: center;
  background-size: cover;
  width: 80px;
  height: 80px;
}
.three-dots {
  background-color: white;
  color: black;
  width: 40px;
  height: 40px;
}
.add-club {
  width: 96px;
  height: 40px;
  background-color: #8135d8;
  font-size: 16px;
}
</style>