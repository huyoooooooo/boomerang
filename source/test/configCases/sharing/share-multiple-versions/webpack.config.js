// eslint-disable-next-line n/no-unpublished-require
const { SharePlugin } = require("../../../../").sharing;

/** @type {import("../../../../").Configuration} */
module.exports = {
	plugins: [
		new SharePlugin({
			shared: ["shared"]
		})
	]
};
