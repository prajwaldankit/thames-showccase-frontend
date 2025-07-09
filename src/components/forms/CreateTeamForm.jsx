import { useState } from "react";
import { createTeam } from "../../api/teams";

const CreateTeamForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		imgUrl: null,
		members: "",
	});

	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setFormData((prevData) => ({
					...prevData,
					imgUrl: reader.result, // base64 string
				}));
			};
			reader.readAsDataURL(file); // converts to base64
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Basic validation
		if (!formData.name || !formData.imgUrl || !formData.members) {
			setMessage("Please fill in all fields and upload an image.");
			return;
		}

		try {
			createTeam(formData);
		} catch (error) {
			setMessage(`Error: ${error.message}`);
		}
	};

	return (
		<div>
			<h2>Create New Team</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Team Name:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label>Image Upload:</label>
					<input
						type="file"
						accept="image/*"
						onChange={handleFileChange}
						required
					/>
					{formData.imgUrl && (
						<div>
							<img
								src={formData.imgUrl}
								alt="Preview"
								style={{ width: "200px", marginTop: "10px" }}
							/>
						</div>
					)}
				</div>

				<div>
					<label>Members:</label>
					<input
						type="text"
						name="members"
						value={formData.members}
						onChange={handleChange}
						required
					/>
				</div>

				<button type="submit">Create Team</button>
			</form>

			{message && <p>{message}</p>}
		</div>
	);
};

export default CreateTeamForm;
