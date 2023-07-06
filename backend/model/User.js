import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    select: false,
  },

  timeline: [
    {
      title: String,
      description: String,
      date: Date,
    },
  ],

  skills: {
    image1: {
      public_id: String,
      url: String,
    },

    image2: {
      public_id: String,
      url: String,
    },
    image3: {
      public_id: String,
      url: String,
    },
    image4: {
      public_id: String,
      url: String,
    },
    image5: {
      public_id: String,
      url: String,
    },
    image6: {
      public_id: String,
      url: String,
    },
    image7: {
      public_id: String,
      url: String,
    },
    title1: String,
    title2: String,
    title3: String,
    title4: String,
    title5: String,
    title6: String,
    subtitle1: String,
    subtitle2: String,
    subtitle3: String,
    subtitle4: String,
    subtitle5: String,
    subtitle6: String,
  },

  youtube: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
    },
  ],

  projects: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
      description: String,
      techStack: String,
    },
  ],

  about: {
    name: String,
    title: String,
    subtitle: String,
    description: String,
    quote: String,
    avatar: {
      public_id: String,
      url: String,
    },
    description3: String,
    discription1: String,
    description2: String,
    skill1name6: String,
    skill1name5: String,
    skill1name4: String,
    skill1name1: String,
    skill1name2: String,
    skill1name3: String,
  },
});

export const User = mongoose.model("User", userSchema);
