<template>
  <div class="container">
    <div class="input-group mb-3 mx-auto position-relative">
      <input
        type="text"
        class="form-control"
        placeholder="請輸入姓名"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        v-model="name"
        ref="search"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="findUser()"
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
    <div v-if="isLogin" class="mt-3 text-center">
      <span class="me-3">登入者：{{thisOwner.name}}</span>
      <button class="btn btn-primary" @click="logout()">登出</button>
      <h3>好友清單</h3>
      <ul class="list-unstyled">
        <li v-for="(item,index) in thisOwner.friends" :key="index" class="mb-3">
          {{ item.name }} <button class="btn btn-primary" v-if="!item.status" @click="confirmFriend(item.id)">確認</button>
          <button class="btn btn-danger" v-else @click="deleteFriend(item.id)">刪除</button>
        </li>
      </ul>
    </div>
  </div>
  <PostsPostFrame/>
</template>
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
<script setup>
import Swal from "sweetalert2";
const login = async()=>{
    try{
        const owner = await $fetch('http://127.0.0.1:3005/relationship/owner',{
            method: 'POST',
            body: {email:emailInput.value,name:userName.value}
        })
        thisOwner.value = {...owner.data[0]}
        console.log(thisOwner.value)
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
const isLogin = ref(false)
const thisOwner = ref({})
const emailInput = ref('')
const userName = ref('')
const search = ref("");
const list = ref("");
const users = ref([]);
const name = ref("");
const tempUser = ref("");
const addFriend = async()=>{
  const data = {
    id:thisOwner.value._id,
    name:thisOwner.value.name,
    status:false
  }
  try{
    const newFriend = await $fetch(`http://127.0.0.1:3005/relationship/addFriend/${tempUser.value._id}`,{
      method:'PATCH',
      body:data
    })
    console.log(newFriend)
  }catch(error){
    console.log(error)
  }
  getAllUsers()
}
const confirmFriend = async(oppoentId)=>{
  const id = thisOwner.value._id
  try{
    const confirmNewFriend = await $fetch(`http://127.0.0.1:3005/relationship/confirm/${id}`,{
      method:'PATCH',
      body:{
        id:oppoentId,
        myName:thisOwner.value.name
      }
    })
    console.log(confirmNewFriend)
  }catch(error){
    console.log(error)
  }
  login()
  getAllUsers()
}
const deleteFriend = async(oppoentId)=>{
  const id = thisOwner.value._id
  try{
    const deleteMyFriend = await $fetch(`http://127.0.0.1:3005/relationship/deleteFriend/${id}`,{
      method:'PATCH',
      body:{
        id:oppoentId,
        myName:thisOwner.value.name
      }
    })
    console.log(deleteMyFriend)
  }catch(error){
    console.log(error)
  }
  login()
  getAllUsers()
}
const filterUsers = computed(() => {
  const newUsers = users.value.filter((item) => item.name.match(name.value));
  if (newUsers.length === users.value.length) return null;
  else return newUsers;
});
const getAllUsers = async () => {
  try {
    const allUsers = await $fetch("http://127.0.0.1:3005/relationship/all");
    users.value = allUsers.data;
    console.log(users.value);
  } catch (error) {
    console.log(error);
  }
};
const select = (item) => {
  name.value = item.name;
};
const findUser = () => {
  if(!isLogin.value){
    alert("請先登入")
    return
  }
  const index = users.value.findIndex((item) => item.name === name.value);
  console.log(index);
  if (index > -1) {
    tempUser.value = { ...users.value[index] };
    console.log(tempUser.value);
    let status = ''
    const friendIndex = tempUser.value.friends.findIndex(item => item.id===thisOwner.value._id)
    if(friendIndex > -1){
        if(tempUser.value.friends[friendIndex].status===true) status = '已經是好友'
        else status = '待確認'
    }else{
        if(tempUser.value._id===thisOwner.value._id) status = '自己'
        else status = '還未是好友'
    }
    if(friendIndex > -1 || status === '自己'){
        Swal.fire({
            title: tempUser.name,
            text: `好友狀態：${status}`,
            icon: "info"
        });
    }else{
        Swal.fire({
        title: tempUser.name,
        text: `好友狀態：${status}`,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "加好友",
        cancelButtonText:"取消"
        }).then((result) => {
        if (result.isConfirmed) {
            addFriend()
            Swal.fire({
            title: "申請成功",
            text: "已經向對方送出好友申請",
            icon: "success",
            });
        }
        });
    }
  } else {
    alert("查無此人");
  }
};
onMounted(() => {
  getAllUsers();
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
