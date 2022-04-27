import axios from 'axios';

export const sendEmail = async (data, file = false) => {
		let result = [];
		const config = {
				headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Access-Control-Allow-Origin': '*'
				}
		}
		await axios
				.post(`https://send-emails-rkt.herokuapp.com/api/rktsite`, data)
				.then((res) => {
						console.log("sendEmail result", res.data);
						result = {data: res.data, error: false};
				})
				.catch((error) => {
						console.log("sendEmail catch", error);
						result = {error: true};
				});
		return result;
};