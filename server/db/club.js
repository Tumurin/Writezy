import { Club } from "~/server/models/Club";
import { User } from "~/server/models/User";
import { ClubIntro } from "~/server/models/ClubIntro";

// 查找所有社團
export const getAllClubs = async () => {
  const clubs = await Club.find();
  return clubs;
};
// 查找單一社團
export const findOneClub = async (id) => {
  const club = await Club.findById(id).populate({path:'members.introduction',select:'content'}) //社團id
  return club;
};
// 新增社團
export const addOneClub = async (data) => {
  const newClub = await Club.create({
    name: data.name,
    description: data.description,
    photo:data.photo,
    bannerPhoto:data.bannerPhoto,
    members: [
      {
        id: data.id,
        name: data.userName,
        status: true,
        isManager: true,
      },
    ],
  });
  // 使用者社團清單中新增社團
  const updateClub = await User.findByIdAndUpdate(data.id, {
    $push: {
      clubs: {
        id: newClub._id,
        name: newClub.name,
      },
    },
  });
  return newClub;
};
// 查找所有社團中的成員裡面的社團清單並刪除
export const deleteMembersClub = async (id,clubId)=>{
  const findOneClub = await User.findByIdAndUpdate(id,{
    $pull: { clubs: { id:clubId } }
  })
  return findOneClub
}
// 刪除社團
export const deleteOneClub = async (id) => {
  const deleteClub = await Club.findByIdAndDelete(id);
  return deleteClub;
};
// 修改社團內容
export const modifyOneClub = async (id, data) => {
  const updateClub = await Club.findByIdAndUpdate(id, {
    name: data.name,
    description: data.description,
    photo:data.photo,
    bannerPhoto:data.bannerPhoto
  });
  return updateClub;
};
// 加入社團
export const joinOneClub = async (id, data) => {
  // id為社團id data為使用者資料
  // 如果已經是成員就不能加入
  // const repeat = await Club.findOne({_id:id}).select({members:{$elemMatch:{id:data.id}}})
  // console.log(repeat.members)
  // if(!repeat.members) return {message:"已經是社團成員了"}
  const updateMembers = await Club.findByIdAndUpdate(id, {
    $push: {
      members: {
        id: data.id,
        name: data.name,
        status: false,
        isManager: false,
        introduction:data.introId
      },
    },
  });
  return updateMembers;
};
// 同意加入社團
export const agreeWithClub = async (id, data) => {
  // id為使用者資料，data為社團資料
  const updateMember = await Club.updateOne(
    { _id: data.id, "members.id": id },
    {
      $set: {
        "members.$.status": true,
      },
    },
    {
      new: true,
    }
  );
  await User.findByIdAndUpdate(id, {
    $push: {
      clubs: {
        id: data.id,
        name: data.name,
      },
    },
  });
  return updateMember;
};
// 刪除社團成員
export const removeOneMember = async (id, clubId) => {
  // id為使用者資訊，clubId為社團資訊
  const deleteClubMember = await Club.findByIdAndUpdate(clubId, {
    $pull: { members: { id: id } },
  });
  await User.findByIdAndUpdate(id, {
    $pull: { clubs: { id: clubId } },
  });
  return deleteClubMember;
};
// 加入社團管理員
export const addOneManager = async (id, data) => {
  // id為社團中成員，data為社團資訊
  const updateMember = await Club.updateOne(
    { _id: data.id, "members.id": id },
    {
      $set: {
        "members.$.isManager": true,
      },
    },
    {
      new: true,
    }
  );
  await User.findByIdAndUpdate(id, {
    $push: {
      clubs: {
        id: data.id,
        name: data.name,
      },
    },
  });
  return updateMember
};
// 移除社團管理員
export const removeOneManager = async (id, data) => {
  // id為社團中成員，data為社團資訊
  const updateMember = await Club.updateOne(
    { _id: data.id, "members.id": id },
    {
      $set: {
        "members.$.isManager": false,
      },
    },
    {
      new: true,
    }
  );
  await User.findByIdAndUpdate(id, {
    $push: {
      clubs: {
        id: data.id,
        name: data.name,
      },
    },
  });
  return updateMember
};
// 入社理由
export const clubIntroduction = async (data)=>{
  const introduction = await ClubIntro.create({
    content:data.content,
    author:data.id
  })
  return introduction
}
// 刪除入社理由
export const deleteClubIntro = async (id)=>{
  const intro = await ClubIntro.findByIdAndDelete(id)
  return intro
}