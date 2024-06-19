<template>
  <!-- Button trigger modal -->
  <div class="input-group mb-3 mx-auto position-relative">
      <input
        type="text"
        class="form-control"
        placeholder="請輸入社團名"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        v-model="name"
        ref="search"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="findClub()"
      >
        search
      </button>
      <div class="position-absolute top-100 start-0" ref="list">
        <a
          href="#"
          v-for="(item, index) in filterUsers"
          :key="index"
          class="bg-white"
          @click="select(item)"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    新增社團
  </button>
  <template v-if="!isLogin">
        <div class="row align-items-center vh-100">
        <div class="text-center">
            <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
            <div>
            <form class="form-signin" @submit.prevent="login">
                <div class="form-floating mb-3">
                <input
                    type="email"
                    class="form-control"
                    v-model="emailInput"
                    id="floatingInput"
                    placeholder="name@example.com"
                    required
                    autofocus
                />
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                <input
                    type="text"
                    class="form-control"
                    v-model="userName"
                    id="floatingPassword"
                    placeholder="Name"
                    required
                />
                <label for="floatingPassword">Name</label>
                </div>
                <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                登入
                </button>
            </form>
            </div>
        </div>
        </div>
  </template>
  <div>
    <ul>
        <li v-for="item in clubList">{{ item.name }} <button type="button" @click="deleteClub(item.id)">刪除</button> </li>
    </ul>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
            <label for="club-name">社團名稱：</label>
            <input type="text" id="club-name" v-model="clubName">
            <hr>
            <label for="introduction">社團照片：</label>
            <input type="text" id="introduction" v-model="clubPhoto">
            <hr>    
            <label for="introduction">社團簡介：</label>
            <textarea type="text" id="introduction" v-model="clubContent"></textarea>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="addClub">確定新增</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Swal from "sweetalert2";
const { $bootstrap } = useNuxtApp();
const login = async()=>{
    try{
        const owner = await $fetch('/api/friend/owner',{
            method: 'POST',
            body: {email:emailInput.value,name:userName.value}
        })
        console.log(owner.data[0])
        thisOwner.value = {...owner.data[0]}
        console.log(thisOwner.value)
        clubList.value = thisOwner.value.clubs
        console.log(clubList.value)
        isLogin.value = true
    }catch(error){
        console.log(error)
    }
}
const logout = ()=>{
  thisOwner.value = null
  isLogin.value = false
  emailInput.value = null
  userName.value = null
}
const getAllClubs = async()=>{
  try{
    const result = await $fetch(`/api/club/all`)
    clubs.value = result.data
    console.log(clubs.value)
  }catch(err){
    console.log(err)
  }
}
const isLogin = ref(false)
const name = ref("")
const search = ref("")
const list = ref("")
const thisOwner = ref({})
const emailInput = ref('')
const userName = ref('')
const clubList = ref('')
const clubName = ref('')
const clubContent = ref('')
const clubPhoto = ref('')
const tempClubUsers = ref('')
const tempClub = ref('')
const clubs = ref([])
const modal = ref(null)
let myModal
const filterUsers = computed(() => {
  const newClubs = clubs.value.filter((item) => item.name.match(name.value));
  if (newClubs.length === clubs.value.length) return null;
  else return newClubs;
});
const select = (item) => {
  name.value = item.name;
};
const addClub = async()=>{
    const data = {
        name:clubName.value,
        description:clubContent.value,
        photo:clubPhoto.value,
        id:thisOwner.value._id,
        userName:thisOwner.value.name
    }
    try{
        const addOneClub = await $fetch(`/api/club/add`,{
            method:'POST',
            body:data
        })
        console.log(addOneClub)
        alert("新增社團成功")
        login()
        closeModal()
    }catch(err){
        console.log(err)
    }
}
const deleteClub = async(id)=>{
  await findOneClubAndDelete(id)
  try{
    const deleteOneClub = await $fetch(`/api/club/remove/${id}`,{method:'DELETE'})
    console.log(deleteOneClub)
    alert("成功刪除社團")
    login()
  }catch(err){
    console.log(err)
    alert("系統出現問題，請稍後")
  }
}
const closeModal = ()=>{
    myModal.hide();
}
const findOneClubAndDelete = async (id)=>{
  try{
    const result = await $fetch(`/api/club/${id}`,{method:'GET'})
    console.log(result.data.members)
    tempClubUsers.value = result.data.members
    tempClubUsers.value.forEach(async(item)=>{
      const result = await $fetch(`/api/club/deleteMembersClub/${item.id}`,{
        method:'PATCH',
        body:{
          id:id
        }
      })
      console.log(result)
    })
  }catch(err){
    console.log(err)
  }
}
const joinClub = async(clubId,data)=>{
  try{
    const joinOneClub = await $fetch(`/api/club/join/${clubId}`,{
      method:'PATCH',
      body:data
    })
    console.log(joinOneClub)
  }catch(err){
    console.log(err)
  }

}
const findClub = async()=>{
  if(!isLogin.value){
    alert("請先登入")
    return
  }
  const index = clubs.value.findIndex((item) => item.name === name.value);
  console.log(index);
  if (index > -1) {
    tempClub.value = { ...clubs.value[index] };
    console.log(tempClub.value);
    let status = ''
    const clubIndex = tempClub.value.members.findIndex(item => item.id===thisOwner.value._id)
    if(clubIndex > -1){
        if(tempClub.value.members[clubIndex].status===true) status = '已經是社團成員'
        else status = '待確認'
    }else{
        status = '還未是社團成員'
    }
    if(clubIndex > -1){
        Swal.fire({
            title: tempClub.value.name,
            text: `社團狀態：${status}`,
            icon: "info"
        });
    }else{
        Swal.fire({
        title: tempClub.value.name,
        text: `社團狀態：${status}`,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "加社團",
        cancelButtonText:"取消"
        }).then(async (result) => {
        if (result.isConfirmed) {
            await joinClub(tempClub.value._id,{id:thisOwner.value._id,name:thisOwner.value.name})
            await getAllClubs()
            Swal.fire({
            title: "申請成功",
            text: "已經向社團送出申請",
            icon: "success",
            });
        }
        });
    }
  } else {
    alert("查無此社團");
  }
}
onMounted(() => {
  myModal = $bootstrap.modal(modal.value);
  getAllClubs()
  search.value.addEventListener("blur", () => {
    setTimeout(() => {
      list.value.style.display = "none";
    }, 300);
  });
  search.value.addEventListener("focus", () => {
    list.value.style.display = "block";
  });
});
</script>
<style scoped>
.input-group {
  max-width: 800px;
}
a {
  display: block;
  text-decoration: none;
  color: black;
}
a:hover {
  color: black;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
