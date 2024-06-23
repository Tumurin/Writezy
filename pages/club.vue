<template>
  <ItemsClubBanner
  @refresh-club="getClubData"
  :club-members="members" 
  :club-id="clubInfo._id"
  :club-name="clubInfo.name"
  :club-content="clubInfo.description"
  :s-image="clubInfo.photo" 
  :is-manager="isManager" 
  :is-member="isMember" 
  :status="status"
  :club-banner="clubInfo.bannerPhoto"
  />
  <ItemsClubTagList/>

  <div class="container border-top">
    <div class="row">
      <div class="col-md-3 d-flex flex-column introduction">
        <ItemsIntroductionFrame 
        :introduction="clubInfo.description"
        :members-number="membersNumber"
        />
      </div>
      <div class="col-md-6 posts h-100">
        <!-- <PostFrame />
        <hr />
        <PostFrame />
        <hr /> -->
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
const id = route.query.id
const clubInfo = ref({})
const userInfo = useAuthUser();
const owner = ref(null)
const isManager = ref(false)
const isMember = ref(false)
const status = ref(null)
const membersNumber = ref(0)
const members = ref([])
const getUserInfo  = async ()=>{
  try{
        const user = await $fetch('/api/friend/owner',{
            method: 'POST',
            body: {email:userInfo.value.email,name:userInfo.value.name}
        })
        console.log(user.data[0])
        owner.value = {...user.data[0]}
        clubInfo.value.members.forEach((item)=>{
          if(item.id===owner.value._id) {
            isManager.value = item.isManager
            isMember.value = true
            status.value = item.status
          }
        })
    }catch(error){
        console.log(error)
    }
}
console.log(userInfo.value)
const getClubData = async()=>{
  try{
    const club = await $fetch(`/api/club/${id}`)
    clubInfo.value = {...club.data}
    console.log(clubInfo.value)
    membersNumber.value = clubInfo.value.members.length
    members.value = clubInfo.value.members
  }catch(err){
    console.log(err)
  }
  
}
onMounted(async() => {
  await getClubData()
  await getUserInfo()
})
</script>
