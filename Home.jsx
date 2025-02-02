import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    bio: "Full-stack developer & tech enthusiast. Passionate about building web applications and exploring new technologies.",
    avatar: "https://via.placeholder.com/150",
    social: {
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe"
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg rounded-2xl bg-white">
        <CardContent className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-gray-200 mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 text-center mt-2">{user.bio}</p>
          <div className="flex space-x-4 mt-4">
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
              <a href={user.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
            </Button>
            <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-full">
              <a href={user.social.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
            </Button>
            <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full">
              <a href={user.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
