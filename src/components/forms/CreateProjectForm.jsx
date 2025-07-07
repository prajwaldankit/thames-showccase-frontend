import { useState } from "react";
import { createProject } from "../../api/projects";

const CreateProjectForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		genre: "",
		imgUrl: "",
		team: "",
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

		if (
			!formData.name ||
			!formData.genre ||
			!formData.imgUrl ||
			!formData.team
		) {
			setMessage("Please fill in all fields and upload an image.");
			return;
		}

		try {
			createProject(formData);
		} catch (error) {
			setMessage(`Error: ${error.message}`);
		}
	};

	return (
		<div>
			<h2>Create New Project</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Project Name:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label htmlFor="genre">Genre:</label>
					<input
						type="text"
						name="genre"
						value={formData.genre}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label htmlFor="imgUrl">Image Upload:</label>
					<input
						type="file"
						name="imgUrl"
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
					<label htmlFor="team">Team:</label>
					<input
						type="text"
						name="team"
						value={formData.team}
						onChange={handleChange}
						required
					/>
				</div>

				<button type="submit">Create Project</button>
			</form>

			{message && <p>{message}</p>}
		</div>
	);
};

export default CreateProjectForm;

