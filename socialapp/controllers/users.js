import User from "../models/User.js";

// READ

export const getUser = async (req, res) => {
  // console.log("req ======", req.params);
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    // console.log("user =====",user);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
    console.log(err);
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id)
    const user = await User.findById(id);
    // console.log(user.friends.toString())
    const findFreind = await User.find({friends :user.friends.toString()}  )
    // console.log(findFreind)
    // const friends = await Promise.all(
    //   user.friends.map((id) => User.findById(id))
    //   // console.log(User.findById(id))
    // );
    // console.log("yfhfyyyyyyyyyyyyyy",friends)
    const formattedfriends =  findFreind.map(
      ({ _id, firstName, lastName, location, occupation, picturePath }) => {
        return { _id, firstName, lastName, location, occupation, picturePath };
      }
    );
   await res.status(200).json(formattedfriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
    console.log(err)
  }
};

// UPDATE

export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    // console.log(id,friendId)
    const user = await User.findById(id);
    // console.log("dsdssssssssssssssssssss",user)
    const friend = await User.findById(friendId);
    // console.log("friendsssssssssssssssssss",friend)

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedfriends = friends.map(
      ({ _id, firstName, lastName, location, occupation, picturePath }) => {
        return { _id, firstName, lastName, location, occupation, picturePath };
      }
    );
    res.status(200).json(formattedfriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
