import { User } from "~/server/models/User";
import bcrypt from "bcrypt";

export const register = async (userData) => {
  userData.password = await bcrypt.hash(userData.password, 10);
  return User.create(userData);
};

export const getUserByEmail = async (email) => {
  return User.findOne({ email: email }, { password: true }).exec();
};

export const getUserById = async (id) => {
  return User.findById(id, {
    _id: true,
    name: true,
    email: true,
  });
};

export const getAllUsers = async () => {
  return User.find();
};

export const addFriend = async (id, data) => {

  const updateFriend = await User.findByIdAndUpdate(id, {
    $push: {
      friends: {
        id: data.id,
        name: data.name,
        status: data.status,
      },
    },
  });
  return updateFriend;
};

export const confirmFriend = async (id, data) => {
  const updateFriendStatus = await User.updateOne(
    { _id: id, "friends.id": data.id },
    {
      $set: {
        "friends.$.status": true,
      },
    }
  );
  const updateOppoent = await User.findByIdAndUpdate(data.id, {
    $push: {
      friends: {
        id: id,
        name: data.myName,
        status: true,
      },
    },
  });
  return updateFriendStatus
};

export const deleteOneFriend = async (id, data) => {
  const deleteMyFriend = await User.findByIdAndUpdate(id, {
    $pull: { friends: { id: data.id } },
  });
  const deleteMe = await User.findByIdAndUpdate(data.id, {
    $pull: { friends: { id: id } },
  });
  return deleteMyFriend
}

export const getUser = async (data) => {
  const owner = await User.find({
    name: data.name,
    email: data.email,
  })
  return owner
}
