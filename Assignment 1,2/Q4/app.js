function fetchUserProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userProfile = {
        userId: userId,
        name: "Hari",
        age: 30,
        email: "ofchari@example.com",
      };
      resolve(userProfile);
    }, 1000); // Simulate a 1-second delay
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userPosts = [
        { postId: 1, content: "Hello world!" },
        { postId: 2, content: "This is a sample post." },
      ];
      resolve(userPosts);
    }, 1000); // Simulate a 1-second delay
  });
}

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    Promise.all([fetchUserProfile(userId), fetchUserPosts(userId)])
      .then((results) => {
        const [userProfile, userPosts] = results;
        const combinedUserData = {
          profile: userProfile,
          posts: userPosts,
        };
        resolve(combinedUserData);
      })
      .catch((error) => {
        reject(`Error fetching user data: ${error}`);
      });
  });
}

// Example usage
getUserData(1)
  .then((userData) => {
    console.log("Combined User Data:", userData);
  })
  .catch((error) => {
    console.error(error);
  });
