import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const FormInput = ({ onBack, onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarFile, setAvatarFile] = useState(null); // Store the uploaded file
  const [avatarUrl, setAvatarUrl] = useState(""); // Store the Cloudinary URL
  const [errors, setErrors] = useState({});

  // Load saved form data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFullName(savedData.fullName || "");
      setEmail(savedData.email || "");
      setAvatarUrl(savedData.avatarUrl || ""); // Load the saved URL
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify({ fullName, email, avatarUrl }));
  }, [fullName, email, avatarUrl]);

  const validate = () => {
    let newErrors = {};
    if (!fullName || fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!avatarFile) {
      newErrors.avatar = "Avatar is required. Upload a valid image.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ fullName, email, avatarUrl }); // Pass the Cloudinary URL to the next page
    }
  };

  const handleAvatarUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarFile(file); // Store the uploaded file
      setErrors((prev) => ({ ...prev, avatar: "Uploading image..." })); // Show uploading message

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "attendee_upload");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dfbj6wlq2/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        if (data.secure_url) {
          setAvatarUrl(data.secure_url); // Set the Cloudinary URL
          setErrors((prev) => ({ ...prev, avatar: "" })); // Remove error on successful upload
        } else {
          throw new Error("Failed to upload image to Cloudinary");
        }
      } catch (error) {
        console.error(error);
        setErrors((prev) => ({
          ...prev,
          avatar: "Failed to upload avatar. Please try again.",
        }));
      }
    }
  };

  return (
    <div className=" w-5/6 mx-auto p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Attendee Details</h2>
        <p className="text-sm text-gray-400">Step 2/3</p>
      </div>
      <img src="/image.png" alt="Ticket" className="w-5/6 h-1 mb-6" />
      <div className="border border-[#0E464F] px-2 mt-2 rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 bg-[#05228] mt-2 h-32 p-2 rounded-md">
          <label htmlFor="avatar" className="block text-sm font-medium mb-1 mt-1">
            Upload Profile Picture
          </label>
          <div
            className="w-full h-16 mt-3 bg-[#052228] border-2 relative border-none rounded-md flex flex-col items-center justify-center cursor-pointer"
            onClick={() => document.getElementById("avatar").click()}
          >
            <div className="bg-[#0E464F] border-2 border-[#24A0B5] rounded-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 h-20 mt-1">
            <img
              src="/icon.png" 
              alt="Upload Icon"
              className="w-5 h-5 mb-2 mx-auto mt-1"
            />
            <p className="text-center text-white text-sm w-40">Drag & drop or click to upload an image</p>
            </div>
          </div>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
            className="hidden"
            aria-describedby="avatarError"
            aria-invalid={!!errors.avatar}
          />
          {errors.avatar && (
            <p id="avatarError" className="text-red-500 text-sm" role="alert">
              {errors.avatar}
            </p>
          )}
          {avatarFile && (
            <div className="mt-2">
              <p className="text-sm text-white">
                Uploaded file: <strong>{avatarFile.name}</strong>
              </p>
            </div>
          )}
        </div>
        <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium mb-1">
            Enter your name
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full p-2 rounded-md text-white bg-transparent border border-ticz"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            aria-describedby="fullNameError"
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && (
            <p id="fullNameError" className="text-red-500 text-sm" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Enter your email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 rounded-md text-white bg-transparent border border-ticz"
            placeholder="hello@avioflagos.io"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailError"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="emailError" className="text-red-500 text-sm" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Special request?
          </label>
          <textarea placeholder="Textarea" className=" p-2 resize-none h-auto text-white bg-transparent border border-ticz rounded md w-full"></textarea>
          </div> 
        <div className="flex flex-col sm:flex-row justify-between mt-6 gap-2">
          <button
            type="button"
            className="px-4 py-2 rounded-md w-60 text-ticz bg-transparent border border-ticz sm:w-30"
            onClick={onBack}
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-ticz w-60 text-white rounded-md sm:w-30"
          >
            Get My Free Ticket
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

// PropTypes validation
FormInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  onSubmit: () => console.log("Form submitted!"), // Default function if not provided
  onBack: () => console.log("Back button clicked!"), // Default function if not provided
};


export default FormInput;